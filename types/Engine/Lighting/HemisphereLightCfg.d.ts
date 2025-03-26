import * as THREE from "three";
import { LightingHemisphereParams } from "./Lighting.interface.js";
import { LightingTypes } from "../Constants.interface.js";
export declare const HemisphereLightCfg: (scene: THREE.Scene, params?: LightingHemisphereParams) => LightingTypes;
