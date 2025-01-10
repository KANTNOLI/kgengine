// Подключение необходимых библиотек
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export const TextOnGeometry = async (
  defaultParam = {
    text: "Hello World",
    path: "/Engine/Assets/Fonts/default.json",
    size: 80,
    depth: 5,
    curveSegments: 12,
  },
  CustomParam = {
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  },
  callback
) => {
  const textLoad = new FontLoader();
  console.log(1);
  textLoad.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    (font) => {
      console.log(2);
      let geometry = new TextGeometry("ad", {
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

      console.log(3);
      callback(geometry);
      return geometry;
    }
  );
};
