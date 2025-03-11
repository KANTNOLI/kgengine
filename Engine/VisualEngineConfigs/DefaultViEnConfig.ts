import * as THREE from "three";
import VisualEngineQuality from "./VisualEngine.interface.js";

//antialias - Сглаживание
//precision - точность расчётов шейдеров  / lowp   mediump   highp
//powerPreference - уровень производительности для рендерера    high-performance  default  low-power
//depth - буфер глубины

export const DefaultViEnConfig = (
  quality: VisualEngineQuality = {
    antialias: true,
    precision: "mediump",
    powerPrfrnc: "default",
    depth: true,
    shadowOn: true,
    shadowMap: "normal",
  }
): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({
    antialias: quality.antialias != undefined ? quality.antialias : true,
    precision: quality.precision != undefined ? quality.precision : "mediump",
    powerPreference:
      quality.powerPrfrnc != undefined
        ? (quality.powerPrfrnc as WebGLPowerPreference)
        : "default",
    depth: quality.depth != undefined ? quality.antialias : true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  if (quality.shadowOn != undefined ? quality.shadowOn : true) {
    renderer.shadowMap.enabled = true;
    switch (quality.shadowMap != undefined ? quality.shadowMap : "low") {
      case "low":
        renderer.shadowMap.type = THREE.BasicShadowMap;
        break;
      case "hard":
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        break;
      default:
        renderer.shadowMap.type = THREE.PCFShadowMap;
        break;
    }
  }

  document.body.appendChild(renderer.domElement);

  return renderer;
};
