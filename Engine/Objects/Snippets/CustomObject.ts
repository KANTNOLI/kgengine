import * as THREE from "three";
import { GeometryTypes, MaterialTypes } from "../../Constants.interface.js";
import { BoxGeometry } from "../Geometry/BoxGeometry.js";
import { BasicMaterial } from "../Materials/BasicMaterial.js";

const CustomObject = (
  Geometry: GeometryTypes = BoxGeometry(),
  Material: MaterialTypes = BasicMaterial({ color: 0x00022 })
): THREE.Object3D => {
  return new THREE.Mesh(Geometry, Material);
};

export default CustomObject;
