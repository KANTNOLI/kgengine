import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface IcosahedronParams {
  radius?: number;
  detail?: number;
}

export const IcosahedronGeometry = (
  params: IcosahedronParams = {
    radius: 1,
    detail: 0,
  }
):GeometryTypes  => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.IcosahedronGeometry(radius, detail);
};
