import * as THREE from "three";

interface IcosahedronParams {
  radius?: number;
  detail?: number;
}

export const IcosahedronGeometry = (
  params: IcosahedronParams = {
    radius: 1,
    detail: 0,
  }
): THREE.IcosahedronGeometry => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.IcosahedronGeometry(radius, detail);
};
