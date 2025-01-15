import * as THREE from "three";

export class CreateScene {
  scene = new THREE.Scene();
  texture = null;
  visual = {
    backgroundColor: 0x111111,
  };

  constructor(visual) {
    this.visual = { ...this.visual, ...visual };

    this.scene.background = this.visual.backgroundColor;
  }

  addScene(value) {
    let objArray = Array.isArray(value) ? value : [value];

    objArray.map((obj, id) => {
        this.scene.add(obj)
    }) 
  }
}
