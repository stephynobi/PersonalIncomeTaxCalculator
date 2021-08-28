export default {
    taxReliefs: {
        TK0: {
            profile: "TK0",
            amount: 54000000,
            description: "Single"
        },
        K0: {
            profile: "K0",
            amount: 58500000,
            description: "Married with no dependant"
        },
        K1: {
            profile: "K1",
            amount: 63000000,
            description: "Married with 1 dependant"
        },
        K2: {
            profile: "K2",
            amount: 67500000,
            description: "Married with 2 dependants"
        },
        K3: {
            profile: "K3",
            amount: 72000000,
            description: "Married with 3 dependants"
        }
    },
    taxSchemes: [
        { rate: 5, incomeCeiling: 50000000, incomeDescription: "0 to 50000000" },
        { rate: 15, incomeCeiling: 200000000, incomeDescription: "50000000 to 250000000" },
        { rate: 25, incomeCeiling: 250000000, incomeDescription: "250000000 to 500000000" },
        { rate: 30, incomeCeiling: 50000000, incomeDescription: "above 500000000" }
    ]
};