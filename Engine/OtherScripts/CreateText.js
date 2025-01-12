// Подключение необходимых библиотек
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { StandardMaterial } from "../Objects/Materials/StandardMaterial";

const DEGREE = Math.PI / 180;

export class CreateText {
  textObject = null;
  text = "Hello World";
  material = StandardMaterial({
    color: 0xffffff,
  });
  path = "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json";
  position = {
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
  visual = {
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
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

  constructor(text, material, path, position, visual, shadow) {
    this.text = text || this.text;
    this.material = material || this.material;
    this.path = path || this.path;
    this.position = { ...this.position, ...position };
    this.visual = { ...this.visual, ...visual };
    this.shadow = { ...this.shadow, ...shadow };

    this.textLoading();
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
      this.textObject.castShadow = this.shadow.shadowCasting;
      this.textObject.receiveShadow = this.shadow.shadowReceiving;

      if (this.textObject) {
        this.textObject.position.x = this.position.posX;
        this.textObject.position.y = this.position.posY;
        this.textObject.position.z = this.position.posZ;

        this.textObject.rotation.x = DEGREE * this.position.rotateX;
        this.textObject.rotation.y = DEGREE * this.position.rotateY;
        this.textObject.rotation.z = DEGREE * this.position.rotateZ;

        this.textObject.scale.set(
          this.position.scaleWidth,
          this.position.scaleHeight,
          this.position.scaleLength
        );
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

  customEdit(callback) {
    setInterval(() => {
      if (this.textObject) {
        callback(this.textObject);
        return 1;
      }
    }, 500);
  }

  updateText(text, visual, path) {
    const textLoad = new FontLoader();

    this.text = text || this.text;
    this.path = path || this.path;
    this.visual = { ...this.visual, ...visual };

    setInterval(() => {
      if (this.textObject) {
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
        return 1;
      }
    }, 500);
  }

  updatePosition(position) {
    this.position = { ...this.position, ...position };

    setInterval(() => {
      if (this.textObject) {
        this.textObject.position.x = this.position.posX;
        this.textObject.position.y = this.position.posY;
        this.textObject.position.z = this.position.posZ;

        this.textObject.rotation.x = DEGREE * this.position.rotateX;
        this.textObject.rotation.y = DEGREE * this.position.rotateY;
        this.textObject.rotation.z = DEGREE * this.position.rotateZ;

        this.textObject.scale.set(
          this.position.scaleWidth,
          this.position.scaleHeight,
          this.position.scaleLength
        );
        return 1;
      }
    }, 500);
  }

  switchingShadow() {
    setInterval(() => {
      if (this.textObject) {
        this.setNodeParam((node) => {
          if (node.isMesh) {
            this.textObject.castShadow = !this.shadow.shadowCasting;
            this.textObject.receiveShadow = !this.shadow.shadowReceiving;
          }
        });
        return 1;
      }
    }, 500);
  }
}
