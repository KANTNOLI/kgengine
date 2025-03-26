import * as THREE from "three";
import WebGLEngineQuality, { EngineSizes } from "./VisualEngine.interface.js";
export declare const WebGLEngine: (quality?: WebGLEngineQuality, sizes?: EngineSizes, css3On?: boolean) => THREE.WebGLRenderer;
