import * as THREE from "three";

const LoadingTextures = (path: string): THREE.Texture => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(path);

  // add interval if undefined

  return texture;
};

export default LoadingTextures;
