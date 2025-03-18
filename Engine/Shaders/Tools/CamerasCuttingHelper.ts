import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";

interface HTMLObject {
  HTMLElement: CSS3DObject;
  HitBox: THREE.Object3D;
}

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const CamerasCuttingHelper = (
  Object: HTMLObject,
  camera: THREE.Camera,
  scene: THREE.Scene,
  depth: number = 10
) => {
  const box = new THREE.Box3().setFromObject(Object.HitBox);

  let CoordLeftTop: Coordinates = {
    x: (box.min.x - camera.position.x) * depth,
    y: (box.max.y - camera.position.y) * depth,
    z: (box.max.z - camera.position.z) * depth,
  };
  let CoordRightTop: Coordinates = {
    x: (box.max.x - camera.position.x) * depth,
    y: (box.max.y - camera.position.y) * depth,
    z: (box.max.z - camera.position.z) * depth,
  };
  let CoordRightBottom: Coordinates = {
    x: (box.max.x - camera.position.x) * depth,
    y: (box.min.y - camera.position.y) * depth,
    z: (box.max.z - camera.position.z) * depth,
  };
  let CoordLeftBottom: Coordinates = {
    x: (box.min.x - camera.position.x) * depth,
    y: (box.min.y - camera.position.y) * depth,
    z: (box.max.z - camera.position.z) * depth,
  };

  const vertices = new Float32Array([
    box.min.x,
    box.max.y,
    0, // Вершина 0
    box.max.x,
    box.max.y,
    0, // Вершина 1
    box.max.x,
    box.min.y,
    0, // Вершина 2
    box.min.x,
    box.min.y,
    0, // Вершина 3

    // Верхняя грань
    CoordLeftTop.x,
    CoordLeftTop.y,
    CoordLeftTop.z, // Вершина 0
    CoordRightTop.x,
    CoordRightTop.y,
    CoordRightTop.z, // Вершина 1
    CoordRightBottom.x,
    CoordRightBottom.y,
    CoordRightBottom.z, // Вершина 2
    CoordLeftBottom.x,
    CoordLeftBottom.y,
    CoordLeftBottom.z, // Вершина 3
  ]);

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
