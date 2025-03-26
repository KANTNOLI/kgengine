import * as THREE from "three";
import { LightingParams, LightingShadows } from "./Lighting.interface.js";
import { LightingTypes, PositionObject3D } from "../Constants.interface.js";
export declare const DirectionalLightCfg: (scene: THREE.Scene, position?: PositionObject3D, params?: LightingParams, shadows?: LightingShadows) => LightingTypes;
