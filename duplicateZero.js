var duplicateZeros = function (arr) {
  let zeroCount = 0;
  let length = arr.length;
  let i = 0;
  for (i = 0; i < length - zeroCount - 1; i++) {
    if (arr[i] == 0) {
      zeroCount++;
    }
  }
  console.log(i);
  let differenceNeeded = zeroCount;
  let SpaceAvailable = length - i;

  console.log("differenceNeeded " + differenceNeeded);
  console.log("SpaceAvailable" + SpaceAvailable);
  console.log(zeroCount);

  let effectiveLength = length - zeroCount;

  console.log(effectiveLength);

  for (let i = length - zeroCount - 1; i >= 0; i--) {
    console.log(i);

    if (i === length - zeroCount - 1 && arr[i] === 0) {
      if (differenceNeeded !== SpaceAvailable) {
        arr[i + zeroCount] = arr[i];
        console.log("i am into it");
        continue;
      } else if (differenceNeeded == SpaceAvailable) {
        console.log("last zero can be updated");
        arr[i + zeroCount] = arr[i];
        zeroCount--;
        arr[i + zeroCount] = arr[i];
      }
    }

    if (arr[i] != 0) {
      console.log("i am moved with zeroCount of " + zeroCount);
      arr[i + zeroCount] = arr[i];
    }

    if (arr[i] === 0) {
      console.log("i am moved iwth zerocount of " + zeroCount);
      arr[i + zeroCount] = arr[i];
      zeroCount--;
      arr[i + zeroCount] = arr[i];
    }
  }
  console.log(arr);
};

duplicateZeros([1, 5, 2, 0, 6, 8, 0, 6, 0]);
