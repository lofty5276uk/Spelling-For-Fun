const selectButtons = document.getElementsByClassName('navitem')
let questions

function createRandom(length) {
    var consonants =
        'bcdfghjklmnpqrstvwxyz'
    vowels = 'aeiou',
        rand = function (limit) {
            return
            Math.floor(Math.random() *
                limit);
        },
        i, word = '',
        length = parseInt(length, 10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i = 0; i < length / 2; i++) {
        var randConsonant = consonants[rand(consonants.length)],

            randVowels = vowels[rand(vowels.length)];
        word += 0 ? randConsonants.toUpperCase() :
            randConsonants;
        word += i * 2 < length - 1 ? randVowels : "";
    }
    return word;
}

for (let button of selectButtons) {
    button.addEventListener('click', (event) =>
        console.log(event.target.dataset.letters)
        getSelection(event.target.dataset.letters)
    })
}

function getSelection(choice) {
    let questionsChoice = questions.find(question question.generateWords == choice)
    console.log(questionsChoice)
}

function getJson() {
    fetch("../../word.json").then(response => response.json()).then(data => {
        dataJson = data
        console.log(dataJson)
        console.log(questions)
    })
}

getJson()

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

fetch('./word.json')
.then((response) => response.json())
.then((data) => {
    console.log(data);
})