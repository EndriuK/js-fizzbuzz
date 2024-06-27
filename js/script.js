//inizializzo un contatore

const chessboard = document.querySelector(".chessboard");

for (let i = 1; i <= 100; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  let text = document.createTextNode(i);
  square.append(text);

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
  console.log(i);

  chessboard.append(square);
}
