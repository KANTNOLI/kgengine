import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";

interface PasteHTMLObject {
  HTMLElement: HTMLElement;
  classList?: string | string[];
}

const CreateCSS3 = (
  scene: THREE.Scene,
  params?: PasteHTMLObject
): CSS3DObject => {
  if (params) {
    if (params.classList && !Array.isArray(params.classList)) {
      params.classList = [params.classList];
      params.classList.map((value) => {
        params.HTMLElement?.classList.add(value);
      });
    } else if (params.classList && Array.isArray(params.classList)) {
      params.classList.map((value) => {
        params.HTMLElement?.classList.add(value);
      });
    } else {
      params.HTMLElement.style.width = "100px";
      params.HTMLElement.style.height = "50px";
      params.HTMLElement.style.opacity = "1.0";
      params.HTMLElement.style.background = "red";
      params.HTMLElement.style.display = "flex";
      params.HTMLElement.style.alignItems = "center";
      params.HTMLElement.style.justifyContent = "center";
      params.HTMLElement.style.color = "white";
      params.HTMLElement.style.fontSize = "14px";
      params.HTMLElement.style.fontFamily = "Arial, sans-serif";
      params.HTMLElement.textContent = `Объект Rand`;
    }

    const cssObject = new CSS3DObject(params.HTMLElement);
    scene.add(cssObject);
    return cssObject;
  } else {
    let div = document.createElement("div");

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.opacity = "1.0";
    div.style.background = "yellow";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.color = "white";
    div.style.fontSize = "14px";
    div.style.fontFamily = "Arial, sans-serif";
    div.textContent = `Объект Rand`;

    const cssObject = new CSS3DObject(div);
    scene.add(cssObject);
    return cssObject;
  }
};

export default CreateCSS3;
