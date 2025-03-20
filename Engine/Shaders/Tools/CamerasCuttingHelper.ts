import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";
import { PositionObject3D } from "../../Constants.interface.js";

interface HTMLObject {
  HTMLElement: CSS3DObject;
  HitBox: THREE.Object3D;
}

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

interface CustomCube {
  texture: THREE.Material | THREE.Material[] | null;

  depth: number;

  CoordLT: PositionObject3D;
  CoordLB: PositionObject3D;
  CoordRT: PositionObject3D;
  CoordRB: PositionObject3D;

  startZ: number;
  endZ: number;
}

const CamerasCuttingHelper = (
  Object: HTMLObject,
  camera: THREE.Camera,
  scene: THREE.Scene,
  depth: number = 100
) => {
  const box = new THREE.Box3().setFromObject(Object.HitBox);
  const SnippetCoords: CustomCube = {
    texture: null,

    depth: depth,

    CoordLT: {
      x: box.min.x - camera.position.x,
      y: box.max.y - camera.position.y,
      z: box.max.z - camera.position.z,
    },
    CoordLB: {
      x: box.min.x - camera.position.x,
      y: box.min.y - camera.position.y,
      z: box.max.z - camera.position.z,
    },
    CoordRT: {
      x: box.max.x - camera.position.x,
      y: box.max.y - camera.position.y,
      z: box.max.z - camera.position.z,
    },
    CoordRB: {
      x: box.max.x - camera.position.x,
      y: box.min.y - camera.position.y,
      z: box.max.z - camera.position.z,
    },

    startZ: box.max.z,
    endZ: (box.max.z - camera.position.z) * depth,
  };

  let CoordLeftTop: Coordinates = {
    x: SnippetCoords.CoordLT.x * (depth + 1),
    y: SnippetCoords.CoordLT.y * (depth + 1),
    z: SnippetCoords.CoordLT.z * depth,
  };
  let CoordRightTop: Coordinates = {
    x: SnippetCoords.CoordRT.x * (depth + 1),
    y: SnippetCoords.CoordRT.y * (depth + 1),
    z: SnippetCoords.CoordRT.z * depth,
  };
  let CoordRightBottom: Coordinates = {
    x: SnippetCoords.CoordRB.x * (depth + 1),
    y: SnippetCoords.CoordRB.y * (depth + 1),
    z: SnippetCoords.CoordRB.z * depth,
  };
  let CoordLeftBottom: Coordinates = {
    x: SnippetCoords.CoordLB.x * (depth + 1),
    y: SnippetCoords.CoordLB.y * (depth + 1),
    z: SnippetCoords.CoordLB.z * depth,
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

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  // Создаем материал
  const material = new THREE.MeshBasicMaterial({
    color: 0xfc4747,
    wireframe: true,
  });

  // Создаем меш
  const customBox = new THREE.Mesh(geometry, material);

  scene.add(customBox);

  return customBox;
};

const UpdateCamCutHelper = (
  former: THREE.Object3D,
  Object: HTMLObject,
  camera: THREE.Camera,
  scene: THREE.Scene,
  depth: number = 100
) => {
  setTimeout(() => {
    scene.remove(former);
  }, 1);
  return CamerasCuttingHelper(Object, camera, scene, depth);
};

export { CamerasCuttingHelper, UpdateCamCutHelper };
