const numArray = [];
let numArraysum = 0;

//keep asking the value till the sum is lower than 50
while (numArraysum < 50 ) {
    //the prompt for inserting the value
    let numberInput = parseInt(prompt("Please enter a number!"));

    //checking if the value is a number
    if(!isNaN(numberInput)) {
        //add the value to the sum 
        numArraysum += numberInput;
        //add the value to the array
        numArray.push(numberInput);
    }

    //scrivi il valore della somma in console
    console.log(`la somma è ${numArraysum}`);
}