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

const CuttingCustomBox = (
  Figure: CustomCube,
  tempCOLOR = 0xffffff
): THREE.ShaderMaterial => {
  let useTexture = false;
  let tex: THREE.Texture | null = null;
  let colorValue = new THREE.Color(tempCOLOR);
  let opacityValue = 1;

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
      opacityValue = mat.opacity !== undefined ? mat.opacity : 0.5;
    } else if (Figure.texture instanceof THREE.Color) {
      colorValue = Figure.texture;
    }
  }

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
  };

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    uniform mat4 u_modelMatrix;
    void main() {
      vUv = uv;
      vec4 worldPosition = u_modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
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

    varying vec2 vUv;
    varying vec3 vWorldPosition;

    void main() {
      vec4 baseColor = u_useTexture ? texture2D(u_texture, vUv) : vec4(u_color, u_opacity);
      vec3 materialColor = baseColor.rgb;
      if (materialColor == vec3(0.0)) {
        materialColor = vec3(1.0);
      }

      float dimmingFactor = 0.6;
       materialColor *= dimmingFactor;

      // Clipping по Z
      if (u_startZ.z > u_endZ.z) {
        if (vWorldPosition.z > u_startZ.z || vWorldPosition.z < u_endZ.z) {
          gl_FragColor = vec4(materialColor, baseColor.a);
          return;
        }
      } else {
        if (vWorldPosition.z < u_startZ.z || vWorldPosition.z > u_endZ.z) {
          gl_FragColor = vec4(materialColor, baseColor.a);
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

      gl_FragColor = vec4(materialColor, baseColor.a);
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

export { CuttingCustomBox };
