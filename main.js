import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { HemisphereLightCfg } from "./Engine/Lighting/HemisphereLightCfg.js";
import { CameraLimitSquare } from "./Engine/Cameras/CameraLimitSquare.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new THREE.Scene();
const camera = DefaultCameraSettings({ x: 1.25, y: 1.25, z: 0.12 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});
const light = HemisphereLightCfg(scene);
light.lookAt(new THREE.Vector3(0, 0, 0));

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene, camera);
  CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
