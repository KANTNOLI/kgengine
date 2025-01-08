export const LoadingProcess = (state = 0) => {
  //   const facts = ["fact1", "fact2", "fact3", "fact4"];
  let loadBox = document.querySelector("#Loading");

  if (state === 1) {
    loadBox.style.display = "none";
  }
};
