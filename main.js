import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { CameraLimitSquare } from "./Engine/Cameras/CameraLimitSquare.js";

import { PointLightCfg } from "./Engine/Lighting/PointLightCfg.js";
import { SpotLightCfg } from "./Engine/Lighting/SpotLightCfg.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { AmbientLightCfg } from "./Engine/Lighting/AmbientLightCfg.js";
import { HemisphereLightCfg } from "./Engine/Lighting/HemisphereLightCfg.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";

import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";

import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
//import { TextOnGeometry } from "./Engine/OtherScripts/CreateText.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import { LambertMaterial } from "./Engine/Objects/Materials/LambertMaterial.js";
import { PhongMaterial } from "./Engine/Objects/Materials/PhongMaterial.js";
import { PhysicalMaterial } from "./Engine/Objects/Materials/PhysicalMaterial.js";
import { StandardMaterial } from "./Engine/Objects/Materials/StandardMaterial.js";
import { CreateText } from "./Engine/OtherScripts/CreateText.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1d2226);
const camera = DefaultCameraSettings({ x: 0, y: 0.5, z: 3 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});

const light1 = DirectionalLightCfg(
  scene,
  { x: 0, y: 1, z: 10 },
  { color: 0xffffff, intensity: 1 }
);
AmbientLightCfg(scene, { intensity: 0.1 });

let model = new CreateModel(null, {
  posY: 1,
  scaleWidth: 0.1,
  scaleHeight: 0.1,
  scaleLength: 0.1,
});
model.addToScene(scene);

playerControlls.target.copy({
  x: model.position.posX,
  y: model.position.posY,
  z: model.position.posZ,
});

// setTimeout(() => {
//   model.updatePosition({ posX: 0 });
// }, 3000);

ShadowCfg(scene);

let text = new CreateText(
  "Hi world",
  null,
  "./Engine/Assets/Fonts/default.json",
  { posX: -1.3, posY: 0 },
  {
    bevelEnabled: false,
  }
);
text.addToScene(scene);

text.updateText("100");
text.updateText("1020");

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene, camera);
  //CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
