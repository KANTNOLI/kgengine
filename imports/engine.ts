import { CSS3DEngine } from "../Engine/VisualEngineConfigs/CSS3DEngine.js";
import { WebGLEngine } from "../Engine/VisualEngineConfigs/WebGLEngine.js";

export const Engine = {
  CSS3DEngine,
  WebGLEngine,
};

export default {
  ...CSS3DEngine,
  ...WebGLEngine,
};
