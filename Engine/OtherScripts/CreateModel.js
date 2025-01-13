import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { LoadingProcess } from "./LoadingProcess.js";

const DEGREE = Math.PI / 180;

export class CreateModel {
  model = null;
  path = "./Engine/Assets/Models/default.glb";
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
  shadow = {
    shadowCasting: true,
    shadowReceiving: true,
  };

  constructor(path, position, shadow) {
    this.path = path || this.path;
    this.position = { ...this.position, ...position };
    this.shadow = { ...this.shadow, ...shadow };

    console.log(this.position);

    this.modelLoadig();
  }

  intervalSnippet(callback) {
    let waitLoading = setInterval(() => {
      if (this.model) {
        callback();
        clearInterval(waitLoading);
        console.log("inter model");
      }
    }, 1000);
  }

  setNodeParam(callback) {
    this.intervalSnippet(() => {
      this.model.traverse((node) => {
        callback(node);
      });
    });
  }

  modelLoadig() {
    const modelsLoader = new GLTFLoader();

    modelsLoader.load(this.path, (model) => {
      this.model = model.scene;

      if (this.model) {
        this.model.position.x = this.position.posX;
        this.model.position.y = this.position.posY;
        this.model.position.z = this.position.posZ;

        this.model.rotation.x = DEGREE * this.position.rotateX;
        this.model.rotation.y = DEGREE * this.position.rotateY;
        this.model.rotation.z = DEGREE * this.position.rotateZ;

        this.model.scale.set(
          this.position.scaleWidth,
          this.position.scaleHeight,
          this.position.scaleLength
        );
      } else {
        console.log("this.model error! Check all data");
      }

      this.setNodeParam((node) => {
        if (node.isMesh) {
          node.castShadow = this.shadow.shadowCasting;
          node.receiveShadow = this.shadow.shadowReceiving;
        }
      });
    });
  }

  addToScene(scene) {
    this.intervalSnippet(() => {
      scene.add(this.model);
    });
  }

  customEdit(callback) {
    this.intervalSnippet(() => {
      callback(this.model);
    });
  }

  updatePosition(position) {
    this.position = { ...this.position, ...position };

    this.intervalSnippet(() => {
      this.model.position.x = this.position.posX;
      this.model.position.y = this.position.posY;
      this.model.position.z = this.position.posZ;

      this.model.rotation.x = DEGREE * this.position.rotateX;
      this.model.rotation.y = DEGREE * this.position.rotateY;
      this.model.rotation.z = DEGREE * this.position.rotateZ;

      this.model.scale.set(
        this.position.scaleWidth,
        this.position.scaleHeight,
        this.position.scaleLength
      );
    });
  }

  switchingShadow() {
    this.intervalSnippet(() => {
      this.setNodeParam((node) => {
        if (node.isMesh) {
          node.castShadow = !this.shadow.shadowCasting;
          node.receiveShadow = !this.shadow.shadowReceiving;
        }
      });
    });
  }
}
