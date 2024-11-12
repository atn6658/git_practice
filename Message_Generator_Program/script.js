function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const choices = ['Take a Rest Day', 'Study for 3 hours', 'Start/Finish Chores', 'Play Games'];

let optionIdx = generateRandomNumber(choices.length);
let choiceOfTheDay = choices[optionIdx];
console.log(choiceOfTheDay);
 
   

    
