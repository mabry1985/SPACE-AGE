import { Mercury, Venus, Mars, Jupiter } from '../src/space-age-calculator.js';

describe('Earth age to age on other planets', function () {
  it('should return the inputted age * .24 rounded to nearest whole number', function () {
    let mercury = new Mercury;
    expect(mercury.age(34)).toEqual(8);
  });

  it('should return the inputted age * .62 rounded to nearest whole number', function () {
    let venus = new Venus;
    expect(venus.age(34)).toEqual(21);
  });

  it('should return the inputted age * 1.88 rounded to nearest whole number', function () {
    let mars = new Mars;
    expect(mars.age(34)).toEqual(64);
  });

  it('should return the inputted age * 11.86 rounded to nearest whole number', function () {
    let jupiter = new Jupiter;
    expect(jupiter.age(34)).toEqual(403);
  });
});

describe('Life expectancy', function () {
  it('should return years remaining on Mercury rounded to the nearest whole number',
  function (age, lifeExpectancy) {
    let mercury = new Mercury;
    expect(mercury.yearsLeft(34, 77)).toEqual(43);
  });

  it('should return years remaining on Venus rounded to the nearest whole number',
  function (age, lifeExpectancy) {
    let venus = new Venus;
    expect(venus.yearsLeft(34, 77)).toEqual(43);
  });

  it('should return years remaining on Mars rounded to the nearest whole number',
  function (age, lifeExpectancy) {
    let mars = new Mars;
    expect(mars.yearsLeft(34, 77)).toEqual(43);
  });

  it('should return years remaining on Jupiter rounded to the nearest whole number',
  function (age, lifeExpectancy) {
    let jupiter = new Jupiter;
    expect(jupiter.yearsLeft(34, 77)).toEqual(43);
  });
});
