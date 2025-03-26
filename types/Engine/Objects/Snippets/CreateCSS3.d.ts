import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";
import { PositionObject3D, RotationObject3D } from "../../Constants.interface.js";
export interface PasteHTMLObject {
    HTMLElement: HTMLElement;
    classList: string | string[];
}
export interface HTMLObject {
    HTMLElement: CSS3DObject;
    HitBox: THREE.Object3D;
}
export interface HTMLObjectSizes {
    width: number;
    height: number;
}
declare const CreateCSS3: (sceneGL: THREE.Scene, sceneCSS: THREE.Scene, position?: PositionObject3D, sizes?: HTMLObjectSizes, params?: PasteHTMLObject) => HTMLObject;
interface HTMLUpdateSize {
    width: number;
    height: number;
}
declare const UpdateCSS3: (HTML: HTMLObject, position?: PositionObject3D, rotation?: RotationObject3D, scale?: HTMLUpdateSize) => HTMLObject;
export default CreateCSS3;
export { UpdateCSS3 };
