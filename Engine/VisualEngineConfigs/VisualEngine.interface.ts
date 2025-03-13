export default interface WebGLEngineQuality {
  antialias?: boolean;
  precision?: "lowp" | "mediump" | "highp";
  powerPrfrnc?: "high-performance" | "default" | "low-power";
  depth?: boolean;
  shadowOn?: boolean;
  shadowMap?: "low" | "normal" | "hard";
}

export interface CSS3DEngineQuality {
  domPosition?: string; //
  domZIndex?: string;
  domTop?: string;
  antialias?: boolean;
  depth?: boolean;
}

export interface EngineSizes {
  width: number;
  height: number;
}
