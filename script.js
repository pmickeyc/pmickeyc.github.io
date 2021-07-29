/*
Author:Padraig McCauley 20123744
Date: 29-07-2021
Random number generator & arrays*/

var randomNum;
var randomArray = [];
var userNum;
var counter;

//function for generating the random array of 5 indices of number from 1-10
function randomGen(){
    for(i=0;i<5;i++){
        randomArray[i] = randomNum = Math.floor(Math.random() * 10 + 1);
    }
    return randomArray;
}

//the checker function that compares the users input to the generated array 
function numberChecker(){
    //the counter is set to 0 every time the function is called & a new array is generated using the randomGen function
    counter=0;
    randomGen();

    //the users submitted number is placed into a variable
    userNum = document.getElementById("userInput").value;

    //a loop runs for the length of the array 
    for(i=0;i<randomArray.length;i++){
       //within the loop the users number is compared to each index of the array - if they match then the counter number is added to 
        if(userNum==randomArray[i]){
            counter++;
        }
    }
    //the generated array & the results of the comparison (the counter number) are returned to the user via text within the html
    //an if statement is used to fix the grammar of the message depending on if it is one time or many times
    if(counter==1){
        document.getElementById("returnDiv").innerHTML=("The array was: <br><br>" + randomArray.toString() + "<br><br>Your chosen number appears in the array <span>" + counter + "</span> time.");
    }
    else{
        document.getElementById("returnDiv").innerHTML=("The array was: <br><br>" + randomArray.toString() + "<br><br>Your chosen number appears in the array <span>" + counter + "</span> times.");
    }
}