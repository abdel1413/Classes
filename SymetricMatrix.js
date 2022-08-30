class SymetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) {
        return element(y, x);
      } else {
        return element(x, y);
      }
    });
  }
  set(x, y, value) {
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let symetric = new SymetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(symetric.get(2, 3)); //3,2
console.log(symetric.get(1, 4)); // 4,1
