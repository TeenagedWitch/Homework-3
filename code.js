// Task 1.
Array.prototype.myFilter = function (callBack, thisArg) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const context = thisArg || globalThis;
    console.log(context);

    if (callBack.call(context, this[i])) {
      console.log(this, this[i]);
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayTest2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arrayTest.myFilter((item) => item > 4, arrayTest));
console.log(arrayTest2.myFilter((item) => item % 2 == 0));

// Task 2.

const createDebounceFunction = (callback, ms = 300) => {
  let timer;

  return (customTimeout, ...args) => {
    clearTimeout(timer);
    timer = setTimeout(
      () => {
        callback.apply(this, args);
      },
      customTimeout !== undefined ? customTimeout : ms
    );
  };
};

const log100 = () => {
  console.log("100");
};
const myFunction = createDebounceFunction(() => log100());
myFunction(500);
