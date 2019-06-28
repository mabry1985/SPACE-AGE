// was having issue trying to call a prototype within the class

export class Mercury {

  age(earthAge) {
    const mercuryAge = earthAge * .24;
    return Math.round(mercuryAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    const mercuryExpectancy = Math.round(lifeExpectancy * .24);
    const mercuryAge = Math.round(earthAge * .24);
    const yearsLeftMercury = mercuryExpectancy - mercuryAge;
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
    const venusExpectancy = Math.round(lifeExpectancy * .62);
    const venusAge = Math.round(earthAge * .62);
    const yearsLeftVenus = venusExpectancy - venusAge;
    if (venusAge > venusExpectancy) {
      return Math.abs(yearsLeftVenus);
    } else {
      return yearsLeftVenus;
    }
  }

};

export class Mars {

  age(earthAge) {
    const marsAge = earthAge * 1.88;
    return Math.round(marsAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    const marsExpectancy = Math.round(lifeExpectancy * 1.88);
    const marsAge = Math.round(earthAge * 1.88);
    const yearsLeftMars = marsExpectancy - marsAge;
    if (marsAge > marsExpectancy) {
      return Math.abs(yearsLeftMars);
    } else {
      return yearsLeftMars;
    }
  }

};

export class Jupiter {

  age(earthAge) {
    const jupiterAge = earthAge * 11.86;
    return Math.round(jupiterAge);
  }

  yearsLeft(earthAge, lifeExpectancy) {
    const jupiterExpectancy = Math.round(lifeExpectancy * 11.86);
    const jupiterAge = Math.round(earthAge * 11.86);
    const yearsLeftJupiter = jupiterExpectancy - jupiterAge;
    if (jupiterAge > jupiterExpectancy) {
      return Math.abs(yearsLeftJupiter);
    } else {
      return yearsLeftJupiter;
    }
  }

};
