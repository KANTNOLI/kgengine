import { GeometryTypes } from "../../Constants.interface.js";
export interface IcosahedronParams {
    radius?: number;
    detail?: number;
}
export declare const IcosahedronGeometry: (params?: IcosahedronParams) => GeometryTypes;
