function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const orta = Math.floor(arr.length / 2);
  const sol = arr.slice(0, orta);
  const sag = arr.slice(orta);
  return merge(mergeSort(sol), mergeSort(sag));
}

function merge(sol, sag) {
  const result = [];
  while (sol.length && sag.length) {
    if (sol[0] < sag[0]) {
      // pop sondan shift baştan
      result.push(sol.shift());
    } else {
      result.push(sag.shift());
    }
  }
  return result.concat(sol, sag);
}

const array = [16, 21, 11, 8, 12, 22];

console.log(mergeSort(array));
