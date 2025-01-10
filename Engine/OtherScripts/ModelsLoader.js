import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { LoadingProcess } from "./LoadingProcess.js";

export const ModelsLoader = async (
  scene,
  deafultParam = {
    path: "../Assets/Models/default.glb",
  },
  visualParam = {
    PosX: 0,
    PosY: 0,
    PosZ: 0,

    scaleWidth: 1,
    scaleHeight: 1,
    scaleLength: 1,

    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,

    shadowCasting: true,
    castingReceiving: true,
  },
  looksAt = null,
  controll = null,
) => {
  const modelsLoader = new GLTFLoader();

  //"models/chessboard.glb",
  modelsLoader.load(path, (model) => {
    //x: 0.115, y: -0.0777, z: 0.115
    model.scene.position.x = position.x;
    model.scene.position.y = position.y;
    model.scene.position.z = position.z;

    //width: 1, height: 0.5, length:
    model.scene.scale.set(scale.width, scale.height, scale.length);

    if (typeof shadow === "object") {
      model.scene.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = shadow.casting; // отбрасывание тени = casting shadow
          node.receiveShadow = shadow.receiving; // получение тени = receiving shadow
        }
      });
    }

    // если мы получили массив элементов рендера, которые должны смотреть на модель, то парсим
    if (Array.isArray(looksAt)) {
      looksAt.map((object, id) => {
        //console.log(object);
        object.isObject3D
          ? object.lookAt(model.scene.position)
          : console.error(
              `ModelsLoader error: element = ${id} id, is not object!`
            );
      });
    }

    if (controll) {
      controll.target.copy(model.scene.position);
    }

    if (rotation) {
      model.scene.rotation.x = (Math.PI / 180) * rotation.x;
      model.scene.rotation.y = (Math.PI / 180) * rotation.y;
      model.scene.rotation.z = (Math.PI / 180) * rotation.z;
    }

    scene.add(model.scene);

    return model;
  });
};
