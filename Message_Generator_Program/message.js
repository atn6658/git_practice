function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const whatToDoToday = {
    mood: ['Happy', 'Tired', 'Sad', 'Indifferent', 'Bored'],
    activities: ['Take a Rest Day', 'Study for 3 hours', 'Start/Finish Chores', 'Play Games', 'Watch a movie/TV show'],
    food: ['Chipotle', 'Wing Stop', 'Home food', 'Panda Express', 'K-town Food', 'Sushi', 'Tacos']
};

let choiceOfTheDay = [];


for (let option in whatToDoToday) {

    let theChoice = generateRandomNumber(whatToDoToday[option].length);

  
    switch(option) {
        case 'mood':
            choiceOfTheDay.push(`Your mood today is ${whatToDoToday[option][theChoice]}.`);
            break;
        case 'activities':
            choiceOfTheDay.push(`Today you should ${whatToDoToday[option][theChoice]}.`);
            break;
        case 'food':
            choiceOfTheDay.push(`Here is what I recommend you eat today: ${whatToDoToday[option][theChoice]}.`);
            break;
        default:
            choiceOfTheDay.push('You did not enter anything, you silly bean!');
            break;
    }
}

function formatChoice(choices) {
    const formatted = choices.join('\n');
    console.log(formatted);
}

formatChoice(choiceOfTheDay);



 
   

    
