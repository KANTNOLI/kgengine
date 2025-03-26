import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";
export interface LathePhi {
    phiStart?: number;
    phiLength?: number;
}
export declare const LatheGeometry: (points?: THREE.Vector2[], segments?: number, phi?: LathePhi) => GeometryTypes;
