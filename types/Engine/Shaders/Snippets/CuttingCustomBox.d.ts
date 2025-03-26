import * as THREE from "three";
import { PositionObject3D } from "../../Constants.interface.js";
export interface CustomCube {
    matrix: any;
    texture: THREE.Material | THREE.Material[] | any;
    depth: number;
    CoordLT: PositionObject3D;
    CoordLB: PositionObject3D;
    CoordRT: PositionObject3D;
    CoordRB: PositionObject3D;
    startZ: PositionObject3D;
    positionWorld: PositionObject3D;
    endZ: PositionObject3D;
}
declare const CuttingCustomBox: (Figure: CustomCube) => THREE.ShaderMaterial;
export { CuttingCustomBox };
