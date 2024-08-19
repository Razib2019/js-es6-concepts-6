class Animal {
  name;
  color;
  constructor(petName, petColor) {
    this.name = petName;
    this.color = petColor;
  }
  showInfo() {
    console.log(`My pet name is ${this.name}. Color is ${this.color}`);
  }
}

const cat = new Animal("travis", "white");
const dog = new Animal("tom", "black");
const cow = new Animal("redbull", "red");
cat.showInfo();
cow.showInfo();
