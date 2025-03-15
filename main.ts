import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Создаем сцену
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080);

// Создаем камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 5);

// Создаем рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Геометрия объекта
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32); // Сфера
const sphereMaterial = new THREE.ShaderMaterial({
  uniforms: {
    cubeMin: { value: new THREE.Vector3(-1.5, -1.5, -1.5) }, // Минимальная граница куба
    cubeMax: { value: new THREE.Vector3(1.5, 1.5, 1.5) }, // Максимальная граница куба
  },
  vertexShader: `
    varying vec3 vWorldPosition;

    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz; // Передаем мировую позицию в фрагментный шейдер
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 cubeMin; // Нижняя граница куба
    uniform vec3 cubeMax; // Верхняя граница куба
    varying vec3 vWorldPosition;

    void main() {
      // Проверяем, находится ли пиксель внутри границ куба
      if (vWorldPosition.x > cubeMin.x && vWorldPosition.x < cubeMax.x &&
          vWorldPosition.y > cubeMin.y && vWorldPosition.y < cubeMax.y &&
          vWorldPosition.z > cubeMin.z && vWorldPosition.z < cubeMax.z) {
        discard; // Убираем пиксель, если он внутри куба
      }

      // Если пиксель вне куба, задаем цвет
      gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0); // Синий цвет
    }
  `,
});

// Сфера (объект, который будет исчезать в области куба)
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 1, 0);
scene.add(sphere);

// Увеличенный полупрозрачный куб
const cubeGeometry = new THREE.BoxGeometry(3, 3, 3); // Куб 3x3x3
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  transparent: true,
  opacity: 0.2,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Управление камерой
const controls = new OrbitControls(camera, renderer.domElement);

// Анимация перемещения куба
let direction = 1; // Направление движения куба
const speed = 0.02; // Скорость движения куба

const animate = () => {
  // Двигаем куб вперед и назад
  cube.position.z += direction * speed;
  if (cube.position.z > 2 || cube.position.z < -2) {
    direction *= -1; // Меняем направление при достижении границ
  }

  // Обновляем границы куба в шейдере
  sphereMaterial.uniforms.cubeMin.value.set(
    cube.position.x - 1.5,
    cube.position.y - 1.5,
    cube.position.z - 1.5
  );
  sphereMaterial.uniforms.cubeMax.value.set(
    cube.position.x + 1.5,
    cube.position.y + 1.5,
    cube.position.z + 1.5
  );

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
