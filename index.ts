import * as Cameras from "./exports/cameras.js";
import * as Engine from "./exports/engine.js";
import * as Lighting from "./exports/lighting.js";
import * as Objects from "./exports/objects.js";
import * as OtherScripts from "./exports/otherScripts.js";
import * as Actions from "./exports/playerActions.js";
import * as Shaders from "./exports/shaders.js";

export const KGEngine = {
  Cameras,
  Engine,
  Lighting,
  Objects,
  OtherScripts,
  Actions,
  Shaders,
};

export * as Cameras from "./exports/cameras.js";
export * as Engine from "./exports/engine.js";
export * as Lighting from "./exports/lighting.js";
export * as Objects from "./exports/objects.js";
export * as OtherScripts from "./exports/otherScripts.js";
export * as Actions from "./exports/playerActions.js";
export * as Shaders from "./exports/shaders.js";

export default {
  ...Cameras,
  ...Engine,
  ...Lighting,
  ...Objects,
  ...OtherScripts,
  ...Actions,
  ...Shaders,
};
