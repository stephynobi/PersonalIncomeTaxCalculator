import systemConfig from '../configs/config.js';

var TAX_SCHEMES = systemConfig.taxSchemes;

function calculateAnnualTaxIncome(taxableIncome, counter, taxPayable) {
    var amountToTax = 0;

    // no more income to tax or maximum tax rate reached
    if ((taxableIncome <= 0) || (counter === TAX_SCHEMES.length)) {
        return (taxPayable + (taxableIncome * (TAX_SCHEMES[counter].rate / 100)));
    } else {
        // get minimum amount to tax
        amountToTax = TAX_SCHEMES[counter].incomeCeiling;
        if ((taxableIncome < amountToTax)) {
            amountToTax = taxableIncome;
        }

        taxPayable += (amountToTax * (TAX_SCHEMES[counter].rate / 100));
        return calculateAnnualTaxIncome(taxableIncome - amountToTax, ++counter, taxPayable);
    }
}

export default { calculateAnnualTaxIncome };