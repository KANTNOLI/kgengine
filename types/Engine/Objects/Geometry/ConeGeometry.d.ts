import { GeometryTypes } from "../../Constants.interface.js";
export interface ConeTheta {
    thetaStart?: number;
    thetaLength?: number;
}
export declare const ConeGeometry: (radius?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, theta?: ConeTheta) => GeometryTypes;
