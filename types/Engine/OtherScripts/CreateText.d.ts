import * as THREE from "three";
import { TextPosition, TextShadow, TextVisual } from "./OtherScripts.interface.js";
export declare class CreateText {
    textObject: THREE.Mesh;
    text: string;
    path: string;
    material: any;
    position: TextPosition;
    visual: TextVisual;
    shadow: TextShadow;
    constructor(text: string, material: THREE.MeshStandardMaterial, path: string, position: TextPosition, visual: TextVisual, shadow: TextShadow);
    intervalSnippet(callback: () => any): void;
    textLoading(): void;
    addToScene(scene: THREE.Scene): void;
    customEdit(callback: (value: THREE.Object3D) => any): void;
    updateText(text: string, visual: TextVisual, path: string): void;
    updatePosition(position: TextPosition): void;
    switchingShadow(): void;
}
