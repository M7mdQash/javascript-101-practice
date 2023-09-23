/**         project to make a library on the terminal
 *          author: Qash
 */




  const bookLibrary = [// 0: id, 1: book name, 2: book author, 3: book price, 4:quantity in storage
  [12,'start with why','simon clark',80,13]
  ,[15,'but how do it know','j. clark scott',59.0,22]
  ,[123,'Clean code','robert cecil martin',50.0,5]
  ,[4,'zero to one','Peter griffin',45.0,12]
  ,[54,'you dont know JS','kyle Simpson',39.9,9]];

function inquirePrice(number){
if (number >= 0 && number <= 4)
  return(bookLibrary[number][3]);
  else console.log('error please input a supported digit');
}

function idQuery(num){
  if (num >= 0 && num <= 4)
  return(bookLibrary[num][0]);
  else console.log('error please input a supported digit');
}

function nameQuery(num){
  if (num >= 0 && num <= 4){
  return bookLibrary[num][2];
  }  else console.log('error please input a supported digit');  
}

function bookNameQuery(num){
  if (num >= 0 && num <= 4)
  return bookLibrary[num][1];
  else console.log("please reinput a valid digit")
}

function bookQuantityQuery(num){
  if (num >= 0 && num <= 4){
    return bookLibrary[num][4];
  }else console.log("please input valid digits lil nigga")
}

function FullQuery(num){
  if (num >= 0 && num <= 4){
    console.log("this will now run an inqury for your book:-"+"\n inquire name: "+nameQuery(num)+"\n name of the book: "
    + bookNameQuery(num)+"\n price of the book: "+ inquirePrice(num)
    +"\n quantity query: "+ bookQuantityQuery(num));
      }else console.log("please input valid digits lil nigga")
}
let num = 1;

//must use two brackets to aqquire a specific element
//in order to return specific array elements from a function we must use the return function and not the print func
// console.log("this will now run an inqury for many thingamajingas:-"+"\n inquire name: "+nameQuery(2)+"\n name of the book: "
// + bookNameQuery(2)+"\n price of the book: "+ inquirePrice(2)
// +"\n quantity query: "+ bookQuantityQuery(2));
//testing all other queries
FullQuery(num);
