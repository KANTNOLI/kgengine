import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface PlaneSize {
  width?: number;
  height?: number;
}

export interface PlaneSegments {
  widthSegments?: number;
  heightSegments?: number;
}

export const PlaneGeometry = (
  size: PlaneSize = {
    width: 1,
    height: 1,
  },
  segments: PlaneSegments = {
    widthSegments: 1,
    heightSegments: 1,
  }
):GeometryTypes  => {
  const { width = 1, height = 1 } = size;
  const { widthSegments = 1, heightSegments = 1 } = segments;

  return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
};
