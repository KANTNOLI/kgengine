import { GeometryTypes } from "../../Constants.interface.js";
export interface CircleSegments {
    segments?: number;
}
export interface CircleTheta {
    thetaStart?: number;
    thetaLength?: number;
}
export declare const CircleGeometry: (radius?: number, segments?: CircleSegments, theta?: CircleTheta) => GeometryTypes;
