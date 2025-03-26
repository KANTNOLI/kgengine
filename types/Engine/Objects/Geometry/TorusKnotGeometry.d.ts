import { GeometryTypes } from "../../Constants.interface.js";
export interface TorusKnotSegments {
    tubularSegments?: number;
    radialSegments?: number;
}
export declare const TorusKnotGeometry: (radius?: number, tube?: number, segments?: TorusKnotSegments, p?: number, q?: number) => GeometryTypes;
