function show(name, age) {
  console.log("My name is:", name, "And Age is:", age);
}

function fun1(name, age, callback) {
  console.log("Hello from first function");
  setTimeout(() => {
    callback(name, age);
  }, 2000);
}

fun1("Mehedy", 26, show);
