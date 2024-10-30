function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    null;
  }
}

console.log(minimal(15, 20));

console.log(minimal(20, 10));

function findIndex(array, number) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === number) {
      return i;
    }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 2));
