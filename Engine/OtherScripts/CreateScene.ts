import * as THREE from "three";

export interface SceneVisual {
  backgroundColor: number;
}

export class CreateScene {
  scene = new THREE.Scene();
  texture = null;
  visual: SceneVisual = {
    backgroundColor: 0x111111,
  };

  constructor(visual?: SceneVisual) {
    this.visual = { ...this.visual, ...visual };

    this.scene.background = new THREE.Color(this.visual.backgroundColor);
  }

  addScene(value: THREE.Object3D | THREE.Object3D[]) {
    let objArray = Array.isArray(value) ? value : [value];

    objArray.map((obj) => {
      this.scene.add(obj);
    });
  }
}
