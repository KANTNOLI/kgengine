import { GeometryTypes } from "../../Constants.interface.js";
export interface DodecahedronParams {
    radius?: number;
    detail?: number;
}
export declare const DodecahedronGeometry: (params?: DodecahedronParams) => GeometryTypes;
