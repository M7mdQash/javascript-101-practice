//ctrl + ` for terminal 
//ctrl + 1 for editor 
console.log("hello javascript");
let int = 4, number = 2;
console.log(int,number);
//lemme write a comment 
/*
then lemme make a mult line
and then comment away a command
using highlite than ctrl + / */

// console.log("hiya");

/* 
================== operators and data types ==================
*/
/**
 * list of operators:-
 *  + - * / arithmatic operators
 * % remainder(mod) operator
 * == equal to operator
 * != not equal to operator 
 * boolean returning operators:-
 * >, <, =!, ==, =>, =<
 * increment: ++
 * decrement: --
 * 
 */
let a = 55;
a++;
console.log(a)
console.log(typeof a);
/*
use typeof to output the type of const/var
 */ 
let f;
console.log(typeof f); //returns undefined type
//====================cool string stuff here==============================
let bar = '=========='
console.log(`${bar} ${bar} string stuff down here${bar}${bar}`)
/**template literals
 * theese can let you do cool shit with them 
 * insert code into strings with ${} 
 * in it can be either varibles/constants
 * or arguments
 */
let backtec = `ful
of 
BS From 
Dutch`; //template literal
console.log(backtec);

//================== number and INT here ==================
//Nan will be outputted if printing a number val while its not a number(NaN )


//==================== Arrays ====================
console.log("=============== arrays ===============")
/**
 * 
 */
let tempArray = [1,2,3,4,6,5];
console.log(tempArray);
console.log(typeof tempArray);
//==================== i/o =========================
console.log("=============== i/o ===============")

// we will need this weird function to call
// const readline = require('readline').createInterface({ 
//     input: process.stdin,
//     output: process.stdout
//   });
  //then we use previous function to 
  // readline.question('Who are you?', name => {
  //   console.log(`Hey there ${name}!`);
  //   readline.close();
  // });
  


  console.log('==================== if statments ====================')
  //==================== if statements ====================

  let machineVending = ['water', 'soda', 'juice', 'candy'];
  let vendingChoice = 8;
  switch(vendingChoice){
    case 0:
      console.log(machineVending[0],' 1 riyaal');
      break;
    case 1:
      console.log( machineVending[1], ' 4 riyal');
      break;
    case 2:
      console.log(machineVending[2],' 2 riyaal');
      break;
    case 3:
      console.log(machineVending[3],' 5 riyaals');
      break;
    default:
      console.log('please choose an item to dispense')
    
  }
  let b = 1
if(!true){
  b += 1
} else { 
  b = 0
}
console.log(b)

