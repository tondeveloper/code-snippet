const nestedArr = [1, 2, [3, 4], [[5], [6, [7,8]]]];
nestedArr.flat(1); // [1, 2, 3, 4, [5, [6, [7,8]]];
nestedArr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8];
