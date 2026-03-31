import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { OrbitControl } from "./Engine/PlayerActions/OrbitControl.js";
import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";
import * as THREE from "three";
import OtherScripts from "./otherScripts.js";
import Cameras from "./cameras.js";
import Engine from "./engine.js";
import { PointLightCfg } from "./Engine/Lighting/PointLightCfg.js";

const scene = new OtherScripts.CreateScene();
const camera = Cameras.DefaultCameraSettings({ x: 0, y: 4, z: 5 });
const renderer = Engine.WebGLEngine();

const shadow = ShadowCfg(scene.scene);
shadow.position.y = -0.5;

const PointLight = PointLightCfg(
  scene.scene,
  {
    x: 0,
    y: 5,
    z: 3,
  },
  {
    color: 0xf0f000,
    intensity: 5,
  },
);

const MODEL = new CreateModel(
  "test2.glb",
  {
    posX: 0,
    posY: 0,
    posZ: 0,
    rotateY: 0,
    scaleHeight: 2,
    scaleLength: 2,
    scaleWidth: 2,
  },
  { shadowCasting: true, shadowReceiving: true },
);

(async () => {
  await MODEL.modelLoading();
  MODEL.addToScene(scene.scene);

  if (MODEL.getAnimations().length > 0) {
    MODEL.createMixer();
    MODEL.playAnimation(3);
  }
})();

PointLight.lookAt(MODEL.model.position);
camera.lookAt(
  MODEL.model.position.x,
  MODEL.model.position.y + 2,
  MODEL.model.position.z,
);

document.body.appendChild(renderer.domElement);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  MODEL.updateAnimations(clock.getDelta() + 0.005);
  renderer.render(scene.scene, camera);
}

animate();
