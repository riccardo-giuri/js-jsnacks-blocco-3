const numArray = [];
const arrayLength = 20;
const maxNumValue = 25;
const redDiv = document.getElementById("red_div");
const greenDiv = document.getElementById("green_div");

//cycle that fill the array randomically
for(let i = 0; i < arrayLength; i++) {
    //pick a random number between from 1 to max value
    const randomNum = Math.floor(Math.random() * (maxNumValue + 1) + 1);
    //push the value to the array
    numArray.push(randomNum);

    //check if the number is even or odd than add to the right div
    if(randomNum % 2 === 0) {
        greenDiv.innerHTML += `${randomNum.toString()} `;
    } 
    else {
        redDiv.innerHTML += `${randomNum.toString()} `;
    }
}
