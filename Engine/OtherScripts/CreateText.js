// Подключение необходимых библиотек
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export const TextOnGeometry = async (
  text = "Hello World",
  defaultParam = {
    path: "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    size: 0.5,
    depth: 0.5,
    curveSegments: 12,
  },
  CustomParam = {
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 5,
  },
  callback
) => {
  const textLoad = new FontLoader();
  textLoad.load(
    defaultParam.path
      ? defaultParam.path
      : "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    (font) => {
      let geometry = new TextGeometry(text, {
        font: font,
        size: defaultParam.size,
        depth: defaultParam.depth,
        curveSegments: defaultParam.curveSegments,
        bevelEnabled: CustomParam.bevelEnabled,
        bevelThickness: CustomParam.bevelThickness,
        bevelSize: CustomParam.bevelSize,
        bevelOffset: CustomParam.bevelOffset,
        bevelSegments: CustomParam.bevelSegments,
      });

      callback(geometry);
      return geometry;
    }
  );
};
