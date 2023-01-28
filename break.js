for (var i = 1; i <= 20; i++) {
  console.log(i);
  if (i > 10) {
    break;
  }
}

var roastGiven = 0;
while (roastGiven < 10) {
  console.log("Give me a roast, please!!");
  roastGiven++;
  if (roastGiven > 4) {
    break;
  }
}

var items = ["bottle", "mouse", "sunglass", "pen"];
for (var i = 0; i < items.length; i++) {
  if (items[i] == "pen") {
    break;
  }
  console.log(items[i]);
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}
