import { GeometryTypes } from "../../Constants.interface.js";
export interface RingTheta {
    thetaStart?: number;
    thetaLength?: number;
}
export declare const RingGeometry: (innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, theta?: RingTheta) => GeometryTypes;
