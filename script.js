// const add = (x,y) => {
//     return x+y;
// }

// [2, 3, 6, 78, 99, 104, 23].reduce((max, currNum)=>{
//     return Math.max(max, currNum);
// });

// [1,2,3,4,5].forEach(n=>{
//     console.log(n*10);
// })

// [1,2,3,4,5,6 ].filter((num) => num % 2 ===0);

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

(arr) => {
    (arr.map(val => { return val*2}))
}


function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

(numbers) => {
    var squares = numbers.map((num)=>{return num**2});
    var evens = squares.filter((square)=>{return square % 2 === 0})
    return evens;
}

