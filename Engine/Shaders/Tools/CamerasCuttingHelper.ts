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
  depth: number;

  CoordLT: PositionObject3D;
  CoordLB: PositionObject3D;
  CoordRT: PositionObject3D;
  CoordRB: PositionObject3D;

  startZ: PositionObject3D;
  endZ: PositionObject3D;
}

const CamerasCuttingHelper = (
  Object: HTMLObject,
  camera: THREE.Camera,
  scene: THREE.Scene,
  helper: boolean = false,
  depth: number = 100
) => {
  const box = new THREE.Box3().setFromObject(Object.HitBox);
  
  const SnippetCoords: CustomCube = {
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

    //x - width
    //y - hight
    //z - depth
    startZ: {
      x: box.max.x - box.min.x,
      y: box.max.y - box.min.y,
      z: box.max.z,
    },
    endZ: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  SnippetCoords.endZ = {
    x: (SnippetCoords.CoordLT.x * depth) - (SnippetCoords.CoordRT.x * depth),
    y: (SnippetCoords.CoordLT.y * depth) - (SnippetCoords.CoordRB.y * depth),
    z: SnippetCoords.CoordLT.z * depth + 1,
  };

  let CoordLeftTop: Coordinates = {
    x: SnippetCoords.CoordLT.x * depth,
    y: SnippetCoords.CoordLT.y * depth,
    z: SnippetCoords.CoordLT.z * depth + 1,
  };
  let CoordRightTop: Coordinates = {
    x: SnippetCoords.CoordRT.x * depth,
    y: SnippetCoords.CoordRT.y * depth,
    z: SnippetCoords.CoordRT.z * depth + 1,
  };
  let CoordRightBottom: Coordinates = {
    x: SnippetCoords.CoordRB.x * depth,
    y: SnippetCoords.CoordRB.y * depth,
    z: SnippetCoords.CoordRB.z * depth + 1,
  };
  let CoordLeftBottom: Coordinates = {
    x: SnippetCoords.CoordLB.x * depth,
    y: SnippetCoords.CoordLB.y * depth,
    z: SnippetCoords.CoordLB.z * depth + 1,
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
    0,
    1,
    2,
    0,
    2,
    3, // Нижняя грань
    4,
    5,
    6,
    4,
    6,
    7, // Верхняя грань
    0,
    1,
    5,
    0,
    5,
    4, // Передняя грань
    1,
    2,
    6,
    1,
    6,
    5, // Правая грань
    2,
    3,
    7,
    2,
    7,
    6, // Задняя грань
    3,
    0,
    4,
    3,
    4,
    7, // Левая грань
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.MeshBasicMaterial({
    color: 0x0001111,
    wireframe: helper,
    opacity: 1,
    transparent: true,
  });
  const customBox = new THREE.Mesh(geometry, material);
  scene.add(customBox);

  return {
    object: customBox,
    Coords: SnippetCoords,
  };
};

const UpdateCamCutHelper = (
  former: THREE.Object3D,
  Object: HTMLObject,
  camera: THREE.Camera,
  scene: THREE.Scene,
  helper: boolean = false,
  depth: number = 100
) => {
  scene.remove(former);

  return CamerasCuttingHelper(Object, camera, scene, helper, depth);
};

export { CamerasCuttingHelper, UpdateCamCutHelper };
