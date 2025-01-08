import * as THREE from "three";

export const ShadowCfg = (
  scene,
  size = {
    width: 10,
    heigth: 10,
  }
) => {
  const shadowGeometry = new THREE.PlaneGeometry(size.width, size.heigth); // По сути тень это типо пласт
  const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.5 }); // Интенс тени
  const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial); //Линкуем
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.2;

  scene.add(shadow);
};
