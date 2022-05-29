let wordList = [];

//grab the button element and save it to the phraseBtn variable.  
const phraseBtn = document.getElementById("phrase-btn");
//
let phraseLength;
let randomIndex;

// let randomPhrase = [];

const getRandomNumber = (min, max) => {
    phraseLength = Math.floor(Math.random() * (max - min)) + min;
};

const getRandomIndex = (min, max) => {
        randomIndex = Math.floor(Math.random() * (max - min)) + min;
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
            }  
        })
}

const getRandomPhrase = () => {
    //setting the randomPhrase Array to empty again so that words don't just keep piling up. 
    let randomPhrase = [];
    for (var i = 0; i < phraseLength; i++) {
        getRandomIndex(0, 395);
        randomPhrase.push(wordList[randomIndex] + " ");
    }
    //passing the updated randomPhrase as the argument for the displayPhrase function
    displayPhrase(randomPhrase);
}

const displayPhrase = (phrase) => {
    //taking the "randomPhrase" argument from the getRandomPhrase function renaming it 'phrase'
    console.log("phrase: " + phrase);
}

const phraseGenerator = () => {
    getRandomNumber(2, 17);
    getRandomPhrase();
}
//order matters.  You cannot apply a function to an event listener without it first being
//defined. . .Added the event listener to the phraseBtn so that when its pressed it will
//call the phraseGenerator function.   
phraseBtn.addEventListener("click", phraseGenerator);
getWords();
