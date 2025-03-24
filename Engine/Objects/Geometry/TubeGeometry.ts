import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface TubeParams {
  path?: THREE.Curve<THREE.Vector3>;
  tubularSegments?: number;
  radius?: number;
  radialSegments?: number;
  closed?: boolean;
}

export const TubeGeometry = (
  params: TubeParams = {
    path: new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 1)]),
    tubularSegments: 64,
    radius: 1,
    radialSegments: 8,
    closed: false,
  }
):GeometryTypes => {
  const {
    path = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 1)]),
    tubularSegments = 64,
    radius = 1,
    radialSegments = 8,
    closed = false,
  } = params;

  return new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed);
};
