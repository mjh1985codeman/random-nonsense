let wordList = [];

//grab the button element and save it to the phraseBtn variable.  
const phraseBtn = document.getElementById("phrase-btn");
//
let phraseLength;
const getRandomNumber = (min, max) => {
    phraseLength = Math.floor(Math.random() * (max - min)) + min;
    console.log(phraseLength);
};

const getWords = async () =>
{
        const res = await fetch('./db/words.json', {
            method: "GET",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
        })
        const words = res.json();
        words.then(function(result) {
            const wordArray = Object.values(result)[0];
            //for loop to push each word into the wordList array.
            for (var i = 0; i < wordArray.length; i++) {
            
                wordList.push(wordArray[i]);
                console.log(wordList);
            }

        })

}                                                                                                                                                 

const phraseGenerator = () => {
console.log("getWords: " + getWords());
    //need an api call to get a random word based on the phraseLength which is assigned
    //as soon as the window is loaded. 
}
//order matters.  You cannot apply a function to an event listener without it first being
//defined. . .Added the event listener to the phraseBtn so that when its pressed it will
//call the phraseGenerator function.   
window.onload = (getRandomNumber(3, 10));
phraseBtn.addEventListener("click", phraseGenerator);
