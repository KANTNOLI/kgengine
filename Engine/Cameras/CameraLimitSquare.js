export const CameraLimitSquare = (
  camera,
  position = 10
) => {
  camera.position.x = Math.max(
    -position,
    Math.min(position, camera.position.x)
  );
  camera.position.y = Math.max(
    -position,
    Math.min(position, camera.position.y)
  );
  camera.position.z = Math.max(
    -position,
    Math.min(position, camera.position.z)
  );
  
  return camera;
};
