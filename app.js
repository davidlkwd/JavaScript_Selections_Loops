console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//While Loop:
/*let num = 1;
while (num <= 100){
  if (num % 2 == 1){
  console.log(num);
  }
num++;
}
*/
//Do While Loop:
/*let num = 1;

do {
  if (num % 2 == 1){
    console.log(num);
  }
  num++
} while (num <= 100);
*/

// For Loop:

for (let num = 1; num <= 100; num++){
  if (num % 2 == 1){
    console.log(num);
  }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let number = 1; number <= 100; number++){

if (number % 3 == 0 && number % 5 == 0){
  console.log("FizzBuzz");
} else if (number % 3 == 0){
  console.log("Fizz");
} else if (number % 5 == 0){
  console.log("Buzz");
} else {
console.log(number);  
}  
} 
  