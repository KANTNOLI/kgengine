import * as THREE from "three";
import { PositionObject3D } from "../Constants.interface.js";
export interface SpriteParam {
    path: string;
    color?: number;
    transparent?: boolean;
    opacity?: number;
}
export interface Scale {
    x?: number;
    y?: number;
    z?: number;
}
declare const CreateSprite: (param?: SpriteParam, position?: PositionObject3D, scale?: Scale) => THREE.Sprite<THREE.Object3DEventMap>;
export default CreateSprite;
