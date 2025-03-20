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
  startZ: number;
  endZ: number;
}

const CuttingCustomBox = (Figure: CustomCube): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    uniforms: {
      u_CoordLT: { value: Figure.CoordLT }, // Left-Top
      u_CoordLB: { value: Figure.CoordLB }, // Left-Bottom
      u_CoordRT: { value: Figure.CoordRT }, // Right-Top
      u_CoordRB: { value: Figure.CoordRB }, // Right-Bottom

      u_startZ: { value: Figure.startZ }, // Начальная глубина
      u_endZ: { value: Figure.endZ }, // Конечная глубина

      // Текстура и матрицы
      u_texture: { value: Figure.texture },
      u_modelMatrix: { value: Figure.matrix },
    },

    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      uniform mat4 u_modelMatrix;
      
      void main() {
        vUv = uv;
        
        // Преобразование локальных координат в мировые
        vec4 worldPos = u_modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        
        // Стандартная проекция
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,

    fragmentShader: `
      uniform vec3 u_CoordLT;
      uniform vec3 u_CoordLB;
      uniform vec3 u_CoordRT;
      uniform vec3 u_CoordRB;
      uniform float u_startZ;
      uniform float u_endZ;
      uniform sampler2D u_texture;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      
      void main() {
        //vWorldPosition.x
        
        // // 3. Проверка попадания в область
        // if(vWorldPosition.x > minX && 
        //    vWorldPosition.x < maxX && 
        //    vWorldPosition.y > minY && 
        //    vWorldPosition.y < maxY) {
           discard; // Удаляем пиксель внутри зоны
        // }
        
        // 4. Отрисовка текстуры
        gl_FragColor = texture2D(u_texture, vUv);
      }
    `,

    transparent: true,
    side: THREE.DoubleSide,
  });
};

export { CuttingCustomBox };

// varying vec3 vWorldPosition;
// varying vec2 vUv;

// uniform sampler2D u_texture;
// uniform float u_startZ;
// uniform float u_endZ;
// uniform vec3 u_CoordLT; // Левый-верхний угол
// uniform vec3 u_CoordRB; // Правый-нижний угол

// void main() {
//     // Проверка глубины
//     if (vWorldPosition.z < u_startZ || vWorldPosition.z > u_endZ) {
//         discard;
//     }

//     // Проверка границ по X и Y в мировых координатах
//     if (vWorldPosition.x > u_CoordLT.x && vWorldPosition.x < u_CoordRB.x &&
//         vWorldPosition.y > u_CoordRB.y && vWorldPosition.y < u_CoordLT.y) {
//         discard;
//     }

//     gl_FragColor = texture2D(u_texture, vUv);
// }
