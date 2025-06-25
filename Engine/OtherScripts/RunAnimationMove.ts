/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";
import { PositionObject3D } from "../Constants.interface.js";

export const AnimationMove = (
  object: THREE.Object3D,
  posStart: PositionObject3D = { x: 0, y: 0, z: 0 },
  posEnd: PositionObject3D = { x: 2, y: 1, z: 3 },
  callbackEvenly: (progress: number) => any = () => "",
  callbackClosed: (state: boolean) => any = () => "",
  time: number = 1, // в секундах
  speed: number = 60 // кадров в секунду
) => {
  const totalFrames = time * speed;
  let frame = 0;

  const targetPosition = new THREE.Vector3(posEnd.x, posEnd.y, posEnd.z);
  const epsilon = 0.01;

  const interval = 1000 / speed; // миллисекунды между кадрами

  const move = setInterval(() => {
    frame++;
    const progress = Math.min(frame / totalFrames, 1);

    object.position.lerpVectors(posStart, posEnd, progress);

    callbackEvenly(progress);

    if (progress >= 1 || object.position.distanceTo(targetPosition) < epsilon) {
      object.position.copy(targetPosition);
      callbackClosed(true);
      clearInterval(move);
    }
  }, interval);
};

export default AnimationMove;
