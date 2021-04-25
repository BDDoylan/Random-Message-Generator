/*
    Author: Doylan Mihov 
    Version: 1.0.0
    Date: 4.24.2021
*/

let MessageGenerator = {
    firstWord: ["Hourly", "Daily", "Weekly", "Monthly", "Yearly"],
    
    secondWord: ["Eat", "Love", "Kill", "Touch", "Feel", "Twist", "Punch", "Pat",       
                "Kiss", "Fist", "Squeeze", "Lick", "Tickle", "Cuddle", "Hug", "Pet"],
    
    thirdWord: ["chickens", "cows", "dogs", "humans", "cats", "turtles", "babies", "hamsters", "rats", 
                "bugs", "tigers", "lions", "panthers", "possums", "raccoons", "monkeys", "zebras"],

    // Returns array of length 3 with the three randomly selected words in order of usage
    selectRandomWords(){
        let output = [];
        let firstWord = this.firstWord[Math.floor(Math.random() * this.firstWord.length)];
        let secondWord = this.secondWord[Math.floor(Math.random() * this.secondWord.length)];
        let thirdWord = this.thirdWord[Math.floor(Math.random() * this.thirdWord.length)];
        output.push(firstWord, secondWord, thirdWord);

        return output;
    },

    // Uses the three randomly selected words and puts them in the templated Message
    createMessage(){
        let randomWords = this.selectRandomWords();
        console.log(`${randomWords[0]} reminder: ${randomWords[1]} ${randomWords[2]} all day!`)
    }
}

MessageGenerator.createMessage();