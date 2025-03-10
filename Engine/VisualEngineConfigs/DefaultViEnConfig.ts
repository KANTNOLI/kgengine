import * as THREE from "three";
import DefaultViEnInterface from "./ViEnInterfaces.interface.js";

//antialias - Сглаживание
//precision - точность расчётов шейдеров  / lowp   mediump   highp
//powerPreference - уровень производительности для рендерера    high-performance  default  low-power
//depth - буфер глубины

export const DefaultViEnConfig = (
  quality: DefaultViEnInterface = {
    antialias: true,
    precision: "mediump",
    powerPrfrnc: "default",
    depth: true,
    shadowOn: true,
    shadowMap: "normal",
  }
): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({
    antialias: quality.antialias,
    precision: quality.precision,
    powerPreference: quality.powerPrfrnc as WebGLPowerPreference,
    depth: quality.depth,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  if (quality.shadowOn) {
    renderer.shadowMap.enabled = true;
    switch (quality.shadowMap) {
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
