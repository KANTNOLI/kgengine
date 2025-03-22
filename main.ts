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
import {
  CamerasCuttingHelper,
  UpdateCamCutHelper,
} from "./Engine/Shaders/Tools/CamerasCuttingHelper.js";
import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";
import { CuttingCustomBox } from "./Engine/Shaders/Snippets/CuttingCustomBox.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";

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
const controlls = OrbitControll(rendererGL, camera);

let css3Object1 = CreateCSS3(
  sceneGL.scene,
  sceneCSS.scene,
  { x: 1, y: 0, z: 0 },
  {
    height: 52,
    width: 102,
  }
);

let cumHelper = CamerasCuttingHelper(
  css3Object1,
  camera,
  sceneGL.scene,
  true,
  5
);

// let cumHelper2 = CamerasCuttingHelper(
//   css3Object1,
//   camera,
//   sceneGL.scene,
//   false,
//   1
// );

let model = new CreateModel(
  "./KGEngine/Models/default.glb",
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

model.setNodeParam((node) => {
  const originalMaterial = node.material;

  let ShaderMaterial = CuttingCustomBox({
    CoordLB: cumHelper.Coords.CoordLB,
    CoordLT: cumHelper.Coords.CoordLT,
    CoordRB: cumHelper.Coords.CoordRB,
    CoordRT: cumHelper.Coords.CoordRT,
    depth: cumHelper.Coords.depth,
    startZ: cumHelper.Coords.startZ,
    endZ: cumHelper.Coords.endZ,
    positionWorld: cumHelper.Coords.positionWorld,
    texture: originalMaterial.map,
    matrix: node.matrixWorld,
  });

  node.material = ShaderMaterial;
});

model.addToScene(sceneGL.scene);

// model.setNodeParam(async (node) => {
//   let data = await
//   console.log(data);

//   const customMaterial = CuttingCustomBox(data);
//   console.log(1);

//   // customMaterial.uniforms.u_depth.value = 0.5;
//   // customMaterial.uniforms.u_startZ.value = -1.0;
//   // customMaterial.uniforms.u_endZ.value = 1.0;
//   // customMaterial.uniforms.u_point1.value.set(10, 20, 30);
//   // customMaterial.uniforms.u_point2.value.set(40, 50, 60);
//   // customMaterial.uniforms.u_point3.value.set(70, 80, 90);
//   // customMaterial.uniforms.u_point4.value.set(100, 110, 120);

//   node.material = customMaterial;
// });

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

  controlls.update();
  rendererGL.render(sceneGL.scene, camera);
  renderCSS.render(sceneCSS.scene, camera);

  requestAnimationFrame(animate);
};

animate();
