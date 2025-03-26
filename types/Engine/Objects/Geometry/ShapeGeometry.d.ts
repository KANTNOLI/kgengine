import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";
export interface ShapeParams {
    shape?: THREE.Shape;
    curveSegments?: number;
}
export declare const ShapeGeometry: (params?: ShapeParams) => GeometryTypes;
