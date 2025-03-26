import { BoxGeometry } from "../Engine/Objects/Geometry/BoxGeometry.js";
import { CircleGeometry } from "../Engine/Objects/Geometry/CircleGeometry.js";
import { ConeGeometry } from "../Engine/Objects/Geometry/ConeGeometry.js";
import { CylinderGeometry } from "../Engine/Objects/Geometry/CylinderGeometry.js";
import { DodecahedronGeometry } from "../Engine/Objects/Geometry/DodecahedronGeometry.js";
import { ExtrudeGeometry } from "../Engine/Objects/Geometry/ExtrudeGeometry.js";
import { IcosahedronGeometry } from "../Engine/Objects/Geometry/IcosahedronGeometry.js";
import { LatheGeometry } from "../Engine/Objects/Geometry/LatheGeometry.js";
import { OctahedronGeometry } from "../Engine/Objects/Geometry/OctahedronGeometry.js";
import { PlaneGeometry } from "../Engine/Objects/Geometry/PlaneGeometry.js";
import { PolyhedronGeometry } from "../Engine/Objects/Geometry/PolyhedronGeometry.js";
import { RingGeometry } from "../Engine/Objects/Geometry/RingGeometry.js";
import { ShapeGeometry } from "../Engine/Objects/Geometry/ShapeGeometry.js";
import { SphereGeometry } from "../Engine/Objects/Geometry/SphereGeometry.js";
import { TetrahedronGeometry } from "../Engine/Objects/Geometry/TetrahedronGeometry.js";
import { TorusGeometry } from "../Engine/Objects/Geometry/TorusGeometry.js";
import { TorusKnotGeometry } from "../Engine/Objects/Geometry/TorusKnotGeometry.js";
import { TubeGeometry } from "../Engine/Objects/Geometry/TubeGeometry.js";
import { BasicMaterial } from "../Engine/Objects/Materials/BasicMaterial.js";
import { LambertMaterial } from "../Engine/Objects/Materials/LambertMaterial.js";
import { PhongMaterial } from "../Engine/Objects/Materials/PhongMaterial.js";
import { PhysicalMaterial } from "../Engine/Objects/Materials/PhysicalMaterial.js";
import SpriteMaterial from "../Engine/Objects/Materials/SpriteMaterial.js";
import { StandardMaterial } from "../Engine/Objects/Materials/StandardMaterial.js";
import CreateBox from "../Engine/Objects/Snippets/CreateBox.js";
import CreateCSS3 from "../Engine/Objects/Snippets/CreateCSS3.js";
import CreatePlane from "../Engine/Objects/Snippets/CreatePlane.js";
import CustomObject from "../Engine/Objects/Snippets/CustomObject.js";

export const Geometry = {
  BoxGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  ExtrudeGeometry,
  IcosahedronGeometry,
  LatheGeometry,
  OctahedronGeometry,
  PlaneGeometry,
  PolyhedronGeometry,
  RingGeometry,
  ShapeGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  TubeGeometry,
};

export const Materials = {
  BasicMaterial,
  LambertMaterial,
  PhongMaterial,
  PhysicalMaterial,
  SpriteMaterial,
  StandardMaterial,
};

export const Snippets = {
  CreateBox,
  CreateCSS3,
  CreatePlane,
  CustomObject,
};

export const Objects = {
  Geometry,
  Materials,
  Snippets,
};

export default Objects;
