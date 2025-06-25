/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";

export const TrackingClickItems = (
  scene: THREE.Scene | any,
  camera: THREE.PerspectiveCamera | any,
  event: MouseEvent
): THREE.Intersection[] => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  return intersects;
};
