import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { LoadingProcess } from "./LoadingProcess.js";

export const ModelsLoader = async (
  callback,
  path = null,
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
    shadowReceiving: true,
  },
  looksAt = null,
  controll = null
) => {
  const modelsLoader = new GLTFLoader();

  //"models/chessboard.glb",
  modelsLoader.load(
    path ? path : "/Engine/Assets/Models/default.glb",
    (model) => {
      //x: 0.115, y: -0.0777, z: 0.115
      if (visualParam.PosX || visualParam.PosY || visualParam.PosZ) {
        model.scene.position.x = visualParam.PosX;
        model.scene.position.y = visualParam.PosY;
        model.scene.position.z = visualParam.PosZ;
      }
      //width: 1, height: 0.5, length:
      if (
        visualParam.scaleWidth != 1 ||
        visualParam.scaleHeight != 1 ||
        visualParam.scaleLength != 1
      ) {
        model.scene.scale.set(
          visualParam.scaleWidth,
          visualParam.scaleHeight,
          visualParam.scaleLength
        );
      }

      if (visualParam.shadowCasting || visualParam.shadowReceiving) {
        model.scene.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = visualParam.shadowCasting; // отбрасывание тени = casting shadow
            node.receiveShadow = visualParam.shadowReceiving; // получение тени = receiving shadow
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

      if (visualParam.rotateX) {
        model.scene.rotation.x = (Math.PI / 180) * visualParam.rotateX;
      }

      if (visualParam.rotateY) {
        model.scene.rotation.y = (Math.PI / 180) * visualParam.rotateY;
      }

      if (visualParam.rotateZ) {
        model.scene.rotation.z = (Math.PI / 180) * visualParam.rotateZ;
      }

      callback(model.scene);
    }
  );
};
