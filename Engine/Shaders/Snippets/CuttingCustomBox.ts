import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";

interface CustomCube {
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

const CuttingCustomBox = (Figure: CustomCube): THREE.ShaderMaterial => {
  console.log(Figure);

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

          if(-vWorldPosition.x + (u_startZ.x / 2.0) + positionWorld.x >= u_CoordRB.x * -((vWorldPosition.z - positionWorld.z) / u_CoordRB.z)
          && -vWorldPosition.x - (u_startZ.x / 2.0) + positionWorld.x <= u_CoordLB.x * -((vWorldPosition.z - positionWorld.z) / u_CoordLB.z)
          && -vWorldPosition.y - (u_startZ.y / 2.0) + positionWorld.y <= u_CoordRB.y * -((vWorldPosition.z - positionWorld.z) / u_CoordRB.z)
          && -vWorldPosition.y + (u_startZ.y / 2.0) + positionWorld.y >= u_CoordRT.y * -((vWorldPosition.z - positionWorld.z) / u_CoordRT.z)){
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
