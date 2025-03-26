import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { WebGLEngine } from "./Engine/VisualEngineConfigs/WebGLEngine.js";
import { CSS3DEngine } from "./Engine/VisualEngineConfigs/CSS3DEngine.js";
import { OrbitControl } from "./Engine/PlayerActions/OrbitControl.js";
import {
  CamerasCuttingHelper,
  UpdateCamCutHelper,
} from "./Engine/Shaders/Tools/CamerasCuttingHelper.js";
import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import CreateCSS3 from "./Engine/Objects/Snippets/CreateCSS3.js";
// Создаем сцену для размещения CSS и GL
const sceneGL = new CreateScene();
const sceneCSS = new CreateScene();
// Удаление фона чтобы не перекрывало
sceneGL.scene.background = null;

DirectionalLightCfg(sceneGL.scene);

// Тоже самое, что и со сценами
const rendererGL = WebGLEngine();
const renderCSS = CSS3DEngine();
// Положение сцен, чтобы модели перерисовывали HTML
renderCSS.domElement.appendChild(rendererGL.domElement);

rendererGL.localClippingEnabled = true;
rendererGL.setClearColor(0x000000, 0);

// Создание фона для сцены без перерисовки
renderCSS.domElement.style.backgroundColor = "grey";

const camera = DefaultCameraSettings({ x: 0, y: 1, z: 5 });
const controls = OrbitControl(rendererGL, camera);

let css3Object1 = CreateCSS3(
  sceneGL.scene,
  sceneCSS.scene,
  { x: 0, y: 0, z: 0 },
  {
    height: 240,
    width: 240,
  }
);

let cumHelper = CamerasCuttingHelper(css3Object1, camera, sceneGL.scene, true);

// let cumHelper2 = CamerasCuttingHelper(
//   css3Object1,
//   camera,
//   sceneGL.scene,
//   false,
//   1
// );

let model = new CreateModel(
  "./Assets/Models/default.glb",
  {
    posX: 0,
    posY: 2,
    posZ: 0.5,
    scaleHeight: 0.2,
    scaleLength: 0.2,
    scaleWidth: 0.2,
    rotateX: 24,
  },
  {}
);

model.shaderCreate(cumHelper);

model.addToScene(sceneGL.scene);

document.body.appendChild(renderCSS.domElement);

const animate = () => {
  cumHelper = UpdateCamCutHelper(
    cumHelper.object,
    css3Object1,
    camera,
    sceneGL.scene,
    true,
    50
  );

  model.shaderUpdate(cumHelper.Coords);

  controls.update();
  rendererGL.render(sceneGL.scene, camera);
  renderCSS.render(sceneCSS.scene, camera);

  requestAnimationFrame(animate);
};

animate();
