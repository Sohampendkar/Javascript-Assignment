function Func() {
    let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    let anotherArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 != 0) {
        anotherArray.push(array[i]);
      }
    }
    console.log(anotherArray);
  }
  Func();
  