import { GeometryTypes } from "../../Constants.interface.js";
export interface SphereSegments {
    widthSegments?: number;
    heightSegments?: number;
}
export interface SpherePhi {
    phiStart?: number;
    phiLength?: number;
}
export interface SphereTheta {
    thetaStart?: number;
    thetaLength?: number;
}
export declare const SphereGeometry: (radius?: number, segments?: SphereSegments, phi?: SpherePhi, theta?: SphereTheta) => GeometryTypes;
