const { expect } = require('@jest/globals');
//import expect from '@jest/globals';
import calculateAnnualTaxIncome from '../app/features/calculateAnnualTaxIncome.js';
import calculateAnnualTaxableIncome from '../app/features/calculateAnnualTaxableIncome.js';

test('Calculate annual taxable income of a person with monthly salary of 6.500.000 and married with 1 child', () => {
    expect(calculateAnnualTaxableIncome.calculateAnnualTaxableIncome("6.500.000", "K1")).toBe(15000000);
});

test('Calculate annual tax income of a person with monthly salary of 6.500.000 and married with 1 child', () => {
    expect(calculateAnnualTaxIncome.calculateAnnualTaxIncome(15000000, 0, 0)).toBe(750000);
});

test('Calculate annual taxable income of a person with monthly salary of 25.000.000 and single', () => {
    expect(calculateAnnualTaxableIncome.calculateAnnualTaxableIncome("25.000.000", "TK0")).toBe(246000000);
});

test('Calculate annual tax income of a person with monthly salary of 25.000.000 and single', () => {
    expect(calculateAnnualTaxIncome.calculateAnnualTaxIncome(246000000, 0, 0)).toBe(31900000);
});