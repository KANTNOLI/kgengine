/* eslint-disable @typescript-eslint/no-explicit-any */
export const AnimationCustom = (
  callbackEvenly: (progress: number) => any,
  callbackClosed: (state: boolean) => any = () => "",
  time: number = 1,
  speed: number = 1
) => {
  const cycle = 16.67 / speed;

  let progress = 0;
  const step = 0.016 / time;

  const move = setInterval(() => {
    progress += step;

    callbackEvenly(progress);
    if (progress >= 1) {
      callbackClosed(true);

      clearInterval(move);
      return true;
    }
  }, cycle);
};

export default AnimationCustom;
