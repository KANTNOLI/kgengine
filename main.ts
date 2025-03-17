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
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { height: 64, width: 64 }
);

// const cube = new THREE.Mesh(
//   BoxGeometry({ width: 1, depth: 1, height: 1 }),
//   BasicMaterial({ color: 0x00022 })
// );
// cube.position.set(1, 0, 0);
// sceneGL.addScene(cube);
// camera.lookAt(cube.position);

document.body.appendChild(renderCSS.domElement);

const animate = () => {
  //cube.rotation.y += 0.01;

  controlls.update();
  rendererGL.render(sceneGL.scene, camera);
  renderCSS.render(sceneCSS.scene, camera);

  requestAnimationFrame(animate);
};

animate();
