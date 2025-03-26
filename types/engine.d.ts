export declare const Engine: {
    CSS3DEngine: (quality?: import("./Engine/VisualEngineConfigs/VisualEngine.interface.js").CSS3DEngineQuality, sizes?: import("./Engine/VisualEngineConfigs/VisualEngine.interface.js").EngineSizes) => import("three/examples/jsm/Addons.js").CSS3DRenderer;
    WebGLEngine: (quality?: import("./Engine/VisualEngineConfigs/VisualEngine.interface.js").default, sizes?: import("./Engine/VisualEngineConfigs/VisualEngine.interface.js").EngineSizes, css3On?: boolean) => import("three").WebGLRenderer;
};
export default Engine;
