import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface BoxSize {
  width?: number;
  height?: number;
  depth?: number;
}

export interface BoxSegments {
  widthSegments?: number;
  heightSegments?: number;
  depthSegments?: number;
}

export const BoxGeometry = (
  size: BoxSize = {
    width: 1,
    height: 1,
    depth: 1,
  },
  segments: BoxSegments = {
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1,
  }
):GeometryTypes => {
  const { width = 1, height = 1, depth = 1 } = size;
  const { widthSegments = 1, heightSegments = 1, depthSegments = 1 } = segments;

  return new THREE.BoxGeometry(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegments
  );
};
