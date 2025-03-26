import * as THREE from "three";
import { LightingParams } from "./Lighting.interface.js";
import { LightingTypes } from "../Constants.interface.js";
export declare const AmbientLightCfg: (scene: THREE.Scene, params?: LightingParams) => LightingTypes;
