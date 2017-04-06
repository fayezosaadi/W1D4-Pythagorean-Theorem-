var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// const pythagorean = ({x, y}) => Math.sqrt((x*x) + (y*y));

var result = input.map(pythagorean);
// console.log('result', result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


function pythagorean ({x, y}) {
  // console.log(x)
  // console.log(y)

  return Math.sqrt((x*x) + (y*y));
  // console.log(z);
  // return z; }
}


// function pythagorean (obj) {
//   const x = obj.x;
//   const y = obj.y;
//   const z = Math.sqrt((x*x) + (y*y));
//   // console.log(x)
//   // console.log(y)

//   return z;
//   // console.log(z);
//   // return z; }
// }


  // Object.key(obj).forEach(function(e){
  //   var z = Math.sqrt(e.x*e.x+e.y+e.y);
  //   console.log(z);
  //   return z;
  // });
  // var z = Math.sqrt(x*x + y*y);
  // return z,
// }




