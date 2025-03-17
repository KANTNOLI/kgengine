import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";

interface HTMLObject {
  HTMLElement: CSS3DObject;
  HitBox: THREE.Object3D;
}

const CamerasCuttingHelper = (
  Object: HTMLObject,
  camera: THREE.Camera,
  scene: THREE.Scene
) => {
  const box = new THREE.Box3().setFromObject(Object.HitBox);

  console.log(camera.position);

  console.log(box.max.x, box.max.y);
  console.log(box.max.x, box.min.y);
  console.log(box.min.x, box.min.y);
  console.log(box.min.x, box.max.y);

  console.log(camera.position);

const vertices = new Float32Array([
  // Нижняя грань
  -0.8,
  -0.8,
  -0.8, // Вершина 0
  0.8,
  -0.8,
  -0.8, // Вершина 0.8
  0.8,
  -0.8,
  0.8, // Вершина 2
  -0.8,
  -0.8,
  0.8, // Вершина 3

  // Верхняя грань
  -2,
  1,
  -2, // Вершина 4
  2,
  1,
  -2, // Вершина 5
  2,
  1,
  2, // Вершина 6
  -2,
  1,
  2, // Вершина 7
]);

// Индексы для создания граней (12 треугольников)
const indices = [
  // Нижняя грань
  0, 1, 3, 0, 2, 3,

  // Верхняя грань
  4, 5, 6, 4, 6, 7,

  // Боковые грани
  0, 1, 5, 0, 5, 4,

  1, 2, 6, 1, 6, 5,

  5, 3, 7, 2, 7, 6,

  3, 0, 4, 3, 4, 7,
];

// Создаем геометрию
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geometry.setIndex(indices);
geometry.computeVertexNormals(); // Вычисляем нормали

// Создаем материал
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

// Создаем меш
const customBox = new THREE.Mesh(geometry, material);


scene.add(customBox);

  // Вывод: Width: 5, Height: 3, Depth: 2

  return () => {
    // if (history != camera.position) {
    //   history = camera.position;
    //   console.log(history);
    // }
    // return camera.position;
  };
};

export default CamerasCuttingHelper;
