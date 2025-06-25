// Импорты из THREE.js
import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";

export interface planeHelper {
  scene: THREE.Scene;
  size: number;
  color: number;
}

function CreatePlane(
  position: PositionObject3D = {
    x: 0,
    y: 0,
    z: 0,
  },
  size: number = 50,
  helper?: planeHelper
): THREE.Plane {
  const plane = new THREE.Plane(
    new THREE.Vector3(position.x, position.y, position.z).normalize(),
    size
  );

  if (helper) {
    const help = new THREE.PlaneHelper(plane, helper.size, helper.color);
    helper.scene.add(help);
  }

  return plane;
}

export default CreatePlane;
