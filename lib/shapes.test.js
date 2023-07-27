const { Circle, Triangle, Square } = require('./shapes.js');

describe('Shapes', () => {
  test('Circle should render correctly with default color', () => {
    const circle = new Circle();
    expect(circle.render()).toContain('fill=\'\'');
  });

  test('Circle should render correctly with a specified color', () => {
    const circle = new Circle();
    circle.colorChoice('#FF0000');
    expect(circle.render()).toContain('fill=\'#FF0000\'');
  });

  test('Triangle should render correctly with default color', () => {
    const triangle = new Triangle();
    expect(triangle.render()).toContain('fill=\'\'');
  });

  test('Triangle should render correctly with a specified color', () => {
    const triangle = new Triangle();
    triangle.colorChoice('#00FF00');
    expect(triangle.render()).toContain('fill=\'#00FF00\'');
  });

  test('Square should render correctly with default color', () => {
    const square = new Square();
    expect(square.render()).toContain('fill=\'\'');
  });

  test('Square should render correctly with a specified color', () => {
    const square = new Square();
    square.colorChoice('blue');
    expect(square.render()).toContain('fill=\'blue\'');
  });
});
