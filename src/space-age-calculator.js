export class Mercury {

  age(earthAge) {
    const mercuryAge = earthAge * .24;
    return mercuryAge;
  }

  expectancy(earthAge, lifeExpectancy) {

  }

};

export class Venus {

  age(earthAge) {
    const venusAge = earthAge * .62;
    return venusAge;
  }

  expectancy(earthAge, lifeExpectancy) {

  }

};

export class Mars {

  age(earthAge) {
    const marsAge = earthAge * 1.88;
    return Math.round(marsAge);
  }

  expectancy(earthAge, lifeExpectancy) {

  }

};

export class Jupiter {

  age(earthAge) {
    const jupiterAge = earthAge * 11.86;
    return Math.round(jupiterAge);
  }

  expectancy(earthAge, lifeExpectancy) {

  }

};
