import * as THREE from "three";
import { PositionObject3D } from "../Constants.interface.js";
export declare const AnimationMove: (object: THREE.Object3D, posStart?: PositionObject3D, posEnd?: PositionObject3D, callback?: (progress: number) => any, time?: number) => void;
export default AnimationMove;
