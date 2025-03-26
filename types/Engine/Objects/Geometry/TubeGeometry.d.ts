import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";
export interface TubeParams {
    path?: THREE.Curve<THREE.Vector3>;
    tubularSegments?: number;
    radius?: number;
    radialSegments?: number;
    closed?: boolean;
}
export declare const TubeGeometry: (params?: TubeParams) => GeometryTypes;
