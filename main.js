import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";

import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { AmbientLightCfg } from "./Engine/Lighting/AmbientLightCfg.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";

import { CreateText } from "./Engine/OtherScripts/CreateText.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";

import { SphereGeometry } from "./Engine/Objects/Geometry/SphereGeometry.js";
import { PhysicalMaterial } from "./Engine/Objects/Materials/PhysicalMaterial.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new CreateScene({ backgroundColor: 0x0b091f });
const camera = DefaultCameraSettings({ x: 0, y: 0.5, z: 3 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});

let directLight = DirectionalLightCfg(
  scene.scene,
  { x: 0, y: 1, z: 10 },
  { color: 0xffffff, intensity: 1 }
);
directLight.castShadow = true
AmbientLightCfg(scene.scene, { intensity: 0.1 });
ShadowCfg(scene.scene);

let texLoader = new THREE.TextureLoader();

let test = new THREE.Mesh(
  SphereGeometry(1, { heightSegments: 350, widthSegments: 350 }),
  PhysicalMaterial(
    {specularColor: 0xffffff,specularIntensity: 1},
    {
      map: texLoader.load("./test.jpg"),
      normalMap: texLoader.load("./normal_map.jpg"),
      specularMap: texLoader.load("./specular_map_1.jpg"),
    }
  )
);

let directLighthelp = new THREE.DirectionalLightHelper(directLight);

scene.addScene([test, directLighthelp]);
test.castShadow = true;
test.receiveShadow = true;

let text = new CreateText(
  "switchingShadow",
  null,
  null,
  { posX: -1.3, posY: 2 },
  {
    bevelEnabled: false,
  }
);
text.addToScene(scene.scene);
text.updateText("switching shadow?");

const animate = (time) => {
  test.rotation.y += 0.001
  playerControlls.update();
  visualEngine.render(scene.scene, camera);
  //CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
