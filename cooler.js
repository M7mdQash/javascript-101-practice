//======================== functions ========================
let machineVending = [['candy bar', '5 riyals'],['juice', '150 pesos'],['snickers', '-15 denars'],['chips','1 british pound']]
function vendingPrices (number){
    switch(number){
        case 0:
          console.log(machineVending[0]);
          break;
        case 1:
          console.log( machineVending[1]);
          break;
        case 2:
          console.log(machineVending[2]);
          break;
        case 3:
          console.log(machineVending[3]);
          break;
        default:
          console.log('please choose an item to dispense');
        
      }
}

let num = 1;
vendingPrices(num-1);