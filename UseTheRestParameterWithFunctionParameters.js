// Check out this code:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.


const sum1 = (x, y, z) => {
//   x = 1, y = 2, z =3
  const args = [x, y, z];
//   args = [1, 2, 3]
  return args.reduce((a, b) => a + b, 0);
}

const sum2 = (...nums) => {
    // nums = [1,2,3,4]
    const args = nums;
    return args.reduce((a, b) => a + b, 0);
  }
  
  sum1(1,2,3)
  sum2(1,2,3,4)