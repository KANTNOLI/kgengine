import * as THREE from "three";
import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { WebGLEngine } from "./Engine/VisualEngineConfigs/WebGLEngine.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import { CSS3DEngine } from "./Engine/VisualEngineConfigs/CSS3DEngine.js";
import { OrbitControll } from "./Engine/PlayerActions/OrbitControll.js";
import CreateCSS3, {
  UpdateCSS3,
} from "./Engine/Objects/Snippets/CreateCSS3.js";
import { DEGREE } from "./Engine/Constants.interface.js";
import CamerasCuttingHelper from "./Engine/Shaders/Tools/CamerasCuttingHelper.js";

// Создаем сцену для размещения CSS и GL
const sceneGL = new CreateScene();
const sceneCSS = new CreateScene();
// Удаление фона чтобы не перекрывало
sceneGL.scene.background = null;

// Тоже самое, что и со сценами
const rendererGL = WebGLEngine();
const renderCSS = CSS3DEngine();
// Положение сцен, чтобы модели перерисовывали HTML
renderCSS.domElement.appendChild(rendererGL.domElement);

rendererGL.localClippingEnabled = true;
rendererGL.setClearColor(0x000000, 0);

// Создание фона для сцены без перерисовки
renderCSS.domElement.style.backgroundColor = "grey";

const camera = DefaultCameraSettings({ x: 3, y: 0, z: 1 });
const controlls = OrbitControll(rendererGL, camera);

let css3Object1 = CreateCSS3(sceneGL.scene, sceneCSS.scene);
UpdateCSS3(
  {
    HitBox: css3Object1.HitBox,
    HTMLElement: css3Object1.HTMLElement,
  },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 0, z: 0 },
  { height: 64, width: 64 }
);

let updateCameras = CamerasCuttingHelper(css3Object1, camera);

// const cube = new THREE.Mesh(
//   BoxGeometry({ width: 1, depth: 1, height: 1 }),
//   BasicMaterial({ color: 0x00022 })
// );
// cube.position.set(1, 0, 0);
// sceneGL.addScene(cube);
// camera.lookAt(cube.position);

document.body.appendChild(renderCSS.domElement);

const vertices = new Float32Array([
  // Нижняя грань
  -0.8, -0.8, -0.8, // Вершина 0
   0.8, -0.8, -0.8, // Вершина 0.8
   0.8, -0.8,  0.8, // Вершина 2
  -0.8, -0.8,  0.8, // Вершина 3

  // Верхняя грань
  -2,  1, -2, // Вершина 4
   2,  1, -2, // Вершина 5
   2,  1,  2, // Вершина 6
  -2,  1,  2 // Вершина 7
]);

// Индексы для создания граней (12 треугольников)
const indices = [
  // Нижняя грань
  0, 1, 3,
  0, 2, 3,

  // Верхняя грань
  4, 5, 6,
  4, 6, 7,

  // Боковые грани
  0, 1, 5,
  0, 5, 4,

  1, 2, 6,
  1, 6, 5,

  5, 3, 7,
  2, 7, 6,

  3, 0, 4,
  3, 4, 7
];

// Создаем геометрию
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setIndex(indices);
geometry.computeVertexNormals(); // Вычисляем нормали

// Создаем материал
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Создаем меш
const customBox = new THREE.Mesh(geometry, material);

sceneGL.addScene(customBox)

const animate = () => {
  //cube.rotation.y += 0.01;

  updateCameras();

  controlls.update();
  rendererGL.render(sceneGL.scene, camera);
  renderCSS.render(sceneCSS.scene, camera);

  requestAnimationFrame(animate);
};

animate();
