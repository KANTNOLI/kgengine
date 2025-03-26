import { GeometryTypes } from "../../Constants.interface.js";
export interface TetrahedronParams {
    radius?: number;
    detail?: number;
}
export declare const TetrahedronGeometry: (params?: TetrahedronParams) => GeometryTypes;
