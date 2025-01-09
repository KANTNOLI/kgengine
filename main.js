import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { HemisphereLightCfg } from "./Engine/Lighting/HemisphereLightCfg.js";
import { CameraLimitSquare } from "./Engine/Cameras/CameraLimitSquare.js";
import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import { LambertMaterial } from "./Engine/Objects/Materials/LambertMaterial.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new THREE.Scene();
const camera = DefaultCameraSettings({ x: 2, y: 2, z: 2 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});
const light = DirectionalLightCfg(scene, { x: 1, y: 0, z: 1 });
light.lookAt(new THREE.Vector3(0, 0, 0));
ShadowCfg(scene);

const Box1 = new THREE.Mesh(
  BoxGeometry({ width: 1, height: 1, depth: 1 }),
  BasicMaterial({ color: 0xffff2f, opacity: 0.5, transparent: true })
);

// const Box2 = new THREE.Mesh(
//   BoxGeometry({ width: 1, height: 1, depth: 1 }, { depthSegments: 10 }),
//   LambertMaterial({ color: 0xffff2f, opacity: 0.5, transparent: true })
// );

scene.add(Box1);
//scene.add(Box2);

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene, camera);
  CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
