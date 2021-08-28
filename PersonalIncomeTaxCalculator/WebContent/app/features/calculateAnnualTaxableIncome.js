import util from '../services/util.js';
import systemConfig from '../configs/config.js';

function calculateAnnualTaxableIncome(monthlySalary, status) {
    var annualSalary = 0;
    var taxRelief = 0;

    annualSalary = calculateAnnualIncome(monthlySalary);
    taxRelief = calculateTaxRelief(status);
    return (annualSalary - taxRelief);
};

function calculateAnnualIncome(_monthlySalary) {
    var monthlySalary = 0;
    var annualSalary = 0;

    monthlySalary = util.convertCurrencyStringToNumber(_monthlySalary);
    annualSalary = monthlySalary * 12;
    return annualSalary;
};

function calculateTaxRelief(status) {
    return systemConfig.taxReliefs[status].amount;
};

function displayAnnualIncome(monthlySalary) {
    return util.formatNumberToCurrencyString(calculateAnnualIncome(monthlySalary));
}

function displayTaxRelief(status) {
    return util.formatNumberToCurrencyString(calculateTaxRelief(status));
}

export default { calculateAnnualTaxableIncome, displayAnnualIncome, displayTaxRelief };