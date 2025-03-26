import { GeometryTypes } from "../../Constants.interface.js";
export interface BoxSize {
    width?: number;
    height?: number;
    depth?: number;
}
export interface BoxSegments {
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
}
export declare const BoxGeometry: (size?: BoxSize, segments?: BoxSegments) => GeometryTypes;
