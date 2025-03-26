import * as THREE from "three";
import { LightingLight, LightingShadows } from "./Lighting.interface.js";
import { LightingTypes, PositionObject3D } from "../Constants.interface.js";
export declare const SpotLightCfg: (scene: THREE.Scene, params?: {
    color: number;
    intensity: number;
}, position?: PositionObject3D, lighting?: LightingLight, shadows?: LightingShadows) => LightingTypes;
