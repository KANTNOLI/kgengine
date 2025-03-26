import * as THREE from "three";
import { CameraPerspective } from "./Cameras.interface.js";
import { PositionObject3D } from "../Constants.interface.js";
export declare const DefaultCameraSettings: (position?: PositionObject3D, perspective?: CameraPerspective) => THREE.PerspectiveCamera;
