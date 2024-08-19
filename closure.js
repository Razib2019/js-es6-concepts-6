const outerFunction = () => {
  let count = 0;
  const inner = () => {
    count++;
    console.log("Count: ", count);
  };
  return inner;
};

const x1 = outerFunction();
const x2 = outerFunction();

x1();
x1();
x1();
x2();
x2();
x1();
x2();
x1();
