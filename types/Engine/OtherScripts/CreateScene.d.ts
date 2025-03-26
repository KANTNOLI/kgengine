import * as THREE from "three";
export interface SceneVisual {
    backgroundColor: number;
}
export declare class CreateScene {
    scene: THREE.Scene;
    texture: null;
    visual: SceneVisual;
    constructor(visual?: SceneVisual);
    addScene(value: THREE.Object3D | THREE.Object3D[]): void;
}
