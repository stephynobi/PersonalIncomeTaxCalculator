import util from './app/services/util.js';
import calculateAnnualTaxIncome from './app/features/calculateAnnualTaxIncome.js';
import calculateAnnualTaxableIncome from './app/features/calculateAnnualTaxableIncome.js';

// get input for monthly salary
var monthlySalaryInput = document.getElementById('monthlySalary');
// get input for martial status
var martialStatusList = document.getElementById('martialStatuses');


monthlySalaryInput.oninput = function onKeyUp() {
    displayCalculations();
};

martialStatusList.oninput = function onStatusChange() {
    displayCalculations();
}

function displayCalculations() {
    var taxRelief;
    var annualIncome;
    var annualTaxIncome;
    var annualTaxableIncome;
    var monthlySalary;
    var martialStatus;

    monthlySalary = monthlySalaryInput.value;
    martialStatus = martialStatusList.value;

    if (monthlySalary) {
        document.getElementById('annualIncome').innerHTML = calculateAnnualTaxableIncome.displayAnnualIncome(monthlySalary);
    }
    if (martialStatus) {
        document.getElementById('taxRelief').innerHTML = calculateAnnualTaxableIncome.displayTaxRelief(martialStatus);
    }
    if (monthlySalary && martialStatus) {
        annualTaxableIncome = calculateAnnualTaxableIncome.calculateAnnualTaxableIncome(monthlySalary, martialStatus);
        annualTaxIncome = calculateAnnualTaxIncome.calculateAnnualTaxIncome(annualTaxableIncome, 0, 0);
        document.getElementById('annualTax').innerHTML = util.formatNumberToCurrencyString(annualTaxIncome) + " IDR";
    }
}