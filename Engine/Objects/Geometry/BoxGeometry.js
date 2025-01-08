import * as THREE from "three";

export const BoxGeometry = (
    size = {
      width: 1,
      height: 1,
      depth: 1,
    },
    segments = {
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,
    }
  ) => {
    return new THREE.BoxGeometry(
      size.width,
      size.height,
      size.depth,
      segments.widthSegments,
      segments.heightSegments,
      segments.depthSegments
    );
  };
  