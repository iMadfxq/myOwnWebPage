const documentBody = document.querySelector("body");
const showButton = document.querySelector("#samples--display");
const regularSamples = document.querySelector(".samples");
const hiddenSamples = document.querySelector("#samples--hidden");
const nameDOM = document.querySelector('.main__about--info span')

documentBody.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target === showButton && hiddenSamples.style.display == "none") {
    regularSamples.style.display = "none";
    hiddenSamples.style.display = "flex";
    document.querySelector('#projectsScrollIntoView').scrollIntoView(true, { behavior: "smooth" });
    showButton.textContent = "- Show less";
  } else if (e.target === showButton && hiddenSamples.style.display == "flex") {
    regularSamples.style.display = "flex";
    setTimeout(() => {
      hiddenSamples.style.display = "none";
    }, 550); //to avoid it showing the bottom of the webpage before scrollingIntoView
    document.querySelector('#projectsScrollIntoView').scrollIntoView(true, { behavior: "smooth" });
    showButton.textContent = "+ Show more";
  }
});

setInterval(() => {
  if(nameDOM.textContent === "iMadfxq") {
    nameDOM.textContent = "Oscar Gomez"
  } else if(nameDOM.textContent === "Oscar Gomez") {
    nameDOM.textContent = "iMadfxq"
  }
}, 1200)