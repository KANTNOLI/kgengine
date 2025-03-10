import * as THREE from "three";

export const TrackingClickItem = (
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  event: MouseEvent
): THREE.Intersection => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  return intersects[0];
};
