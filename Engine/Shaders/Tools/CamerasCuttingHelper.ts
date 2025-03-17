import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";

interface HTMLObject {
  HTMLElement: CSS3DObject;
  HitBox: THREE.Object3D;
}

const CamerasCuttingHelper = (Object: HTMLObject, camera: THREE.Camera) => {
  let Raycaster = new THREE.Raycaster();
  const box = new THREE.Box3().setFromObject(Object.HitBox);

  console.log(camera.position);

  console.log(box.max.x, box.max.y);
  console.log(box.max.x, box.min.y);
  console.log(box.min.x, box.min.y);
  console.log(box.min.x, box.max.y);


  
  // Вывод: Width: 5, Height: 3, Depth: 2

  return () => {
    // if (history != camera.position) {
    //   history = camera.position;
    //   console.log(history);
    // }

    // return camera.position;
  };
};

export default CamerasCuttingHelper;
