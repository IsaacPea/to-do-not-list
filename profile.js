// import functions and grab DOM elements
// const name = document.getElementById('name');
// const pass = document.getElementById('pass');
// const proButton = document.getElementById('pro-button');
const formData = document.getElementById('form-data');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  //event listener

formData.addEventListener('submit', function(event) {
    event.preventDefault();
    
  //get form data from index

    const newData = new FormData(formData);
  
    //return template object with form data
    makeUser(newData);
    const user = makeUser(newData);
  //set data to local storage

    saveUser(user);

    //getUser from localStorage
    const returnUser = getUser();
    console.log(returnUser);
    //save getUser to a variable
    //if returnUser.name && password === newData.name && newData.password

    window.location.replace(`./input-page.html?name=${returnUser.name}`);
});



function makeUser(formData) {

    return {
        name: formData.get('name'),
        password: formData.get('pass'),
        todonot: [], 
    };
}

function saveUser(makeUser) {
    const json = JSON.stringify(makeUser);
    localStorage.setItem('USER', json);
}

function getUser() {
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

