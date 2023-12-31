module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    // Feature 1: Fortunes 
    // Create a new function in server/controller.js called getFortune that works exactly like getCompliment, 
    // but gives back a random fortune instead of a random compliment.
    
    getFortune: (req, res) => {
        const fortunes = [
            "Patience is a virtue.",
            "Courtesy is contagious.",
            "Believe it can be done!",
            "No time like the present!",
            "A faithful friend is a strong defense.", 
            ];
        // Choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

     // Feature 2-4: Additional Features 
    // Add 3 additional features to the website, just like the previous one. 
    // 1. A button or element on the site to be clicked/submitted 
    // 2. A request sent via axios 
    // 3. A route on your server that sends a response

    getLuckyNumber: (req, res) => {
        const numbers = ["2", "7", "11", "14", "94"];
        // Choose random number
        let randomIndex3 = Math.floor(Math.random() * numbers.length);
        let randomNumber = numbers[randomIndex3];

        res.status(200).send(randomNumber);
    },  

    getBabyName: (req, res) => {
        const names = ["Adam", "Alex", "Amy", "Amanda", "Aden"];
        // Choose random name
        let randomIndex4 = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex4];

        res.status(200).send(randomName);
    },
    
    getInstructor: (req, res) => {
        const instructors = ["Tom", "Dick", "Harry", "Mary", "Jane"];
        // Choose random instructor
        let randomIndex5 = Math.floor(Math.random() * instructors.length);
        let randomInstructor = instructors[randomIndex5];

        res.status(200).send(randomInstructor);
    },

};