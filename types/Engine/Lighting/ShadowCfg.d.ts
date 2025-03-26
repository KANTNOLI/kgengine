import * as THREE from "three";
import { ShadowsSize } from "./Lighting.interface.js";
import { LightingTypes } from "../Constants.interface.js";
export declare const ShadowCfg: (scene: THREE.Scene, size?: ShadowsSize) => LightingTypes;
