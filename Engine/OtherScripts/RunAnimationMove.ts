import * as THREE from "three";
import { PositionObject3D } from "../Constants.interface.js";

const CreateAnimation = (
  object: THREE.Object3D,
  posStart: PositionObject3D = { x: 0, y: 0, z: 0 },
  posEnd: PositionObject3D = { x: 2, y: 1, z: 3 },
  callback: (progress: number) => any = () => "",
  time: number = 1
) => {
  // 0.016 default SPEED

  //      1
  // -------------
  // 60FPS * 1xSPEED
  const cycle = 8.34 * time;

  let progress = 0;
  let step = 0.016;

  const move = setInterval(() => {
    progress += step;
    object.position.lerpVectors(posStart, posEnd, progress);

    callback(progress);
    if (progress >= 1) {
      clearInterval(move);
    }
  }, cycle);
};

export default CreateAnimation;
