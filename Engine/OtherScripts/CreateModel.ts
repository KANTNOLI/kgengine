import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ModelPosition, ModelShadow } from "./OtScrInterfaces.interface.js";

const DEGREE = Math.PI / 180;

export class CreateModel {
  model: THREE.Object3D = new THREE.Object3D();
  path = "./Assets/Models/default.glb";
  position: ModelPosition = {
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
  shadow: ModelShadow = {
    shadowCasting: true,
    shadowReceiving: true,
  };

  constructor(path: string, position: ModelPosition, shadow: ModelShadow) {
    this.path = path || this.path;
    this.position = { ...this.position, ...position };
    this.shadow = { ...this.shadow, ...shadow };

    this.modelLoading();
  }

  intervalSnippet(callback: () => any) {
    // Нужно для ожидания загрузки модельки
    // без ожидания функции будут выполняться перед
    // вообще возможностью работать с моделью
    let waitLoading = setInterval(() => {
      if (this.model) {
        callback();
        clearInterval(waitLoading);
      }
    }, 1000);
  }

  setNodeParam(callback: (node: THREE.Mesh) => any) {
    this.intervalSnippet(() => {
      this.model.traverse((node: THREE.Object3D) => {
        if (node instanceof THREE.Mesh) {
          callback(node);
        }
      });
    });
  }

  modelLoading() {
    const modelsLoader = new GLTFLoader();

    modelsLoader.load(this.path, (model: GLTF) => {
      this.model = model.scene;

      if (this.model) {
        this.model.position.x = this.position.posX;
        this.model.position.y = this.position.posY;
        this.model.position.z = this.position.posZ;

        this.model.rotation.x = this.position.rotateX
          ? DEGREE * this.position.rotateX
          : 0;
        this.model.rotation.y = this.position.rotateY
          ? DEGREE * this.position.rotateY
          : 0;
        this.model.rotation.z = this.position.rotateZ
          ? DEGREE * this.position.rotateZ
          : 0;

        this.model.scale.set(
          this.position.scaleWidth || 1,
          this.position.scaleHeight || 1,
          this.position.scaleLength || 1
        );
      } else {
        console.error(`modelLoading is dead! \n this.model -> false`);
      }

      this.setNodeParam((node: THREE.Mesh) => {
        node.castShadow = this.shadow.shadowCasting;
        node.receiveShadow = this.shadow.shadowReceiving;
      });
    });
  }

  addToScene(scene: THREE.Scene) {
    this.intervalSnippet(() => {
      scene.add(this.model);
    });
  }

  customEdit(callback: (model: THREE.Object3D) => any) {
    this.intervalSnippet(() => {
      callback(this.model);
    });
  }

  updatePosition(position: ModelPosition) {
    this.position = { ...this.position, ...position };

    this.intervalSnippet(() => {
      this.model.position.x = this.position.posX;
      this.model.position.y = this.position.posY;
      this.model.position.z = this.position.posZ;

      this.model.rotation.x = this.position.rotateX
        ? DEGREE * this.position.rotateX
        : 0;
      this.model.rotation.y = this.position.rotateY
        ? DEGREE * this.position.rotateY
        : 0;
      this.model.rotation.z = this.position.rotateZ
        ? DEGREE * this.position.rotateZ
        : 0;

      this.model.scale.set(
        this.position.scaleWidth || 1,
        this.position.scaleHeight || 1,
        this.position.scaleLength || 1
      );
    });
  }

  switchingShadow() {
    this.setNodeParam((node) => {
      node.castShadow = !this.shadow.shadowCasting;
      node.receiveShadow = !this.shadow.shadowReceiving;
    });
  }
}
