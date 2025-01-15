import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";

import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { AmbientLightCfg } from "./Engine/Lighting/AmbientLightCfg.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";

import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";
import { CreateText } from "./Engine/OtherScripts/CreateText.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new CreateScene({backgroundColor: 0x0b091f})
const camera = DefaultCameraSettings({ x: 0, y: 0.5, z: 3 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});

DirectionalLightCfg(
  scene.scene,
  { x: 0, y: 1, z: 10 },
  { color: 0xffffff, intensity: 1 }
);
AmbientLightCfg(scene.scene, { intensity: 0.1 });

let model = new CreateModel(null, {
  posY: 1,
  scaleWidth: 0.1,
  scaleHeight: 0.1,
  scaleLength: 0.1,
});
model.addToScene(scene.scene);

playerControlls.target.copy({
  x: model.position.posX,
  y: model.position.posY,
  z: model.position.posZ,
});

ShadowCfg(scene.scene);

let text = new CreateText(
  "switchingShadow",
  null,
  null,
  { posX: -1.3, posY: 0 },
  {
    bevelEnabled: false,
  }
);
text.addToScene(scene.scene);
text.updateText("switching shadow?");

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene.scene, camera);
  //CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
