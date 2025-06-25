/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";

export interface CustomCube {
  matrix: THREE.Matrix4 | any;
  texture?: THREE.Texture | THREE.Material | THREE.Color | null;
  color?: THREE.Color;
  depth: number;
  CoordLT: PositionObject3D;
  CoordLB: PositionObject3D;
  CoordRT: PositionObject3D;
  CoordRB: PositionObject3D;
  startZ: PositionObject3D;
  positionWorld: PositionObject3D;
  endZ: PositionObject3D;
}

interface ShadowParams {
  shadowMap: THREE.Texture;
  lightMatrix: THREE.Matrix4;
  lightDirection: THREE.Vector3;
  lightPosition?: THREE.Vector3;
  lightColor: THREE.Color;
  shadowBias?: number;
  shadowDarkness?: number;
  lightIntensity?: number;
}

const CuttingCustomShadowBox = (
  Figure: CustomCube,
  shadowParams?: ShadowParams,
  tempCOLOR = 0xffffff
): THREE.ShaderMaterial => {
  let useTexture = false;
  let tex: THREE.Texture | null = null;
  let colorValue = new THREE.Color(tempCOLOR);
  let opacityValue = 0.2;

  if (Figure.texture) {
    if ((Figure.texture as THREE.Texture).isTexture) {
      useTexture = true;
      tex = Figure.texture as THREE.Texture;
    } else if ((Figure.texture as THREE.Material).isMaterial) {
      const mat = Figure.texture as THREE.Material & any;
      if (mat.map && (mat.map as THREE.Texture).isTexture) {
        useTexture = true;
        tex = mat.map as THREE.Texture;
      } else if (mat.color && mat.color instanceof THREE.Color) {
        colorValue = mat.color;
      }
      opacityValue = mat.opacity !== undefined ? mat.opacity : 1.0;
    } else if (Figure.texture instanceof THREE.Color) {
      colorValue = Figure.texture;
    }
  }

  const hasShadow = Boolean(
    shadowParams?.shadowMap &&
      shadowParams.lightMatrix &&
      shadowParams.lightDirection
  );
  const hasLightPos = Boolean(hasShadow && shadowParams!.lightPosition);

  const uniforms: Record<string, any> = {
    u_CoordLT: { value: Figure.CoordLT },
    u_CoordLB: { value: Figure.CoordLB },
    u_CoordRT: { value: Figure.CoordRT },
    u_CoordRB: { value: Figure.CoordRB },
    u_startZ: { value: Figure.startZ },
    positionWorld: { value: Figure.positionWorld },
    u_endZ: { value: Figure.endZ },

    u_useTexture: { value: useTexture },
    u_texture: { value: tex || new THREE.Texture() },
    u_color: { value: colorValue },
    u_opacity: { value: opacityValue },

    u_modelMatrix: { value: Figure.matrix },
    u_hasShadowMap: { value: hasShadow },
    u_shadowMap: {
      value: hasShadow ? shadowParams!.shadowMap : new THREE.Texture(),
    },
    u_lightMatrix: {
      value: hasShadow ? shadowParams!.lightMatrix : new THREE.Matrix4(),
    },
    u_lightDirection: {
      value: hasShadow
        ? shadowParams!.lightDirection.clone().normalize()
        : new THREE.Vector3(0, 1, 0),
    },
    u_lightPosition: {
      value:
        hasLightPos && shadowParams!.lightPosition
          ? shadowParams!.lightPosition.clone()
          : new THREE.Vector3(0, 10, 0),
    },
    u_lightColor: {
      value: hasShadow
        ? shadowParams!.lightColor.clone()
        : new THREE.Color(tempCOLOR),
    },
    u_lightIntensity: { value: shadowParams?.lightIntensity ?? 1.0 },
    u_shadowBias: { value: shadowParams?.shadowBias ?? 0.005 },
    u_shadowDarkness: { value: shadowParams?.shadowDarkness ?? 0.5 },

    u_usePointLight: { value: hasLightPos ? 1 : 0 },
  };

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    uniform mat4 u_modelMatrix;
    void main() {
      vUv = uv;
      vec4 worldPosition = u_modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vNormal = normalize(mat3(u_modelMatrix) * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;

    uniform vec3 u_CoordLT;
    uniform vec3 u_CoordLB;
    uniform vec3 u_CoordRT;
    uniform vec3 u_CoordRB;
    uniform vec3 u_startZ;
    uniform vec3 positionWorld;
    uniform vec3 u_endZ;

    uniform bool u_useTexture;
    uniform sampler2D u_texture;
    uniform vec3 u_color;
    uniform float u_opacity;

    uniform bool u_hasShadowMap;
    uniform sampler2D u_shadowMap;
    uniform mat4 u_lightMatrix;
    uniform vec3 u_lightDirection;
    uniform vec3 u_lightPosition;
    uniform vec3 u_lightColor;
    uniform float u_shadowBias;
    uniform float u_shadowDarkness;
    uniform float u_lightIntensity;

    uniform int u_usePointLight;

    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;

    // Three.js дает uniform vec3 cameraPosition
    void main() {
      vec4 baseColor = u_useTexture ? texture2D(u_texture, vUv) : vec4(u_color, u_opacity);
      vec3 materialColor = baseColor.rgb;
      if (materialColor == vec3(0.0)) {
        materialColor = vec3(1.0);
      }

      vec3 normal = normalize(vNormal);

      // Light direction и attenuation
      vec3 lightDir;
      float attenuation = 1.0;
      if (u_usePointLight == 1) {
        vec3 L = u_lightPosition - vWorldPosition;
        float dist = length(L);
        lightDir = normalize(L);
        attenuation = u_lightIntensity / (dist * dist + 0.0001);
      } else {
        lightDir = normalize(u_lightDirection);
      }

      // Обычный диффуз
      float NdotL = max(dot(normal, lightDir), 0.0);

      // Добавляем topFactor, как ранее:
      float topFactor = max(normal.y, 0.0) * 0.5;
      float NdotL_mod = NdotL + topFactor;

      vec3 diffuse = materialColor * u_lightColor * NdotL_mod * attenuation;

      // Specular
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
      vec3 specular = u_lightColor * spec * attenuation;

      // Ambient (снижен)
      float ambient = 0.1;
      vec3 lighting = ambient * materialColor + diffuse + specular;

      // Тени: применяем только к diffuse+specular
      float shadowFactor = 0.4;
      if(u_hasShadowMap) {
        vec4 lightCoord = u_lightMatrix * vec4(vWorldPosition, 1.0);
        vec3 projCoords = lightCoord.xyz / lightCoord.w;
        projCoords = projCoords * 0.5 + 0.5;
        if(projCoords.x >= 0.0 && projCoords.x <= 1.0 &&
           projCoords.y >= 0.0 && projCoords.y <= 1.0 &&
           projCoords.z <= 1.0) {
          float closestDepth = texture2D(u_shadowMap, projCoords.xy).r;
          float currentDepth = projCoords.z;
          float shadow = smoothstep(closestDepth, closestDepth + u_shadowBias, currentDepth);
          float base = mix(1.0 - u_shadowDarkness, 1.0, 1.0 - shadow);
          shadowFactor = base;
        }
      }

      // Clipping
      if(u_startZ.z > u_endZ.z) {
        if(vWorldPosition.z > u_startZ.z || vWorldPosition.z < u_endZ.z) {
          vec3 lit = ambient * materialColor + (diffuse + specular) * shadowFactor;
          gl_FragColor = vec4(lit, baseColor.a);
          return;
        }
      } else {
        if(vWorldPosition.z < u_startZ.z || vWorldPosition.z > u_endZ.z) {
          vec3 lit = ambient * materialColor + (diffuse + specular) * shadowFactor;
          gl_FragColor = vec4(lit, baseColor.a);
          return;
        }
      }

      // Discard-низ
      float zDiff = vWorldPosition.z - positionWorld.z;
      float coeffRB = -zDiff / u_CoordRB.z;
      float coeffLB = -zDiff / u_CoordLB.z;
      float coeffRT = -zDiff / u_CoordRT.z;
      if (
        -vWorldPosition.x + (u_startZ.x * 0.5) + positionWorld.x >= u_CoordRB.x * coeffRB &&
        -vWorldPosition.x - (u_startZ.x * 0.5) + positionWorld.x <= u_CoordLB.x * coeffLB &&
        -vWorldPosition.y - (u_startZ.y * 0.5) + positionWorld.y <= u_CoordRB.y * coeffRB &&
        -vWorldPosition.y + (u_startZ.y * 0.5) + positionWorld.y >= u_CoordRT.y * coeffRT
      ) {
        discard;
      }

      vec3 lit = ambient * materialColor + (diffuse + specular) * shadowFactor;
      gl_FragColor = vec4(lit, baseColor.a);
    }
  `;

  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
  });
};

export { CuttingCustomShadowBox };
