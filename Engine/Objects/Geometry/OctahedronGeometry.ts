import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

interface OctahedronParams {
  radius?: number;
  detail?: number;
}

export const OctahedronGeometry = (
  params: OctahedronParams = {
    radius: 1,
    detail: 0,
  }
):GeometryTypes  => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.OctahedronGeometry(radius, detail);
};
