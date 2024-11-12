function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const whatToDoToday = {

    mood: ['Happy', 'Tired', 'Sad', 'Indifferent', 'Bored'],
    activites: ['Take a Rest Day', 'Study for 3 hours', 'Start/Finish Chores', 'Play Games','Watch a movie/TV show'],
    food: ['Chipotle', 'Wing Stop', 'Home food', 'Panda Express', 'K-town Food', 'Sushi', 'Tacos']
}

let choiceOfTheDay = []; 

for (let options of whatToDoToday) { 
    let theChoice = generateRandomNumber(options.length)

    switch(options) {
        case 'mood':
            choiceOfTheDay.push(`Your mood today is ${mood[options][theChoice]}.`)
        case 'activites':
            choiceOfTheDay.push(`Today you should ${activites[options][theChoice]}`)
        case 'food':
            choiceOfTheDay.push(`Here is what I recommend you to eat today ${food[options][theChoice]}`)
        default: 
            choiceOfTheDay.push('You did not enter anything in you silly bean') 
        
    }
}


 
   

    
