import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface DodecahedronParams {
  radius?: number;
  detail?: number;
}

export const DodecahedronGeometry = (
  params: DodecahedronParams = {
    radius: 1,
    detail: 0,
  }
):GeometryTypes  => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.DodecahedronGeometry(radius, detail);
};
