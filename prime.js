let a = 7;
let isPrime = true;

for (let i = 2; i < a; i++) {
  if (a % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("It is Prime");
} else {
  console.log("It is Not Prime");
}