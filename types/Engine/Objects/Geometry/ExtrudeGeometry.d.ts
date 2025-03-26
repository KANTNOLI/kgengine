import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";
export interface ExtrudeOptions {
    depth?: number;
    bevelEnabled?: boolean;
    bevelThickness?: number;
    bevelSize?: number;
    bevelOffset?: number;
    bevelSegments?: number;
}
export declare const ExtrudeGeometry: (shape?: THREE.Shape, options?: ExtrudeOptions) => GeometryTypes;
