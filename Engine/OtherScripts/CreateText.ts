// Подключение необходимых библиотек
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { StandardMaterial } from "../Objects/Materials/StandardMaterial.js";

import {
  TextPosition,
  TextShadow,
  TextVisual,
} from "./OtherScripts.interface.js";
import { DEGREE } from "../Constants.interface.js";

export class CreateText {
  textObject: THREE.Mesh = new THREE.Mesh();
  text: string = "Hello World";
  path: string =
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json";
  material: any = StandardMaterial({
    color: 0xffffff,
  });
  position: TextPosition = {
    posX: 0,
    posY: 0,
    posZ: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scaleWidth: 1,
    scaleHeight: 1,
    scaleLength: 1,
  };
  visual: TextVisual = {
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 2,
  };
  shadow: TextShadow = {
    shadowCasting: true,
    shadowReceiving: true,
  };

  constructor(
    text: string,
    material: THREE.MeshStandardMaterial,
    path: string,
    position: TextPosition,
    visual: TextVisual,
    shadow: TextShadow
  ) {
    this.text = text || this.text;
    this.material = material || this.material;
    this.path = path || this.path;
    this.position = { ...this.position, ...position };
    this.visual = { ...this.visual, ...visual };
    this.shadow = { ...this.shadow, ...shadow };

    this.textLoading();
  }

  intervalSnippet(callback: () => any) {
    let waitLoading = setInterval(() => {
      if (this.textObject) {
        callback();
        clearInterval(waitLoading);
      }
    }, 1000);
  }

  textLoading() {
    const textLoad = new FontLoader();

    textLoad.load(this.path, (font) => {
      let geometry = new TextGeometry(this.text, {
        font: font,
        size: this.visual.size,
        depth: this.visual.depth,
        curveSegments: this.visual.curveSegments,
        bevelEnabled: this.visual.bevelEnabled,
        bevelThickness: this.visual.bevelThickness,
        bevelSize: this.visual.bevelSize,
        bevelOffset: this.visual.bevelOffset,
        bevelSegments: this.visual.bevelSegments,
      });

      this.textObject = new THREE.Mesh(geometry, this.material);
      this.textObject.castShadow =
        this.shadow.shadowCasting != undefined
          ? this.shadow.shadowCasting
          : true;
      this.textObject.receiveShadow =
        this.shadow.shadowReceiving != undefined
          ? this.shadow.shadowReceiving
          : true;

      if (this.textObject) {
        this.textObject.position.x = this.position.posX;
        this.textObject.position.y = this.position.posY;
        this.textObject.position.z = this.position.posZ;

        this.textObject.rotation.x =
          this.position.rotateX != undefined
            ? DEGREE * this.position.rotateX
            : 0;
        this.textObject.rotation.y =
          this.position.rotateY != undefined
            ? DEGREE * this.position.rotateY
            : 0;
        this.textObject.rotation.z =
          this.position.rotateZ != undefined
            ? DEGREE * this.position.rotateZ
            : 0;

        this.textObject.scale.set(
          this.position.scaleWidth ? this.position.scaleWidth : 0,
          this.position.scaleHeight ? this.position.scaleHeight : 0,
          this.position.scaleLength ? this.position.scaleLength : 0
        );
      } else {
        console.error(`textLoading is dead! \n this.textObject -> false`);
      }
    });
  }

  addToScene(scene: THREE.Scene) {
    this.intervalSnippet(() => {
      scene.add(this.textObject);
    });
  }

  customEdit(callback: (value: THREE.Object3D) => any) {
    this.intervalSnippet(() => {
      callback(this.textObject);
    });
  }

  updateText(text: string, visual: TextVisual, path: string) {
    const textLoad = new FontLoader();

    this.text = text || this.text;
    this.path = path || this.path;
    this.visual = { ...this.visual, ...visual };

    this.intervalSnippet(() => {
      textLoad.load(this.path, (font) => {
        let newGeometry = new TextGeometry(this.text, {
          font: font,
          size: this.visual.size,
          depth: this.visual.depth,
          curveSegments: this.visual.curveSegments,
          bevelEnabled: this.visual.bevelEnabled,
          bevelThickness: this.visual.bevelThickness,
          bevelSize: this.visual.bevelSize,
          bevelOffset: this.visual.bevelOffset,
          bevelSegments: this.visual.bevelSegments,
        });

        this.textObject.geometry.dispose();
        this.textObject.geometry = newGeometry;
      });
    });
  }

  updatePosition(position: TextPosition) {
    this.position = { ...this.position, ...position };

    this.intervalSnippet(() => {
      this.textObject.position.x = this.position.posX;
      this.textObject.position.y = this.position.posY;
      this.textObject.position.z = this.position.posZ;

      this.textObject.rotation.x =
        this.position.rotateX != undefined ? DEGREE * this.position.rotateX : 0;
      this.textObject.rotation.y =
        this.position.rotateY != undefined ? DEGREE * this.position.rotateY : 0;
      this.textObject.rotation.z =
        this.position.rotateZ != undefined ? DEGREE * this.position.rotateZ : 0;

      this.textObject.scale.set(
        this.position.scaleWidth ? this.position.scaleWidth : 0,
        this.position.scaleHeight ? this.position.scaleHeight : 0,
        this.position.scaleLength ? this.position.scaleLength : 0
      );
    });
  }

  switchingShadow() {
    this.intervalSnippet(() => {
      this.textObject.castShadow = !this.shadow.shadowCasting;
      this.textObject.receiveShadow = !this.shadow.shadowReceiving;
    });
  }
}
