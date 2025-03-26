import * as Cameras from "./imports/cameras.js";
import * as Engine from "./imports/engine.js";
import * as Lighting from "./imports/lighting.js";
import * as Objects from "./imports/objects.js";
import * as OtherScripts from "./imports/otherScripts.js";
import * as Actions from "./imports/playerActions.js";
import * as Shaders from "./imports/shaders.js";

export const KGEngine = {
  Cameras,
  Engine,
  Lighting,
  Objects,
  OtherScripts,
  Actions,
  Shaders,
};

export * as Cameras from "./imports/cameras.js";
export * as Engine from "./imports/engine.js";
export * as Lighting from "./imports/lighting.js";
export * as Objects from "./imports/objects.js";
export * as OtherScripts from "./imports/otherScripts.js";
export * as Actions from "./imports/playerActions.js";
export * as Shaders from "./imports/shaders.js";

export default {
  Cameras: require("./imports/cameras").default,
  Engine: require("./imports/engine").default,
  Lighting: require("./imports/lighting").default,
  Objects: require("./imports/objects").default,
  OtherScripts: require("./imports/otherScripts").default,
  Actions: require("./imports/playerActions").default,
  Shaders: require("./imports/shaders").default,
};
