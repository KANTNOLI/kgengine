// Подключение необходимых библиотек
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { StandardMaterial } from "../Objects/Materials/StandardMaterial";

export class CreateText {
  textObject = null;
  text = "Hello World";
  material = StandardMaterial({
    color: 0xffffff,
  });
  path = "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json";
  sizes = {
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
  };
  position = {
    x: 0,
    y: 0,
    z: 0,
  };
  bevel = {
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 2,
  };
  shadow = {
    shadowCasting: true,
    shadowReceiving: true,
  };

  constructor(text, path, sizes, position, bevel, shadow) {
    this.text = text || this.text;
    this.path = path || this.path;
    this.sizes = { ...this.sizes, ...sizes };
    this.position = { ...this.position, ...position };
    this.bevel = { ...this.bevel, ...bevel };
    this.shadow = { ...this.shadow, ...shadow };

    this.textLoading();
  }

  textLoading() {
    const textLoad = new FontLoader();

    textLoad.load(this.path, (font) => {
      let geometry = new TextGeometry(this.text, {
        font: font,
        size: this.sizes.size,
        depth: this.sizes.depth,
        curveSegments: this.sizes.curveSegments,
        bevelEnabled: this.bevel.bevelEnabled,
        bevelThickness: this.bevel.bevelThickness,
        bevelSize: this.bevel.bevelSize,
        bevelOffset: this.bevel.bevelOffset,
        bevelSegments: this.bevel.bevelSegments,
      });

      this.textObject = new THREE.Mesh(geometry, this.material);
      this.textObject.castShadow = this.shadow.shadowCasting;
      this.textObject.receiveShadow = this.shadow.shadowReceiving;

      if (this.textObject) {
        this.textObject.position.x = this.position.x;
        this.textObject.position.y = this.position.y;
        this.textObject.position.z = this.position.z;
      } else {
        console.log("this.model error! Check all data");
      }
    });
  }

  addToScene(scene) {
    setInterval(() => {
      if (this.textObject) {
        scene.add(this.textObject);
        return 1;
      }
    }, 500);
  }
}
