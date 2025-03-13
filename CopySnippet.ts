// Импорты из THREE.js
import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

let camera: THREE.PerspectiveCamera;
let sceneGl: THREE.Scene, rendererGl: THREE.WebGLRenderer;
let sceneCss: THREE.Scene, rendererCss: CSS3DRenderer;
let controls: TrackballControls;
let plane: THREE.Plane;

// Инициализация сцены
init();
animate();

function init() {
  // Настраиваем камеру
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(200, 200, 200);

  // Настройка контролов
  controls = new TrackballControls(camera, document.body);

  // Инициализация сцен
  sceneGl = new THREE.Scene();
  sceneCss = new THREE.Scene();

  // Плоскость обрезки 
  plane = new THREE.Plane(new THREE.Vector3(0, -1, 0).normalize(), 50); // Нормаль вниз
  const helper = new THREE.PlaneHelper(plane, 500, 0xffff00); // Визуализация плоскости
  sceneGl.add(helper);

  // Создание куба
  const boxGeom = new THREE.BoxGeometry(60, 60, 60);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0x05009a, // Синий цвет куба
    clippingPlanes: [plane], // Используем плоскость обрезки
    side: THREE.DoubleSide, // Видимость с обеих сторон
  });
  const cube = new THREE.Mesh(boxGeom, cubeMaterial);
  cube.position.set(0, 30, 0); // Устанавливаем куб
  sceneGl.add(cube);

  // HTML-объекты (CSS3D)
  const xpos = [50, -10, 30, 70, 110];
  const ypos = [60, -40, 0, 40, 80];
  const zpos = [-30, -50, 0, 50, 100];

  for (let i = 0; i < 5; i++) {
    // Создаем HTML-объект
    const element = document.createElement("div");
    element.style.width = "100px";
    element.style.height = "100px";
    element.style.opacity = "1.0";
    element.style.background = new THREE.Color(
      Math.random() * 0xff0000
    ).getStyle();
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.color = "white";
    element.style.fontSize = "14px";
    element.style.fontFamily = "Arial, sans-serif";

    // Добавляем текст на объект
    element.textContent = `Объект ${i + 1}`;

    // Превращаем HTML-элемент в CSS3DObject
    const cssObject = new CSS3DObject(element);
    cssObject.position.set(xpos[i], ypos[i], zpos[i]);
    cssObject.scale.set(i / 12 + 0.5, 1 / (12 - i) + 0.5, 1);
    sceneCss.add(cssObject);

    // Создаем соответствующую 3D-плоскость
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      opacity: 0.0,
      clippingPlanes: [plane],
      side: THREE.FrontSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(cssObject.position);
    mesh.scale.copy(cssObject.scale);
    sceneGl.add(mesh);
  }

  // Настройка CSS3DRenderer
  rendererCss = new CSS3DRenderer();
  rendererCss.setSize(window.innerWidth, window.innerHeight);
  rendererCss.domElement.style.position = "absolute";
  rendererCss.domElement.style.top = "0";

  // Настройка WebGLRenderer
  rendererGl = new THREE.WebGLRenderer({ alpha: true });
  rendererGl.setClearColor(0x000000, 0); // Фон сцены
  rendererGl.setSize(window.innerWidth, window.innerHeight);
  rendererGl.localClippingEnabled = true; // Включаем обрезку

  rendererGl.domElement.style.position = "absolute";
  rendererGl.domElement.style.top = "0";
  rendererCss.domElement.appendChild(rendererGl.domElement);

  // Добавляем рендереры в DOM
  document.body.appendChild(rendererCss.domElement);

  // Обработка изменения размера окна
}

// Анимация
function animate() {
  requestAnimationFrame(animate);

  // Проверяем позицию камеры, чтобы обрезать объект только с одной стороны
  const cameraDirection = camera.position.clone().normalize();
  if (cameraDirection.z > 0) {
    plane.constant = 100; // Оставляем куб целым
  } else {
    plane.constant = 30; // Обрезаем часть куба
  }

  controls.update();
  rendererGl.render(sceneGl, camera);
  rendererCss.render(sceneCss, camera);
}
