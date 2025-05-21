/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";

export interface CustomCube {
  matrix: any;
  texture: THREE.Material | THREE.Material[] | any;
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
  shadowParams?: {
    shadowMap?: THREE.Texture;
    lightMatrix?: THREE.Matrix4;
    lightPosition?: THREE.Vector3;
    shadowBias?: number;
    shadowDarkness?: number;
  }
): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    uniforms: {
      u_CoordLT: { value: Figure.CoordLT },
      u_CoordLB: { value: Figure.CoordLB },
      u_CoordRT: { value: Figure.CoordRT },
      u_CoordRB: { value: Figure.CoordRB },
      u_startZ: { value: Figure.startZ },
      positionWorld: { value: Figure.positionWorld },
      u_endZ: { value: Figure.endZ },

      u_texture: { value: Figure.texture },
      u_modelMatrix: { value: Figure.matrix },

      u_shadowMap: { value: shadowParams?.shadowMap || null },
      u_lightMatrix: {
        value: shadowParams?.lightMatrix || new THREE.Matrix4(),
      },
      u_lightPosition: {
        value: shadowParams?.lightPosition || new THREE.Vector3(),
      },
      u_shadowBias: { value: shadowParams?.shadowBias || 0.005 },
      u_shadowDarkness: { value: shadowParams?.shadowDarkness || 0.5 },
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        uniform mat4 u_modelMatrix;
        
        void main() {
          vUv = uv;
          vec4 worldPosition = u_modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
    fragmentShader: `
        uniform vec3 u_CoordLT;
        uniform vec3 u_CoordLB;
        uniform vec3 u_CoordRT;
        uniform vec3 u_CoordRB;
        //x - width
        //y - hight
        //z - depth
        uniform vec3 u_startZ;
        uniform vec3 positionWorld;
        uniform vec3 u_endZ;

        // Существующие uniforms
        uniform sampler2D u_texture;
        varying vec2 vUv;
        varying vec3 vWorldPosition;

        void main() {

          if(u_startZ.z > u_endZ.z){
            if(vWorldPosition.z > u_startZ.z || vWorldPosition.z < u_endZ.z) {
              gl_FragColor = texture2D(u_texture, vUv);
              return;
            }
          } else {
             if(vWorldPosition.z < u_startZ.z || vWorldPosition.z > u_endZ.z) {
              gl_FragColor = texture2D(u_texture, vUv);
              return;
            }
          }

          // Вычисляем разницу по оси Z
          float zDiff = vWorldPosition.z - positionWorld.z;
            
          // Вычисляем коэффициенты для интерполяции
          float coeffRB = -zDiff / u_CoordRB.z;
          float coeffLB = -zDiff / u_CoordLB.z;
          float coeffRT = -zDiff / u_CoordRT.z;
            
          // Проверяем условия для отбрасывания фрагмента
          if (-vWorldPosition.x + (u_startZ.x / 2.0) + positionWorld.x >= u_CoordRB.x * coeffRB
              && -vWorldPosition.x - (u_startZ.x / 2.0) + positionWorld.x <= u_CoordLB.x * coeffLB
              && -vWorldPosition.y - (u_startZ.y / 2.0) + positionWorld.y <= u_CoordRB.y * coeffRB
              && -vWorldPosition.y + (u_startZ.y / 2.0) + positionWorld.y >= u_CoordRT.y * coeffRT) {
              discard;
          }

          gl_FragColor = texture2D(u_texture, vUv);
        }
      `,
    transparent: true,
    side: THREE.DoubleSide,
  });
};

export { CuttingCustomBox };
