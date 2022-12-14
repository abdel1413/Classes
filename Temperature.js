class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get Fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set Fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  // NOTE; static methds are stored in the constructor
  //So this Temperation class allows us to create temperature
  //from fahrenheit to celsius using  instance variable.methd name
  //ex in this case temp.fromFahrenheitToCelsius(value)
  //converts fahrenheit to celsius

  static fromFahrenheitToCelsius(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp);
//Temperature {celsius: 22}
//celsius: 30
//Fahrenheit: (...)
//[[Prototype]]: Object

console.log(temp.Fahrenheit); // first call => 71.6  ; 2nd call => 86
console.log((temp.Fahrenheit = 86));
console.log("after setting farenheit", temp.Fahrenheit); //after setting farenheit 86

console.log(temp.celsius); //=> 30
