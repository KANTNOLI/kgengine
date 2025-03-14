import * as THREE from "three";
import WebGLEngineQuality, { EngineSizes } from "./VisualEngine.interface.js";

//antialias - Сглаживание
//precision - точность расчётов шейдеров  / lowp   mediump   highp
//powerPreference - уровень производительности для рендерера    high-performance  default  low-power
//depth - буфер глубины

export const WebGLEngine = (
  quality: WebGLEngineQuality = {
    antialias: true,
    precision: "mediump",
    powerPrfrnc: "default",
    depth: true,
    shadowOn: true,
    shadowMap: "normal",
  },
  sizes: EngineSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  css3On: boolean = true
): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({
    antialias: quality.antialias || true,
    precision: quality.precision || "mediump",
    powerPreference: (quality.powerPrfrnc as WebGLPowerPreference) || "default",
    depth: quality.depth || true,
  });

  renderer.setSize(sizes.width, sizes.height);

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

  if (css3On) {
    renderer.domElement.style.position =  "absolute";
    renderer.domElement.style.zIndex =  "0";
    renderer.domElement.style.top = "0";
  }

  document.body.appendChild(renderer.domElement);

  return renderer;
};
