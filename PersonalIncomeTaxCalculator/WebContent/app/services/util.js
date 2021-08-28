export default {
    convertCurrencyStringToNumber: function (currency) {
        return Number(currency.replace(/\D+/g, ""));
    },

    formatNumberToCurrencyString: function (num) {
        return new Number(num).toLocaleString("id-ID");
    }
};