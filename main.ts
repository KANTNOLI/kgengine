import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";

const scene = new CreateScene();
const camera = DefaultCameraSettings();

const renderer = DefaultViEnConfig();

document.body.appendChild(renderer.domElement);

const animate = () => {
  renderer.render(scene.scene, camera);
  requestAnimationFrame(animate);
};

animate();
