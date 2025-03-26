import * as THREE from "three";
import { LightingTypes, PositionObject3D } from "../Constants.interface.js";
import { LightingParams, LightingShadows } from "./Lighting.interface.js";
export declare const PointLightCfg: (scene: THREE.Scene, position?: PositionObject3D, params?: LightingParams, shadows?: LightingShadows, decay?: number) => LightingTypes;
