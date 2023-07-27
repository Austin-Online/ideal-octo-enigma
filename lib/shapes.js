// Defines parent class
class Shape {
    constructor() {
      this.color = '';
    }
  
    colorChoice(color) {
      this.color = color;
    }
  }

//   Defines Triangle
  class Triangle extends Shape {
    render() {
      return `<polygon points="0, 200 300, 200 150, 0" height="100%" width="100%" fill='${this.color}'/>`;
    }
  }  

//   Defines Circle
  class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill='${this.color}'/>`;
    }
  }
  
//   Defines Square
  class Square extends Shape {
    render() {
      return `<rect x="50" height="200" width="200" fill='${this.color}'/>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  