import * as THREE from "three";
import { DefaultCameraSettings } from "./Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { DefaultViEnConfig } from "./Engine/VisualEngineConfigs/DefaultViEnConfig.js";
import { BoxGeometry } from "./Engine/Objects/Geometry/BoxGeometry.js";
import { BasicMaterial } from "./Engine/Objects/Materials/BasicMaterial.js";

import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { DefaultOrbitControll } from "./Engine/PlayerActions/DefaultOrbitControll.js";

// Инициализация WebGLRenderer
const renderer = DefaultViEnConfig();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Инициализация CSS2DRenderer
const css2DRenderer = new CSS2DRenderer();
css2DRenderer.setSize(window.innerWidth, window.innerHeight);
css2DRenderer.domElement.style.position = "absolute";
css2DRenderer.domElement.style.top = "0";
css2DRenderer.domElement.style.pointerEvents = "none"; // Отключение взаимодействия
document.body.appendChild(css2DRenderer.domElement);

const scene = new CreateScene();
const camera = DefaultCameraSettings({ x: -2, y: 2, z: 0 });

// Создаем объект сцены (куб)
const cube = new THREE.Mesh(
  BoxGeometry(),
  BasicMaterial({ color: 0x0055ff }) // Цвет куба
);
scene.addScene(cube);

// Создаем HTML-метку
const labelDiv = document.createElement("div");
labelDiv.className = "label";
labelDiv.textContent = "Куб";
labelDiv.style.color = "white";
labelDiv.style.width = "200px";
labelDiv.style.height = "200px";
labelDiv.style.backgroundColor = "rgb(0, 0, 0)";
labelDiv.style.padding = "5px";
labelDiv.style.borderRadius = "5px";

// Привязываем HTML-метку к CSS2DObject
const label = new CSS2DObject(labelDiv);
label.position.set(0, 1.5, 0); // Располагаем метку над кубом
cube.add(label); // Привязываем метку к кубу

camera.lookAt(cube.position);

// Настройка управления камерой
let orbitControl = DefaultOrbitControll(renderer, camera, { max: 180, min: 0 });

// Инициализация Raycaster для проверки пересечений
const raycaster = new THREE.Raycaster();

// Функция для обновления видимости метки
const updateLabelVisibility = () => {
  raycaster.set(camera.position, label.position.clone().sub(camera.position).normalize());
  const intersects = raycaster.intersectObjects(scene.scene.children, true);

  if (intersects.length > 0 && intersects[0].object !== cube) {
    labelDiv.style.display = "none"; // Скрыть метку, если перед ней есть другой объект
  } else {
    labelDiv.style.display = "block"; // Показать метку, если путь свободен
  }
};

// Цикл анимации с обновлением видимости метки
const animate = () => {
  requestAnimationFrame(animate);

  updateLabelVisibility(); // Проверка видимости метки
  orbitControl.update();
  renderer.render(scene.scene, camera); // WebGL рендер
  css2DRenderer.render(scene.scene, camera); // CSS2D рендер
};

animate();
