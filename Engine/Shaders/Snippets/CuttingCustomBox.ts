import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";

interface CustomCube {
  texture: THREE.Material | THREE.Material[];
  depth: number;
  CoordLT: PositionObject3D;
  CoordLB: PositionObject3D;
  CoordRT: PositionObject3D;
  CoordRB: PositionObject3D;
  startZ: number;
  endZ: number;
}

const CuttingCustomBox = (Figure: CustomCube): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: Figure.texture },
      u_depth: { value: Figure.depth }, // Depth

      // 4. 4 переменные с x, y, z
      u_CoordLT: {
        value: new THREE.Vector3(
          Figure.CoordLT.x,
          Figure.CoordLT.y,
          Figure.CoordLT.z
        ),
      }, // Left Top
      u_CoordLB: {
        value: new THREE.Vector3(
          Figure.CoordLB.x,
          Figure.CoordLB.y,
          Figure.CoordLB.z
        ),
      }, // Left Bottom
      u_CoordRT: {
        value: new THREE.Vector3(
          Figure.CoordRT.x,
          Figure.CoordRT.y,
          Figure.CoordRT.z
        ),
      }, // Right Top
      u_CoordRB: {
        value: new THREE.Vector3(
          Figure.CoordRB.x,
          Figure.CoordRB.y,
          Figure.CoordRB.z
        ),
      }, // Right Bottom

      u_startZ: { value: Figure.startZ }, // Z coord Start
      u_endZ: { value: Figure.endZ }, // Z Coord End
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPosition; 
      varying vec3 vLocalPosition;

      void main() {
        vUv = uv;
        vLocalPosition = position;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      // 1. Текстура
      uniform sampler2D u_texture; 

      uniform float u_depth; 
      uniform float u_startZ; 
      uniform float u_endZ; 

      uniform vec3 u_CoordLT; 
      uniform vec3 u_CoordLB; 
      uniform vec3 u_CoordRT; 
      uniform vec3 u_CoordRB; 

      // 2. Координаты для сравнения
      varying vec3 vWorldPosition; 
      varying vec3 vLocalPosition; 
      varying vec2 vUv;

      void main() {
       if (vWorldPosition.z >= u_startZ && vWorldPosition.z <= u_endZ
           && vWorldPosition.y >= u_CoordLB.y * (vWorldPosition.z + 5.0) 
           && vWorldPosition.y <= u_CoordLT.y * (vWorldPosition.z + 5.0)
           && vWorldPosition.x <= u_CoordLB.x * (vWorldPosition.z + 5.0)
           && vWorldPosition.x >= u_CoordRT.x * (vWorldPosition.z + 5.0)) {
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
