import { GeometryTypes } from "../../Constants.interface.js";
export interface OctahedronParams {
    radius?: number;
    detail?: number;
}
export declare const OctahedronGeometry: (params?: OctahedronParams) => GeometryTypes;
