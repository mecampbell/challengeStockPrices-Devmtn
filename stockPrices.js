const best = stocks => {
    let maxDiff = 0;
    let lowSoFar
    for (let i = 0; i < stocks.length; i++) {
      if (lowSoFar === undefined || stocks[i] < lowSoFar) {
        lowSoFar = stocks[i]
      }
      let diff = stocks[i] - lowSoFar
  
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
    return maxDiff;
  }

console.log(best([7, 9, 5, 6, 3, 2]));