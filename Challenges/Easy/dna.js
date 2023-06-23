"use strict";

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let counter = 0;
    if (this.strand.length < comparisonStrand.length) {
      for (let index = 0; index < this.strand.length; index += 1) {
        if (this.strand[index] !== comparisonStrand[index]) counter += 1;
      }
    } else {
      for (let index = 0; index < comparisonStrand.length; index += 1) {
        if (this.strand[index] !== comparisonStrand[index]) counter += 1;
      }
    }
    return counter;
  }
}

module.exports = DNA;