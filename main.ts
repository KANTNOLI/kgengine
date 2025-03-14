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
import { DEGREE } from "./Engine/Constants.interface.js";
import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";
import { AmbientLightCfg } from "./Engine/Lighting/AmbientLightCfg.js";

// Создаем сцену для размещения CSS и GL
const sceneGL = new CreateScene();
sceneGL.scene.background = null;
const sceneCSS = new CreateScene();
sceneCSS.scene.background = new THREE.Color(0x808080);

ShadowCfg(sceneGL.scene);
AmbientLightCfg(sceneGL.scene);

DirectionalLightCfg(sceneGL.scene, { x: 0, y: 2, z: 2});

let laptop = new CreateModel(
  "./KGEngine/Models/default.glb",
  {
    posX: 0,
    posY: 0,
    posZ: 0,
    scaleHeight: 0.1,
    scaleLength: 0.1,
    scaleWidth: 0.1,
  },
  {}
);

laptop.addToScene(sceneGL.scene);

// Тоже самое, что и со сценами
const rendererGL = WebGLEngine();
rendererGL.localClippingEnabled = true;
rendererGL.setClearColor(0x000000, 0);
const renderCSS = CSS3DEngine();
renderCSS.domElement.style.backgroundColor = "grey";

renderCSS.domElement.appendChild(rendererGL.domElement);

const camera = DefaultCameraSettings({ x: 3, y: 0, z: 1 });
const controlls = OrbitControll(rendererGL, camera);

let css3Object1 = CreateCSS3(sceneCSS.scene, {
  HTMLElement: document.createElement("div"),
});

css3Object1.scale.set(0.02, 0.02, 0.02);
css3Object1.position.set(1, 0, 0);
//css3Object1.rotation.y = DEGREE * 90;

document.body.appendChild(renderCSS.domElement);

const animate = () => {
  controlls.update();
  rendererGL.render(sceneGL.scene, camera);
  renderCSS.render(sceneCSS.scene, camera);

  requestAnimationFrame(animate);
};

animate();
