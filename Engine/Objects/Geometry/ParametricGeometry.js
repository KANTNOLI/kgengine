import * as THREE from "three";

export const ParametricGeometry = (
    func = (u, v) => new THREE.Vector3(u, v, Math.sin(u * Math.PI)),
    slices = 10,
    stacks = 10
  ) => {
    return new THREE.ParametricGeometry(
      func,
      slices,
      stacks
    );
  };
  