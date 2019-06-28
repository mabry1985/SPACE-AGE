import { Mercury, Venus, Mars, Jupiter } from '../src/space-age-calculator.js';

describe('Earth age to age on other planets', function () {
  it('should return the inputted age * .24 rounded to nearest whole number', function () {
    let mercury = new Mercury;
    expect(mercury.age(34)).toEqual(8.16);
  });

  it('should return the inputted age * .62 rounded to nearest whole number', function () {
    let venus = new Venus;
    expect(venus.age(34)).toEqual(21.08);
  });

  it('should return the inputted age * 1.88 rounded to nearest whole number', function () {
    let mars = new Mars;
    expect(mars.age(34)).toEqual(63.92);
  });

  it('should return the inputted age * 11.86 rounded to nearest whole number', function () {
    let jupiter = new Jupiter;
    expect(jupiter.age(34)).toEqual(403.24);
  });
});
