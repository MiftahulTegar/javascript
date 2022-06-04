const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  var x = [];
  var y = [];
  for(var i = 0; i < number.length; i++) {
    if(number[i] %2 != 0) {
      x.push(number[i])
    } else {
      y.push(number[i])
    }
  }
  console.log(x.sort());
  return x,y;
}

console.log(result(number));