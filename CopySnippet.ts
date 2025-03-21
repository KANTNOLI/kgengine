import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load 3D Model
const loader = new GLTFLoader();
let model;

loader.load(
  "./KGEngine/Models/default.glb",
  (gltf) => {
    model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
    model.position.set(0, 0.5, 2);

    // Функция для создания материала
    const createCustomMaterial = (originalMaterial) => {
      return new THREE.ShaderMaterial({
        uniforms: {
          u_rectStart: { value: new THREE.Vector3(-1, -1, -1) }, // Начало прямоугольника
          u_rectEnd: { value: new THREE.Vector3(0.5, 0.5, 0.5) }, // Конец прямоугольника
          u_texture: { value: originalMaterial.map },
          u_modelMatrix: { value: new THREE.Matrix4() }
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vWorldPosition;
          uniform mat4 u_modelMatrix;
          
          void main() {
            vUv = uv;
            vec4 worldPosition = u_modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 u_rectStart;
          uniform vec3 u_rectEnd;
          uniform sampler2D u_texture;
          varying vec2 vUv;
          varying vec3 vWorldPosition;

          void main() {
            vec3 rectStart = u_rectStart;
            vec3 rectEnd = u_rectEnd;

            // Проверка, находится ли пиксель внутри прямоугольника
            bool insideRect = all(greaterThanEqual(vWorldPosition, rectStart)) && all(lessThanEqual(vWorldPosition, rectEnd));

            if (insideRect) {
              discard;
            }
            gl_FragColor = texture2D(u_texture, vUv);
          }
        `,
        transparent: originalMaterial.transparent,
        side: THREE.DoubleSide
      });
    };

    model.traverse((child) => {
      if (child.isMesh) {
        const customMaterial = createCustomMaterial(child.material);
        customMaterial.uniforms.u_modelMatrix.value = child.matrixWorld;
        child.material = customMaterial;
        
        child.addEventListener('added', () => {
          child.updateMatrixWorld(true);
        });
      }
    });

    scene.add(model);
  },
  undefined,
  (error) => {  
    console.error("Error loading model:", error);
  }
);



// Animation
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();