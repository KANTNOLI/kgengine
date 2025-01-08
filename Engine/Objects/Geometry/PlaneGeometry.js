export const PlaneGeometry = (
    size = {
      width: 1,
      height: 1,
    },
    segments = {
      widthSegments: 1,
      heightSegments: 1,
    }
  ) => {
    return new THREE.PlaneGeometry(
      size.width,
      size.height,
      segments.widthSegments,
      segments.heightSegments
    );
  };
  