// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fibonacci(n) {
  if (n == 1) {
    return [0];
  }

  if (n == 2) {
    return [0, 1];
  }

  let results = [0, 1];

  for (let i = 2; i < n; i++) {
    let firstNum = results[i - 1];
    let secondNum = results[i - 2];
    results.push(firstNum + secondNum);
  }

  return results;
}
