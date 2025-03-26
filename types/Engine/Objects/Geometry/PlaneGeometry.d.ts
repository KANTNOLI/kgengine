import { GeometryTypes } from "../../Constants.interface.js";
export interface PlaneSize {
    width?: number;
    height?: number;
}
export interface PlaneSegments {
    widthSegments?: number;
    heightSegments?: number;
}
export declare const PlaneGeometry: (size?: PlaneSize, segments?: PlaneSegments) => GeometryTypes;
