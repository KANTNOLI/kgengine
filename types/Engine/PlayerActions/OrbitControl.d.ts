import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS3DRenderer } from "three/examples/jsm/Addons.js";
export interface Angles {
    min: number;
    max: number;
}
export declare const OrbitControl: (renderer: THREE.WebGLRenderer | CSS3DRenderer, camera: THREE.PerspectiveCamera, pAngle?: Angles) => OrbitControls;
