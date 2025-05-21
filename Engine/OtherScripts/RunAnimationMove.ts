/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";
import { PositionObject3D } from "../Constants.interface.js";

export const AnimationMove = (
  object: THREE.Object3D,
  posStart: PositionObject3D = { x: 0, y: 0, z: 0 },
  posEnd: PositionObject3D = { x: 2, y: 1, z: 3 },
  callbackEvenly: (progress: number) => any = () => "",
  callbackClosed: (state: boolean) => any = () => "",
  time: number = 1,
  speed: number = 1
) => {
  // 0.016 default SPEED

  //      1
  // -------------
  // 60FPS * 1xSPEED
  const cycle = 16.67 / speed;

  let progress = 0;
  const step = 0.01 / time;

  const targetPosition = new THREE.Vector3(posEnd.x, posEnd.y, posEnd.z);
  const epsilon = 0.01; // Допустимая погрешность

  const move = setInterval(() => {
    progress += step;
    progress = Math.min(progress, 1);

    object.position.lerpVectors(posStart, posEnd, progress);

    callbackEvenly(progress);

    if (
      progress * 19 >= 1 ||
      object.position.distanceTo(targetPosition) < epsilon
    ) {
      callbackClosed(true);
      object.position.copy(targetPosition);
      clearInterval(move);
      return true;
    }
  }, cycle);
};

export default AnimationMove;
