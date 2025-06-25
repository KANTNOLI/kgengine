import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/Addons.js";
import CustomObject from "./CustomObject.js";
import { PlaneGeometry } from "../Geometry/PlaneGeometry.js";
import { BasicMaterial } from "../Materials/BasicMaterial.js";
import {
  PositionObject3D,
  RotationObject3D,
} from "../../Constants.interface.js";

export interface PasteHTMLObject {
  HTMLElement: HTMLElement;
  classList: string | string[];
}

export interface HTMLObject {
  HTMLElement: CSS3DObject;
  HitBox: THREE.Object3D;
}

export interface HTMLObjectSizes {
  width: number;
  height: number;
}

const CreateCSS3 = (
  sceneGL: THREE.Scene,
  sceneCSS: THREE.Scene,
  position: PositionObject3D = { x: 0, y: 2, z: 0 },
  sizes: HTMLObjectSizes = { width: 100, height: 100 },
  params?: PasteHTMLObject
): HTMLObject => {
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
      params.HTMLElement.style.width = `${sizes.width}px`;
      params.HTMLElement.style.height = `${sizes.height}px`;
      params.HTMLElement.style.opacity = "1.0";
      params.HTMLElement.style.background = "red";
      params.HTMLElement.style.display = "flex";
      params.HTMLElement.style.alignItems = "center";
      params.HTMLElement.style.justifyContent = "center";
      params.HTMLElement.style.color = "white";
      params.HTMLElement.style.fontSize = "14px";
      params.HTMLElement.style.fontFamily = "Arial, sans-serif";
      params.HTMLElement.textContent = `Объект HTML`;
    }

    const cssObject = new CSS3DObject(params.HTMLElement);
    sceneCSS.add(cssObject);

    const plane = CustomObject(
      PlaneGeometry(),
      BasicMaterial({ visible: false }, {}, { size: THREE.BackSide })
    );

    plane.userData = { test: "test" };
    sceneGL.add(plane);

    plane.position.set(
      cssObject.position.x,
      cssObject.position.y,
      cssObject.position.z
    );

    plane.rotation.set(
      cssObject.rotation.x,
      cssObject.rotation.y,
      cssObject.rotation.z
    );

    plane.scale.set(100 * 0.01, 50 * 0.01, 1);

    return { HTMLElement: cssObject, HitBox: plane };
  } else {
    const div = document.createElement("div");

    div.style.width = `${sizes.width}px`;
    div.style.height = `${sizes.height}px`;
    div.style.opacity = "1.0";
    div.style.background = "blue";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.color = "white";
    div.style.fontSize = "14px";
    div.style.fontFamily = "Arial, sans-serif";
    div.textContent = `Объект HTML`;

    const cssObject = new CSS3DObject(div);
    cssObject.scale.set(0.02, 0.02, 0.02);

    sceneCSS.add(cssObject);
    const plane = CustomObject(
      PlaneGeometry(),
      BasicMaterial({ color: 0x00011 }, {}, { size: THREE.BackSide })
    );

    plane.userData = { test: "test" };
    sceneGL.add(plane);

    cssObject.position.set(position.x, position.y, position.z);

    cssObject.rotation.set(
      cssObject.rotation.x,
      cssObject.rotation.y,
      cssObject.rotation.z
    );

    plane.position.set(position.x, position.y, position.z);

    plane.rotation.set(
      cssObject.rotation.x,
      cssObject.rotation.y,
      cssObject.rotation.z
    );

    plane.scale.set(sizes.width * 0.02, sizes.height * 0.02, 1);

    return { HTMLElement: cssObject, HitBox: plane };
  }
};

interface HTMLUpdateSize {
  width: number;
  height: number;
}

const UpdateCSS3 = (
  HTML: HTMLObject,
  position: PositionObject3D = {
    x: 0,
    y: 0,
    z: 0,
  },
  rotation: RotationObject3D = {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: HTMLUpdateSize = {
    width: 120,
    height: 120,
  }
): HTMLObject => {
  HTML.HitBox.position.set(position.x, position.y, position.z);
  HTML.HitBox.rotation.set(rotation.x, rotation.y, rotation.z);
  HTML.HitBox.scale.set(scale.width * 0.02, scale.height * 0.02, 1);

  HTML.HTMLElement.position.set(position.x, position.y, position.z);
  HTML.HTMLElement.rotation.set(rotation.x, rotation.y, rotation.z);
  HTML.HTMLElement.scale.set(scale.width * 0.0004, scale.height * 0.0004, 1);

  return { HTMLElement: HTML.HTMLElement, HitBox: HTML.HitBox };
};

export { UpdateCSS3, CreateCSS3 };
