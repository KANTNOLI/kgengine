export declare const Action: {
    OrbitControl: (renderer: import("three").WebGLRenderer | import("three/examples/jsm/Addons.js").CSS3DRenderer, camera: import("three").PerspectiveCamera, pAngle?: import("./Engine/PlayerActions/OrbitControl.js").Angles) => import("three/examples/jsm/Addons.js").OrbitControls;
    TrackingClickItem: (scene: import("three").Scene, camera: import("three").PerspectiveCamera, event: MouseEvent) => import("three").Intersection;
    TrackingClickItems: (scene: import("three").Scene, camera: import("three").PerspectiveCamera, event: MouseEvent) => import("three").Intersection[];
};
export default Action;
