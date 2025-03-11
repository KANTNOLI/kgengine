export interface CameraPosition {
  x: number;
  y: number;
  z: number;
}

export interface CameraPerspective {
  fov?: number;
  aspect?: number;
  near?: number;
  far?: number;
}
