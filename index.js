const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const fs = require('fs');

class SVG {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: 'input',
    message: 'Enter up to three characters:',
    name: 'textInput',
    validate: (input) => input.trim().length <= 3 || 'Please enter up to three characters.',
  },
  {
    type: 'input',
    message: 'Enter text color (keyword or hexadecimal):',
    name: 'textColorInput',
  },
  {
    type: 'list',
    message: 'Choose a shape for your logo:',
    name: 'shapeInput',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    message: 'Enter shape color (keyword or hexadecimal):',
    name: 'shapeColorInput',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Your logo has been rendered to logo.svg');
    }
  });
}

async function Generate() {
  const svgFile = 'logo.svg';

  try {
    const { textInput, textColorInput, shapeInput, shapeColorInput } = await inquirer.prompt(questions);

    // Text validation
    if (textInput.length !== 3) {
      console.log('Invalid response. Please ensure your text is three letters long!');
      return;
    }

    // Shape selection and validation
    const shapeOptions = {
      circle: Circle,
      triangle: Triangle,
      square: Square,
    };

    const selectedShape = shapeInput.toLowerCase();
    if (!shapeOptions[selectedShape]) {
      console.log('Invalid shape!');
      return;
    }

    const logoShape = new shapeOptions[selectedShape]();
    logoShape.colorChoice(shapeColorInput);

    // Create and render the SVG
    const svg = new SVG();
    svg.setTextElement(textInput, textColorInput);
    svg.setShapeElement(logoShape);
    const svgString = svg.render();

    writeToFile(svgFile, svgString);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

Generate();
