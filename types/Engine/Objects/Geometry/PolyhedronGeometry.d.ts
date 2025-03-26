import { GeometryTypes } from "../../Constants.interface.js";
export interface PolyhedronParams {
    vertices?: number[];
    indices?: number[];
    radius?: number;
    detail?: number;
}
export declare const PolyhedronGeometry: (params?: PolyhedronParams) => GeometryTypes;
