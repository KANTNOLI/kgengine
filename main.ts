import Cameras from "./cameras.js";
import OtherScripts from "./otherScripts.js";
import Engine from "./engine.js";

const scene = new OtherScripts.CreateScene();
// The scene is needed to display our models, where we will transfer them to after creation
// Сцена нужна для отображения наших моделей, куда в дальнейшем мы будем их передавать после создания
const camera = Cameras.DefaultCameraSettings();
// The camera is needed to view the scene, control the user, and everything like that
// Камера нужна для просмотра сцены, управления пользователем и все в этом духе

const renderer = Engine.WebGLEngine();
// A visual engine, it is needed to customize the scene rendering, WebGL is needed in 99.9% of cases with a ready-made setup.
// Визуальный движок, он нужен для настройки рендера сцены, WebGL нужен в 99.9% случаев с готовой настройкой

document.body.appendChild(renderer.domElement);
// Adding rendering to the website
// Добавляем рендеринг на сайт

const animate = () => {
  // A function that updates every 1/1000 of a second, by default we just update the scene.
  // Функция которая обновляется каждые 1/1000 секунды, по умолчанию просто обновляем сцену

  renderer.render(scene.scene, camera);
  requestAnimationFrame(animate);
};

animate();