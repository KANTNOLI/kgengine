import { GeometryTypes } from "../../Constants.interface.js";
export interface CylinderRadius {
    radiusTop?: number;
    radiusBottom?: number;
}
export interface CylinderSegments {
    radialSegments?: number;
    heightSegments?: number;
}
export interface CylinderTheta {
    thetaStart?: number;
    thetaLength?: number;
}
export declare const CylinderGeometry: (radius?: CylinderRadius, height?: number, segments?: CylinderSegments, openEnded?: boolean, theta?: CylinderTheta) => GeometryTypes;
