import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { LoadingProcess } from "./LoadingProcess.js";

export class CreateModel {
  model = null;
  modelCreate = false;
  path = "./Engine/Assets/Models/default.glb";
  position = {
    x: 0,
    y: 0,
    z: 0,
  };
  rotate = {
    x: 0,
    y: 0,
    z: 0,
  };
  scale = {
    width: 1,
    height: 1,
    length: 1,
  };
  shadow = {
    shadowCasting: true,
    shadowReceiving: true,
  };

  constructor(path, position, rotate, scale, shadow) {
    this.path = path || this.path;
    this.position = { ...this.position, ...position }; // {a: 1} = {a: 1, a:2 + b:2} = {a:2, b:2}
    this.rotate = { ...this.rotate, ...rotate };
    this.scale = { ...this.scale, ...scale };
    this.shadow = { ...this.shadow, ...shadow };

    this.modelCreate = true;
    this.modelLoadig();
  }

  modelLoadig() {
    const modelsLoader = new GLTFLoader();

    modelsLoader.load(this.path, (model) => {
      const DEGREE = Math.PI / 180;
      this.model = model.scene;

      if (this.model) {
        this.model.position.x = this.position.x;
        this.model.position.y = this.position.y;
        this.model.position.z = this.position.z;

        this.model.rotation.x = DEGREE * this.rotate.x;
        this.model.rotation.y = DEGREE * this.rotate.y;
        this.model.rotation.z = DEGREE * this.rotate.z;

        this.model.scale.set(
          this.scale.width,
          this.scale.height,
          this.scale.length
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

  setNodeParam(callback) {
    this.model.traverse((node) => {
      callback(node);
    });
  }

  addScene(scene) {
    if (this.modelCreate) {
      setInterval(() => {
        if (this.model) {
          scene.add(this.model);
          return 1;
        }
      }, 500);
    } else {
      console.log("Need create model");
    }
  }

  setObjectLook(object) {
    if (this.modelCreate) {
      setInterval(() => {
        if (this.model) {
          object.lookAt(this.model.position);
          return 1;
        }
      }, 500);
    } else {
      console.log("Need create model");
    }
  }

  setOrbitControll(controll) {
    if (this.modelCreate) {
      setInterval(() => {
        if (this.model) {
          controll.target.copy(this.model.position);
          return 1;
        }
      }, 500);
    } else {
      console.log("Need create model");
    }
  }
}

// look at
// comtroll
