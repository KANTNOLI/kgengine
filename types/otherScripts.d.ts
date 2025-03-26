import { CreateModel } from "./Engine/OtherScripts/CreateModel.js";
import { CreateScene } from "./Engine/OtherScripts/CreateScene.js";
import { CreateText } from "./Engine/OtherScripts/CreateText.js";
export declare const OtherScripts: {
    CreateModel: typeof CreateModel;
    CreateScene: typeof CreateScene;
    CreateSprite: (param?: import("./Engine/OtherScripts/CreateSprite.js").SpriteParam, position?: import("./Engine/Constants.interface.js").PositionObject3D, scale?: import("./Engine/OtherScripts/CreateSprite.js").Scale) => import("three").Sprite<import("three").Object3DEventMap>;
    CreateText: typeof CreateText;
    LoadingTextures: (path: string) => import("three").Texture;
    AnimationCustom: (callback: (progress: number) => any, time?: number) => void;
    AnimationMove: (object: import("three").Object3D, posStart?: import("./Engine/Constants.interface.js").PositionObject3D, posEnd?: import("./Engine/Constants.interface.js").PositionObject3D, callback?: (progress: number) => any, time?: number) => void;
};
export default OtherScripts;
