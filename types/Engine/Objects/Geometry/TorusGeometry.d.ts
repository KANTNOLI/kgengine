import { GeometryTypes } from "../../Constants.interface.js";
export interface TorusSegments {
    radialSegments?: number;
    tubularSegments?: number;
}
export declare const TorusGeometry: (radius?: number, tube?: number, segments?: TorusSegments, arc?: number) => GeometryTypes;
