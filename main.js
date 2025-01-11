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

import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";

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
scene.background = new THREE.Color(0x1d2226);
const camera = DefaultCameraSettings({ x: 0, y: 0.5, z: 3 });
const playerControlls = DefaultOrbitControll(visualEngine, camera, {
  min: 0,
  max: 360,
});

const light1 = DirectionalLightCfg(
  scene,
  { x: 0, y: 3, z: 10 },
  { color: 0xffffff, intensity: 3 }
);
AmbientLightCfg(scene, { intensity: 0.1 });

let model = new CreateModel(null, { y: 2 }, null, {
  width: 0.1,
  height: 0.1,
  length: 0.1,
});
model.addScene(scene);
model.setOrbitControll(playerControlls);
//model.setObjectLook(camera);

ShadowCfg(scene);

let texture1 = new THREE.TextureLoader().load(
  "./Engine/Assets/Textures/metalMap.jpg"
);
let texture3 = new THREE.TextureLoader().load(
  "./Engine/Assets/Textures/metalRoughness.jpg"
);

TextOnGeometry(
  "Hello World!",
  {
    size: 0.5,
    depth: 0.05,
    curveSegments: 15,
    path: "./Engine/Assets/Fonts/default.json",
  },
  {},
  (geometry) => {
    let textMesh = new THREE.Mesh(
      geometry,
      StandardMaterial(
        {
          color: 0xffffff,
          metalness: 1,
        },
        {}
      )
    );
    scene.add(textMesh);
    textMesh.position.set(-2.2, 0, 0);
    textMesh.castShadow = true;
    textMesh.receiveShadow = true;
  }
);

const animate = (time) => {
  playerControlls.update();
  visualEngine.render(scene, camera);
  //CameraLimitSquare(camera, 5);
};

visualEngine.setAnimationLoop(animate);
animate();
