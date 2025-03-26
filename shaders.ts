import { CuttingCustomBox } from "./Engine/Shaders/Snippets/CuttingCustomBox.js";
import {
  CamerasCuttingHelper,
  UpdateCamCutHelper,
} from "./Engine/Shaders/Tools/CamerasCuttingHelper.js";

export const ShaderSnipped = {
  CuttingCustomBox,
};

export const ShaderTools = { CamerasCuttingHelper, UpdateCamCutHelper };

export const Shaders = {
  ...ShaderSnipped,
  ...ShaderTools,
};

export default Shaders;
