const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// Feature 1: Fortunes
// add an event listener to your button that makes an axios request to the route /api/fortune. 
// Use alert() to show the result.

const fortuneBtn = document.querySelector("#fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)

// Feature 2-4: Additional Features 
    // Add 3 additional features to the website, just like the previous one. 
    // 1. A button or element on the site to be clicked/submitted 
    // 2. A request sent via axios 
    // 3. A route on your server that sends a response


// number
const numberBtn = document.querySelector("#numberButton")

const getNumber = () => {
    axios.get("http://localhost:4000/api/number/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

numberBtn.addEventListener('click', getNumber)

//name
const nameBtn = document.querySelector("#nameButton")

const getName = () => {
    axios.get("http://localhost:4000/api/name/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};
    
nameBtn.addEventListener('click', getName)

// instructor
const instructorBtn = document.querySelector("#instructorButton")

const getInstructor = () => {
    axios.get("http://localhost:4000/api/instructor/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

instructorBtn.addEventListener('click', getInstructor)
