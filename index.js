//add event listener to the button id. 

//button event listener
const phraseBtn = document.getElementById("phrase-btn");
//

const phraseGenerator = () => {
    console.log("you clicked the button");
}
//order matters.  You cannot apply a function to an event listener without it first being
//defined. 
phraseBtn.addEventListener("click", phraseGenerator);