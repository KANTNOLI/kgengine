import CreatePlane from "./Engine/Objects/Snippets/CreatePlane.js";
export declare const Geometry: {
    BoxGeometry: (size?: import("./Engine/Objects/Geometry/BoxGeometry.js").BoxSize, segments?: import("./Engine/Objects/Geometry/BoxGeometry.js").BoxSegments) => import("./Engine/Constants.interface.js").GeometryTypes;
    CircleGeometry: (radius?: number, segments?: import("./Engine/Objects/Geometry/CircleGeometry.js").CircleSegments, theta?: import("./Engine/Objects/Geometry/CircleGeometry.js").CircleTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
    ConeGeometry: (radius?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, theta?: import("./Engine/Objects/Geometry/ConeGeometry.js").ConeTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
    CylinderGeometry: (radius?: import("./Engine/Objects/Geometry/CylinderGeometry.js").CylinderRadius, height?: number, segments?: import("./Engine/Objects/Geometry/CylinderGeometry.js").CylinderSegments, openEnded?: boolean, theta?: import("./Engine/Objects/Geometry/CylinderGeometry.js").CylinderTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
    DodecahedronGeometry: (params?: import("./Engine/Objects/Geometry/DodecahedronGeometry.js").DodecahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    ExtrudeGeometry: (shape?: import("three").Shape, options?: import("./Engine/Objects/Geometry/ExtrudeGeometry.js").ExtrudeOptions) => import("./Engine/Constants.interface.js").GeometryTypes;
    IcosahedronGeometry: (params?: import("./Engine/Objects/Geometry/IcosahedronGeometry.js").IcosahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    LatheGeometry: (points?: import("three").Vector2[], segments?: number, phi?: import("./Engine/Objects/Geometry/LatheGeometry.js").LathePhi) => import("./Engine/Constants.interface.js").GeometryTypes;
    OctahedronGeometry: (params?: import("./Engine/Objects/Geometry/OctahedronGeometry.js").OctahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    PlaneGeometry: (size?: import("./Engine/Objects/Geometry/PlaneGeometry.js").PlaneSize, segments?: import("./Engine/Objects/Geometry/PlaneGeometry.js").PlaneSegments) => import("./Engine/Constants.interface.js").GeometryTypes;
    PolyhedronGeometry: (params?: import("./Engine/Objects/Geometry/PolyhedronGeometry.js").PolyhedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    RingGeometry: (innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, theta?: import("./Engine/Objects/Geometry/RingGeometry.js").RingTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
    ShapeGeometry: (params?: import("./Engine/Objects/Geometry/ShapeGeometry.js").ShapeParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    SphereGeometry: (radius?: number, segments?: import("./Engine/Objects/Geometry/SphereGeometry.js").SphereSegments, phi?: import("./Engine/Objects/Geometry/SphereGeometry.js").SpherePhi, theta?: import("./Engine/Objects/Geometry/SphereGeometry.js").SphereTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
    TetrahedronGeometry: (params?: import("./Engine/Objects/Geometry/TetrahedronGeometry.js").TetrahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    TorusGeometry: (radius?: number, tube?: number, segments?: import("./Engine/Objects/Geometry/TorusGeometry.js").TorusSegments, arc?: number) => import("./Engine/Constants.interface.js").GeometryTypes;
    TorusKnotGeometry: (radius?: number, tube?: number, segments?: import("./Engine/Objects/Geometry/TorusKnotGeometry.js").TorusKnotSegments, p?: number, q?: number) => import("./Engine/Constants.interface.js").GeometryTypes;
    TubeGeometry: (params?: import("./Engine/Objects/Geometry/TubeGeometry.js").TubeParams) => import("./Engine/Constants.interface.js").GeometryTypes;
};
export declare const Materials: {
    BasicMaterial: (basicParams?: import("./Engine/Objects/Materials/BasicMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/BasicMaterial.js").MaterialOtherParams, Shaders?: import("./Engine/Objects/Materials/BasicMaterial.js").ShadersParams, admin?: import("./Engine/Objects/Materials/BasicMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
    LambertMaterial: (basicParams?: import("./Engine/Objects/Materials/LambertMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/LambertMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/LambertMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
    PhongMaterial: (basicParams?: import("./Engine/Objects/Materials/PhongMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/PhongMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/PhongMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
    PhysicalMaterial: (basicParams?: import("./Engine/Objects/Materials/PhysicalMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/PhysicalMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/PhysicalMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
    SpriteMaterial: (param: import("./Engine/Objects/Materials/SpriteMaterial.js").SpriteParam) => import("three").SpriteMaterial;
    StandardMaterial: (basicParams?: import("./Engine/Objects/Materials/StandardMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/StandardMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/StandardMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
};
export declare const Snippets: {
    CreateBox: (Material?: import("./Engine/Constants.interface.js").MaterialTypes, size?: import("./Engine/Objects/Snippets/CreateBox.js").BoxSize, segments?: import("./Engine/Objects/Snippets/CreateBox.js").BoxSegments) => import("three").Object3D;
    CreateCSS3: (sceneGL: import("three").Scene, sceneCSS: import("three").Scene, position?: import("./Engine/Constants.interface.js").PositionObject3D, sizes?: import("./Engine/Objects/Snippets/CreateCSS3.js").HTMLObjectSizes, params?: import("./Engine/Objects/Snippets/CreateCSS3.js").PasteHTMLObject) => import("./Engine/Objects/Snippets/CreateCSS3.js").HTMLObject;
    CreatePlane: typeof CreatePlane;
    CustomObject: (Geometry?: import("./Engine/Constants.interface.js").GeometryTypes, Material?: import("./Engine/Constants.interface.js").MaterialTypes) => import("three").Object3D;
};
export declare const Objects: {
    Geometry: {
        BoxGeometry: (size?: import("./Engine/Objects/Geometry/BoxGeometry.js").BoxSize, segments?: import("./Engine/Objects/Geometry/BoxGeometry.js").BoxSegments) => import("./Engine/Constants.interface.js").GeometryTypes;
        CircleGeometry: (radius?: number, segments?: import("./Engine/Objects/Geometry/CircleGeometry.js").CircleSegments, theta?: import("./Engine/Objects/Geometry/CircleGeometry.js").CircleTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
        ConeGeometry: (radius?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, theta?: import("./Engine/Objects/Geometry/ConeGeometry.js").ConeTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
        CylinderGeometry: (radius?: import("./Engine/Objects/Geometry/CylinderGeometry.js").CylinderRadius, height?: number, segments?: import("./Engine/Objects/Geometry/CylinderGeometry.js").CylinderSegments, openEnded?: boolean, theta?: import("./Engine/Objects/Geometry/CylinderGeometry.js").CylinderTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
        DodecahedronGeometry: (params?: import("./Engine/Objects/Geometry/DodecahedronGeometry.js").DodecahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
        ExtrudeGeometry: (shape?: import("three").Shape, options?: import("./Engine/Objects/Geometry/ExtrudeGeometry.js").ExtrudeOptions) => import("./Engine/Constants.interface.js").GeometryTypes;
        IcosahedronGeometry: (params?: import("./Engine/Objects/Geometry/IcosahedronGeometry.js").IcosahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
        LatheGeometry: (points?: import("three").Vector2[], segments?: number, phi?: import("./Engine/Objects/Geometry/LatheGeometry.js").LathePhi) => import("./Engine/Constants.interface.js").GeometryTypes;
        OctahedronGeometry: (params?: import("./Engine/Objects/Geometry/OctahedronGeometry.js").OctahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
        PlaneGeometry: (size?: import("./Engine/Objects/Geometry/PlaneGeometry.js").PlaneSize, segments?: import("./Engine/Objects/Geometry/PlaneGeometry.js").PlaneSegments) => import("./Engine/Constants.interface.js").GeometryTypes;
        PolyhedronGeometry: (params?: import("./Engine/Objects/Geometry/PolyhedronGeometry.js").PolyhedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
        RingGeometry: (innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, theta?: import("./Engine/Objects/Geometry/RingGeometry.js").RingTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
        ShapeGeometry: (params?: import("./Engine/Objects/Geometry/ShapeGeometry.js").ShapeParams) => import("./Engine/Constants.interface.js").GeometryTypes;
        SphereGeometry: (radius?: number, segments?: import("./Engine/Objects/Geometry/SphereGeometry.js").SphereSegments, phi?: import("./Engine/Objects/Geometry/SphereGeometry.js").SpherePhi, theta?: import("./Engine/Objects/Geometry/SphereGeometry.js").SphereTheta) => import("./Engine/Constants.interface.js").GeometryTypes;
        TetrahedronGeometry: (params?: import("./Engine/Objects/Geometry/TetrahedronGeometry.js").TetrahedronParams) => import("./Engine/Constants.interface.js").GeometryTypes;
        TorusGeometry: (radius?: number, tube?: number, segments?: import("./Engine/Objects/Geometry/TorusGeometry.js").TorusSegments, arc?: number) => import("./Engine/Constants.interface.js").GeometryTypes;
        TorusKnotGeometry: (radius?: number, tube?: number, segments?: import("./Engine/Objects/Geometry/TorusKnotGeometry.js").TorusKnotSegments, p?: number, q?: number) => import("./Engine/Constants.interface.js").GeometryTypes;
        TubeGeometry: (params?: import("./Engine/Objects/Geometry/TubeGeometry.js").TubeParams) => import("./Engine/Constants.interface.js").GeometryTypes;
    };
    Materials: {
        BasicMaterial: (basicParams?: import("./Engine/Objects/Materials/BasicMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/BasicMaterial.js").MaterialOtherParams, Shaders?: import("./Engine/Objects/Materials/BasicMaterial.js").ShadersParams, admin?: import("./Engine/Objects/Materials/BasicMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
        LambertMaterial: (basicParams?: import("./Engine/Objects/Materials/LambertMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/LambertMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/LambertMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
        PhongMaterial: (basicParams?: import("./Engine/Objects/Materials/PhongMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/PhongMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/PhongMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
        PhysicalMaterial: (basicParams?: import("./Engine/Objects/Materials/PhysicalMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/PhysicalMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/PhysicalMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
        SpriteMaterial: (param: import("./Engine/Objects/Materials/SpriteMaterial.js").SpriteParam) => import("three").SpriteMaterial;
        StandardMaterial: (basicParams?: import("./Engine/Objects/Materials/StandardMaterial.js").MaterialBasicParams, CustomParams?: import("./Engine/Objects/Materials/StandardMaterial.js").MaterialOtherParams, admin?: import("./Engine/Objects/Materials/StandardMaterial.js").MaterialAdmin) => import("./Engine/Constants.interface.js").MaterialTypes;
    };
    Snippets: {
        CreateBox: (Material?: import("./Engine/Constants.interface.js").MaterialTypes, size?: import("./Engine/Objects/Snippets/CreateBox.js").BoxSize, segments?: import("./Engine/Objects/Snippets/CreateBox.js").BoxSegments) => import("three").Object3D;
        CreateCSS3: (sceneGL: import("three").Scene, sceneCSS: import("three").Scene, position?: import("./Engine/Constants.interface.js").PositionObject3D, sizes?: import("./Engine/Objects/Snippets/CreateCSS3.js").HTMLObjectSizes, params?: import("./Engine/Objects/Snippets/CreateCSS3.js").PasteHTMLObject) => import("./Engine/Objects/Snippets/CreateCSS3.js").HTMLObject;
        CreatePlane: typeof CreatePlane;
        CustomObject: (Geometry?: import("./Engine/Constants.interface.js").GeometryTypes, Material?: import("./Engine/Constants.interface.js").MaterialTypes) => import("three").Object3D;
    };
};
export default Objects;
