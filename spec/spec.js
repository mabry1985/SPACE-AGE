import { Mercury, Venus, Mars, Jupiter } from '../src/space-age-calculator.js';

describe('Earth age to age on other planets', function () {
  it('should return the inputted age * .24 rounded to nearest whole number', function () {
    const mercury = new Mercury;
    expect(mercury.age(34)).toEqual(8);
  });

  it('should return the inputted age * .62 rounded to nearest whole number', function () {
    const venus = new Venus;
    expect(venus.age(34)).toEqual(21);
  });

  it('should return the inputted age * 1.88 rounded to nearest whole number', function () {
    const mars = new Mars;
    expect(mars.age(34)).toEqual(64);
  });

  it('should return the inputted age * 11.86 rounded to nearest whole number', function () {
    const jupiter = new Jupiter;
    expect(jupiter.age(34)).toEqual(403);
  });
});

describe('Life expectancy', function () {
  it('should return years remaining on Mercury rounded to the nearest whole number',
  function () {
    const mercury1 = new Mercury;
    expect(mercury1.yearsLeft(34, 77)).toEqual(10);
  });

  it('should return years remaining on Venus rounded to the nearest whole number',
  function () {
    const venus1 = new Venus;
    expect(venus1.yearsLeft(34, 77)).toEqual(27);
  });

  it('should return years remaining on Mars rounded to the nearest whole number',
  function () {
    const mars1 = new Mars;
    expect(mars1.yearsLeft(34, 77)).toEqual(81);
  });

  it('should return years remaining on Jupiter rounded to the nearest whole number',
  function () {
    const jupiter1 = new Jupiter;
    expect(jupiter1.yearsLeft(34, 77)).toEqual(510);
  });

  it('should return how many years pass the average life expectancy you have lived',
  function () {
    const mercury1 = new Mercury;
    expect(mercury1.yearsLeft(95, 77)).toEqual(5);
  });

  it('should return how many years pass the average life expectancy you have lived',
  function () {
    const venus1 = new Venus;
    expect(venus1.yearsLeft(95, 77)).toEqual(11);
  });

  it('should return how many years pass the average life expectancy you have lived',
  function () {
    const mars1 = new Mars;
    expect(mars1.yearsLeft(95, 77)).toEqual(34);
  });

  it('should return how many years pass the average life expectancy you have lived',
  function () {
    const jupiter1 = new Jupiter;
    expect(jupiter1.yearsLeft(95, 77)).toEqual(214);
  });

});
