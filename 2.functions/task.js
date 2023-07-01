function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);

  return { min, max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  return arr.reduce((sum, num) => sum + num);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  
  if (countEvenElement === 0) {
    return 0;
  }
  
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; 

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]); 

    if (result > maxWorkerResult) { 
      maxWorkerResult = result; 
    }
  }

  return maxWorkerResult; 
}

