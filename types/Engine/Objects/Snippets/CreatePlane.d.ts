import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";
export interface planeHelper {
    scene: THREE.Scene;
    size: number;
    color: number;
}
declare function CreatePlane(position?: PositionObject3D, size?: number, helper?: planeHelper): THREE.Plane;
export default CreatePlane;
