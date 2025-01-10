import * as THREE from "three";

import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { CameraLimitSquare } from "./Engine/Cameras/CameraLimitSquare.js";

import { PointLightCfg } from "./Engine/Lighting/PointLightCfg.js";
import { SpotLightCfg } from "./Engine/Lighting/SpotLightCfg.js";
import { DirectionalLightCfg } from "./Engine/Lighting/DirectionalLightCfg.js";
import { AmbientLightCfg } from "./Engine/Lighting/AmbientLightCfg.js";
import { HemisphereLightCfg } from "./Engine/Lighting/HemisphereLightCfg.js";
import { ShadowCfg } from "./Engine/Lighting/ShadowCfg.js";

import { ModelsLoader } from "./Engine/OtherScripts/ModelsLoader.js";

import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { TextOnGeometry } from "./Engine/OtherScripts/TextOnGeometry.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";
import { LambertMaterial } from "./Engine/Objects/Materials/LambertMaterial.js";
import { PhongMaterial } from "./Engine/Objects/Materials/PhongMaterial.js";
import { PhysicalMaterial } from "./Engine/Objects/Materials/PhysicalMaterial.js";
import { StandardMaterial } from "./Engine/Objects/Materials/StandardMaterial.js";

// дефолтные переменные для рендера сцены и картинки + камера с ее управлением
const visualEngine = DefaultViEnConfig();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);
const camera = DefaultCameraSettings({ x: 0, y: 0.5, z: 2 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});

const light1 = DirectionalLightCfg(
  scene,
  { x: 5, y: 5, z: 10 },
  { color: 0xffffff, intensity: 500 }
);

// const lhelp = new THREE.DirectionalLightHelper(light1);
// scene.add(lhelp);

// const light2 = DirectionalLightCfg(
//   scene,
//   { x: -1, y: -1, z: -1 },
//   { intensity: 0.2 }
// );
//light2.lookAt(0, 0, 0);

ShadowCfg(scene);

let text = "none";

let texture1 = new THREE.TextureLoader().load(
  "./Engine/Assets/Textures/metalMap.jpg"
);
let texture2 = new THREE.TextureLoader().load(
  "./Engine/Assets/Textures/metalNormal.jpg"
);
let texture3 = new THREE.TextureLoader().load(
  "./Engine/Assets/Textures/metalRoughness.jpg"
);

await TextOnGeometry(
  "Hello World!",
  {
    size: 0.5,
    depth: 0.05,
    curveSegments: 30,
    path: "./Engine/Assets/Fonts/default.json",
  },
  { bevelSegments: 1 },
  (geometry) => {
    let textMesh = new THREE.Mesh(
      geometry,
      StandardMaterial(
        {
          color: 0xffffff,
          metalness: 1,
          roughnessMap: texture3,
        },
        {
          map: texture1,
        }
      )
    );
    scene.add(textMesh);
    textMesh.position.set(-2.2, 0, 0);
    text = textMesh;
    textMesh.castShadow = true;
    textMesh.receiveShadow = true;

    light1.lookAt(5, 5, 10);
  }
);

setInterval(() => {
  console.log(text);
}, 1000);

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene, camera);
  //CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
