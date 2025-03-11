export interface ModelPosition {
  posX: number;
  posY: number;
  posZ: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  scaleWidth?: number;
  scaleHeight?: number;
  scaleLength?: number;
}

export interface ModelShadow {
  shadowCasting?: boolean;
  shadowReceiving?: boolean;
}

export interface TextPosition {
  posX: number;
  posY: number;
  posZ: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  scaleWidth?: number;
  scaleHeight?: number;
  scaleLength?: number;
}

export interface TextVisual {
  size?: number;
  depth?: number;
  curveSegments?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  bevelOffset?: number;
  bevelSegments?: number;
}

export interface TextShadow {
  shadowCasting?: boolean;
  shadowReceiving?: boolean;
}
