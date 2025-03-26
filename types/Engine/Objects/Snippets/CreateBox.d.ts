import * as THREE from "three";
import { MaterialTypes } from "../../Constants.interface.js";
export interface BoxSize {
    width?: number;
    height?: number;
    depth?: number;
}
export interface BoxSegments {
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
}
declare const CreateBox: (Material?: MaterialTypes, size?: BoxSize, segments?: BoxSegments) => THREE.Object3D;
export default CreateBox;
