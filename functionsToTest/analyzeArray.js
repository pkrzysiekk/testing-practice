export function analyzeArray(array) {
  if (!array) return null;
  let average = getAverage(array);
  let min = getMin(array);
  let max = getMax(array);
  let length = array.length;
  const obj = {
    average,
    min,
    max,
    length,
  };
  return obj;
}

function getAverage(array) {
  return (
    array.reduce((prev, current) => {
      return prev + current;
    }, 0) / array.length || 0
  );
}
function getMin(array) {
  let sorted = array.sort((a, b) => a - b);
  return sorted[0] || -1;
}
function getMax(array) {
  let sorted = array.sort((a, b) => b - a);
  return sorted[0] || -1;
}
