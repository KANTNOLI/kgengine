export declare const Lighting: {
    AmbientLightCfg: (scene: import("three").Scene, params?: import("./Engine/Lighting/Lighting.interface.js").LightingParams) => import("./Engine/Constants.interface.js").LightingTypes;
    DirectionalLightCfg: (scene: import("three").Scene, position?: import("./Engine/Constants.interface.js").PositionObject3D, params?: import("./Engine/Lighting/Lighting.interface.js").LightingParams, shadows?: import("./Engine/Lighting/Lighting.interface.js").LightingShadows) => import("./Engine/Constants.interface.js").LightingTypes;
    HemisphereLightCfg: (scene: import("three").Scene, params?: import("./Engine/Lighting/Lighting.interface.js").LightingHemisphereParams) => import("./Engine/Constants.interface.js").LightingTypes;
    PointLightCfg: (scene: import("three").Scene, position?: import("./Engine/Constants.interface.js").PositionObject3D, params?: import("./Engine/Lighting/Lighting.interface.js").LightingParams, shadows?: import("./Engine/Lighting/Lighting.interface.js").LightingShadows, decay?: number) => import("./Engine/Constants.interface.js").LightingTypes;
    ShadowCfg: (scene: import("three").Scene, size?: import("./Engine/Lighting/Lighting.interface.js").ShadowsSize) => import("./Engine/Constants.interface.js").LightingTypes;
    SpotLightCfg: (scene: import("three").Scene, params?: {
        color: number;
        intensity: number;
    }, position?: import("./Engine/Constants.interface.js").PositionObject3D, lighting?: import("./Engine/Lighting/Lighting.interface.js").LightingLight, shadows?: import("./Engine/Lighting/Lighting.interface.js").LightingShadows) => import("./Engine/Constants.interface.js").LightingTypes;
};
export default Lighting;
