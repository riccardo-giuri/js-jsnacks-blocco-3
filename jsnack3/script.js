let numberInput;
const elementContainer = document.getElementById("array_container");

//prompt that get hte input with check on if its a number
do{
    numberInput = parseInt(prompt("Please enter a number!"));
}
while (isNaN(numberInput)) 

//create N array
for(let i = 0; i < numberInput; i++) {
    const numArray = [];

    //for every array populate with 10 numbers random from 1-100
    for(let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * (101) + 1);
        numArray.push(randomNum);
    }

    //create the div
    const arrayElement = document.createElement("div");
    //add the class for centering the text
    arrayElement.classList.add("text-center");
    //add the content to the inner html
    arrayElement.innerHTML += numArray;
    //append the class to the div container
    elementContainer.append(arrayElement);
}