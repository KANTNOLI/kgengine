const CreateAnimation = (
  callback: (progress: number) => any,
  time: number = 1
) => {
  const cycle = 8.34 * time;

  let progress = 0;
  let step = 0.016;

  const move = setInterval(() => {
    progress += step;

    callback(progress);
    if (progress >= 1) {
      clearInterval(move);
      return true;
    }
  }, cycle);
};

export default CreateAnimation;
