
//grab the button element and save it to the phraseBtn variable.  
const phraseBtn = document.getElementById("phrase-btn");
//
let phraseLength;
const getRandomNumber = (min, max) => {
    phraseLength = Math.floor(Math.random() * (max - min)) + min;
    console.log(phraseLength);
};

const phraseGenerator = () => {
    let words = phraseLength;
    console.log(words);
    //need an api call to get a random word based on the phraseLength which is assigned
    //as soon as the window is loaded. 
}
//order matters.  You cannot apply a function to an event listener without it first being
//defined. . .Added the event listener to the phraseBtn so that when its pressed it will
//call the phraseGenerator function.   
window.onload = (getRandomNumber(3, 10));
phraseBtn.addEventListener("click", phraseGenerator);
