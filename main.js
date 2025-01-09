import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { CameraLimitSquare } from "./Engine/Cameras/CameraLimitSquare.js";

import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { AmbientLightCfg } from "./Engine/Lighting/AmbientLightCfg.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";

import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import { LambertMaterial } from "./Engine/Objects/Materials/LambertMaterial.js";
import { PhongMaterial } from "./Engine/Objects/Materials/PhongMaterial.js";
import { PhysicalMaterial } from "./Engine/Objects/Materials/PhysicalMaterial.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new THREE.Scene();
const camera = DefaultCameraSettings({ x: 2, y: 2, z: 2 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});

const light1 = DirectionalLightCfg(scene, { x: 1, y: 2, z: 1 });
const light2 = DirectionalLightCfg(scene, { x: -1, y: -2, z: -1 });
ShadowCfg(scene);

// const Box = new THREE.Mesh(
//   BoxGeometry({ width: 1, height: 1, depth: 1 }),
//   BasicMaterial({
//     color: 0x911211,
//     opacity: 0.8,
//   })
// );

// const Box = new THREE.Mesh(
//   BoxGeometry({ width: 1, height: 1, depth: 1 }),
//   LambertMaterial({
//     color: 0x911211,
//   })
// );

const Box = new THREE.Mesh(
  BoxGeometry({ width: 1, height: 1, depth: 1 }),
  PhysicalMaterial({
    color: 0x911211,
    metalness: 1,
    sheen: 1,
    iridescence: 0.5,
  })
);
scene.add(Box);

light1.lookAt(Box.position);
light2.lookAt(Box.position);

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene, camera);
  CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
