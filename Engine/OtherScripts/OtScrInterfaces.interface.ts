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
  shadowCasting: boolean;
  shadowReceiving: boolean;
}

