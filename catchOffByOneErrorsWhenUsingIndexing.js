const alphabet = "abcdefghijklmnopqrstuvwxyz";
const len = alphabet.length;
// the first for loop will print undefine after print z
// out of bound error
// this loop condition should be
// for (let i = 0; i < len; i++) 
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}

// the second for loop will start printing b instead of a (print b-z)
// this loop should start from index 0
// for (let j = 0; j < len; j++)
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}

// this for loop is correct (print a-z)
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

// this for loop will print z-a
// start from the end of the loop to the beginning of the loop
const lastIndex = alphabet.length -1;
for(let i = lastIndex; i >= 0 ; i--) {
    console.log(alphabet[i]);
}
