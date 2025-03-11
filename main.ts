import * as THREE from "three";
import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import CreateAnimation from "./Engine/OtherScripts/RunAnimationMove.js";

const scene = new CreateScene();
const camera = DefaultCameraSettings({ x: -2, y: 2, z: 0 });

const renderer = DefaultViEnConfig();

const cube = new THREE.Mesh(BoxGeometry(), BasicMaterial({ color: 0x00022 }));
scene.addScene(cube);
camera.lookAt(cube.position);

CreateAnimation(cube, { x: 0, y: 0, z: 0 }, { x: 2, y: 0, z: 0 });

document.body.appendChild(renderer.domElement);

const animate = () => {
  renderer.render(scene.scene, camera);
  requestAnimationFrame(animate);
};

animate();
