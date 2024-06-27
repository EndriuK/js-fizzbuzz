//inizializzo un contatore

for (let i = 1; i <= 100; i++) {
  //controllo che i sia multiplo di 3 o 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    //controllo che i sia multiplo di 3
  } else if (i % 3 == 0) {
    console.log("Fizz");
    //controllo che i sia multiplo di 5
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
  console.log(i);
}
