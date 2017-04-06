var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];



  // const pythagorean = ({x, y}) => Math.sqrt((x*x) + (y*y));       This is my function in a sigle line of code

  // function pythagorean ({x, y}) {                                 This is my function in diff version
  //   return Math.sqrt((x*x) + (y*y));
  // }


  var result = input.map(pythagorean);


  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);




  function pythagorean (obj) {
    const x = obj.x;
    const y = obj.y;
    const z = Math.sqrt((x*x) + (y*y));
    return z;
  }







