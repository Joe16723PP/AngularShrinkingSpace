
export function checkIsPrimeNumber(n: number) {
  let isPrime = true;
  if (n > 1) {
    // check is prime or not, range 2 to num -1
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false
  }
  return isPrime
}

export function checkIsFibonacci(n: number) {
  // reference `A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square`
  return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
}

function isPerfectSquare(x: number) {
  let s = Math.sqrt(x)
  return (s * s == x);
}
