import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface TetrahedronParams {
  radius?: number;
  detail?: number;
}

export const TetrahedronGeometry = (
  params: TetrahedronParams = {
    radius: 1,
    detail: 0,
  }
):GeometryTypes => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.TetrahedronGeometry(radius, detail);
};
