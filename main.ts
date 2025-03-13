import * as THREE from "three";
import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { WebGLEngine } from "./Engine/VisualEngineConfigs/WebGLEngine.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";

const scene = new CreateScene();
const camera = DefaultCameraSettings({ x: 1, y: 1, z: 2 });

const renderer = WebGLEngine();

const cube = new THREE.Mesh(BoxGeometry(), BasicMaterial({ color: 0x00022 }));
scene.addScene(cube);
camera.lookAt(cube.position);

document.body.appendChild(renderer.domElement);

const animate = () => {
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  cube.rotation.x += 0.01;

  renderer.render(scene.scene, camera);
  requestAnimationFrame(animate);
};

animate();
