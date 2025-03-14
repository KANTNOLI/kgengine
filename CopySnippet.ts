import * as THREE from "three";
import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { WebGLEngine } from "./Engine/VisualEngineConfigs/WebGLEngine.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { CSS3DEngine } from "./Engine/VisualEngineConfigs/CSS3DEngine.js";
import { OrbitControll } from "./Engine/PlayerActions/OrbitControll.js";
import CreateCSS3 from "./Engine/Objects/Snippets/CreateCSS3.js";

// Создаем сцену для размещения CSS и GL
const sceneGL = new CreateScene();
sceneGL.scene.background = null

const sceneCSS = new CreateScene();

// Тоже самое, что и со сценами
const rendererGL = WebGLEngine();
rendererGL.localClippingEnabled = true;
rendererGL.setClearColor(0x000000, 0);
const renderCSS = CSS3DEngine();

rendererGL.domElement.appendChild(renderCSS.domElement);

const camera = DefaultCameraSettings({ x: 1, y: 1, z: 1 });
const controlls = OrbitControll(rendererGL, camera);

let css3Object1 = CreateCSS3(sceneCSS.scene, {
  HTMLElement: document.createElement("div"),
});

css3Object1.scale.set(0.02, 0.02, 0.02);

const cube = new THREE.Mesh(
  BoxGeometry({ width: 1, depth: 1, height: 1 }),
  BasicMaterial({ color: 0x00022 })
);
cube.position.set(1, 0, 0);
sceneGL.addScene(cube);
camera.lookAt(cube.position);

document.body.appendChild(rendererGL.domElement);

const animate = () => {
  cube.rotation.y += 0.01;

  controlls.update();
  renderCSS.render(sceneCSS.scene, camera);
  rendererGL.render(sceneGL.scene, camera);

  requestAnimationFrame(animate);
};

animate();
