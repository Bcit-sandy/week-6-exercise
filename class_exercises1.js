const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/


// if a person age is less than 13 --> "leave please"//
//if the person age is greater than 13 but less than 19 --> "you need to be grown up to 19 to drink"//
// if the person is >=19 and <= 50 --> "You can drink away!"//
//if the person is >50 and <70 --> "Be aware of your health"//
//if the  person is >= 70 --> "life is important"//
//let (paramVariable) = (age) to be a number//
//question: How old are you? //


//determine a proper parameter variable name
function CheckDrinkingAge(age){
  if (age < 13){
    console.log("Please leave.");
  } else if (age>13 && age<19){
    console.log("You need to grow up to 19 to drink.")
  }else if (age>=19 && age<= 50){
    console.log("You can drink away.");
  }else if (age>50 && age<=70){
    console.log("Be aware of your health.")
  }else if (age>=70){
    console.log("Life is important, drink less.")
  }
}

function StartApp(){


//determine a proper question to ask and the proper variable name for user input

readline.question('How old are you? ', ageNow => {
  const age=Number(ageNow);
  CheckDrinkingAge(age);
  readline.close();
});

}
StartApp();



//looks pretty good! acurrate and good naming - Cesaria