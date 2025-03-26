import * as THREE from "three";
import { GLTF } from "three/addons/loaders/GLTFLoader.js";
import { ModelPosition, ModelShadow } from "./OtherScripts.interface.js";
import { PositionObject3D } from "../Constants.interface.js";
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
export declare class CreateModel {
    model: THREE.Object3D;
    modelOriginal: GLTF;
    path: string;
    position: ModelPosition;
    shaderFlag: boolean;
    shadow: ModelShadow;
    constructor(path: string, position: ModelPosition, shadow: ModelShadow);
    intervalSnippet(callback: () => any): void;
    setNodeParam(callback: (node: THREE.Mesh) => any): void;
    shaderCreate(cumHelper: Shaders): void;
    shaderUpdate(Coords: CustomCube): void;
    setCustomNodeParam(callback: (node: any) => any): void;
    modelLoading(): void;
    addToScene(scene: THREE.Scene): void;
    customEdit(callback: (model: THREE.Object3D) => any): void;
    customEditOriginal(callback: (model: GLTF) => any): void;
    updatePosition(position: ModelPosition): void;
    switchingShadow(): void;
}
