import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";
import { PositionObject3D } from "../../Constants.interface.js";
export interface HTMLObject {
    HTMLElement: CSS3DObject;
    HitBox: THREE.Object3D;
}
export interface Coordinates {
    x: number;
    y: number;
    z: number;
}
export interface CustomCube {
    depth: number;
    CoordLT: PositionObject3D;
    CoordLB: PositionObject3D;
    CoordRT: PositionObject3D;
    CoordRB: PositionObject3D;
    startZ: PositionObject3D;
    positionWorld: PositionObject3D;
    endZ: PositionObject3D;
}
export interface Shaders {
    Coords: CustomCube;
    object: THREE.Mesh;
}
declare const CamerasCuttingHelper: (Object: HTMLObject, camera: THREE.Camera, scene: THREE.Scene, helper?: boolean, depth?: number) => Shaders;
declare const UpdateCamCutHelper: (former: THREE.Object3D, Object: HTMLObject, camera: THREE.Camera, scene: THREE.Scene, helper?: boolean, depth?: number) => Shaders;
export { CamerasCuttingHelper, UpdateCamCutHelper };
