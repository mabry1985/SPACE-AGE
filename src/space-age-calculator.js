// was having issue trying to call a prototype within the class

export class Mercury {

  age(earthAge) {
    const mercuryAge = earthAge * .24;
    return Math.round(mercuryAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    let mercuryExpectancy = Math.round(lifeExpectancy * .24);
    let mercuryAge = Math.round(earthAge * .24);
    let yearsLeftMercury = mercuryExpectancy - mercuryAge;
    if (mercuryAge > mercuryExpectancy) {
      return Math.abs(yearsLeftMercury);
    } else {
      return yearsLeftMercury;
    }
  }

};

export class Venus {

  age(earthAge) {
    const venusAge = earthAge * .62;
    return Math.round(venusAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    let venusExpectancy = Math.round(lifeExpectancy * .62);
    let venusAge = Math.round(earthAge * .62);
    let yearsLeftVenus = venusExpectancy - venusAge;
    return yearsLeftVenus;
  }

};

export class Mars {

  age(earthAge) {
    const marsAge = earthAge * 1.88;
    return Math.round(marsAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    let marsExpectancy = Math.round(lifeExpectancy * 1.88);
    let marsAge = Math.round(earthAge * 1.88);
    let yearsLeftMars = marsExpectancy - marsAge;
    return yearsLeftMars;
  }

};

export class Jupiter {

  age(earthAge) {
    const jupiterAge = earthAge * 11.86;
    return Math.round(jupiterAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    let jupiterExpectancy = Math.round(lifeExpectancy * 11.86);
    let jupiterAge = Math.round(earthAge * 11.86);
    let yearsLeftJupiter = jupiterExpectancy - jupiterAge;
    return yearsLeftJupiter;
  }

};
