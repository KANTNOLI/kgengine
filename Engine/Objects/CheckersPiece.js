import * as THREE from "three";

export const CheckersPiece = (
  scene,
  gameArea,
  object = { type: "checkerPiece", side: "other", queen: false, link: null },
  position = { x: 0, z: 0 }
) => {
  // для удобство разбил сразу на 2
  const STEP = 0.235; // констант значение, используется только в данной ситуации для данной доски, т.к. так же как и значеня позиций самой доскиF
  const pieceGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16);
  let pieceMaterial = new THREE.MeshStandardMaterial({
    color: 0x808000,
  });
  const piece = new THREE.Mesh(pieceGeometry, pieceMaterial);
  piece.castShadow = true; //тени
  piece.receiveShadow = true; // тени
  piece.position.x = STEP * (position.x - 3); // считаем позицию
  piece.position.z = STEP * (position.z - 3); // считаем позицию
  piece.metaData = {
    object,
    position,
  }; // для удобства, чтоюы потом не искать и не кушать произв

  switch (object.side) {
    case "black":
      piece.material = new THREE.MeshStandardMaterial({
        color: 0x303030,
      });
      gameArea[position.z][position.x].object.link = piece; // сохраняем ссылку, для удобной работы
      break;
    case "white":
      piece.material = new THREE.MeshStandardMaterial({
        color: 0xe0e0e0,
      });
      gameArea[position.z][position.x].object.link = piece; // сохраняем ссылку, для удобной работы
      break;
    default:
      if (object.type === "killer") {
        piece.material = new THREE.MeshStandardMaterial({
          color: 0xff0000,
          emissive: 0xff0000,
          emissiveIntensity: 1,
          opacity: 0.3,
          transparent: true,
        });

        piece.castShadow = false;
        piece.receiveShadow = false;

        gameArea[position.z][position.x].object.link = piece; // сохраняем ссылку, для удобной работы
      } else {
        piece.material = new THREE.MeshStandardMaterial({
          color: 0x4cc926,
          emissive: 0x4cc926,
          emissiveIntensity: 1,
          opacity: 0.3,
          transparent: true,
        });

        piece.castShadow = false;
        piece.receiveShadow = false;
      }
      break;
  }

  scene.add(piece);

  return piece;
};
