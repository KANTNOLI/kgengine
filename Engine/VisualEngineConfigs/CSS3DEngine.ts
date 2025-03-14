import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { CSS3DEngineQuality, EngineSizes } from "./VisualEngine.interface.js";

export const CSS3DEngine = (
  quality: CSS3DEngineQuality = {
    domPosition: "absolute",
    domZIndex: "1",
    domTop: "0",
    antialias: true,
    depth: true,
  },
  sizes: EngineSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
): CSS3DRenderer => {
  const renderer = new CSS3DRenderer();

  renderer.setSize(sizes.width, sizes.height);

  renderer.domElement.style.position = quality.domPosition || "absolute";
  renderer.domElement.style.zIndex = quality.domZIndex || "1";
  renderer.domElement.style.top = quality.domTop || "0";

  document.body.appendChild(renderer.domElement);

  return renderer;
};
