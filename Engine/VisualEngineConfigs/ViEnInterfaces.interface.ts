export default interface DefaultViEnInterface {
  antialias: boolean;
  precision: "lowp" | "mediump" | "highp";
  powerPrfrnc: "high-performance" | "default" | "low-power";
  depth: boolean;
  shadowOn: boolean;
  shadowMap: "low" | "normal" | "hard";
}
