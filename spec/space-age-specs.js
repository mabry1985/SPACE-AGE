describe('Earth age to age on other planets', function () {
  it('should return the inputted age * .24', function () {
    expect(Mercury.age(34)).toEqual(8.16);
  });

  it('should return the inputted age * .62', function () {
    expect(Venus.age(34)).toEqual(21.08);
  });

  it('should return the inputted age * 1.88', function () {
    expect(Mars.age(34)).toEqual(63.92);
  });

  it('should return the inputted age * 11.86', function () {
    expect(Jupiter.age(34)).toEqual(403.24);
  });
});
