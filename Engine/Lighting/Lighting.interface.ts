export interface LightingParams {
  color?: number;
  intensity?: number;
  length?: number;
}

export interface LightingHemisphereParams {
  skyColor?: number;
  landColor?: number;
  intensity?: number;
}

export interface LightingShadows {
  cast?: boolean;
  bias?: number;
  mapSize?: number;
}

export interface LightingLight {
    distance?: number,
    angle?: number,
    penumbra?: number,
    decay?: number,
  }


export interface ShadowsSize{
    width?: number,
    height?: number,
}