export default {
    token: [
        {
            uri: "/oauth/token",
            description: "Generate new token"
        }
    ], balances: [
        {
            uri: "/api/v1/api/v1/merchants/balances",
            description: "Get merchant's balance"
        }
    ], currencies: [
        {
            uri: "/api/v1/api/v1/merchants/currencies",
            description: "Get currencies"
        }
    ], exchangeRates: [
        {
            uri: "/api/v1/merchants/exchange-rates",
            description: "Get exchange rates"
        }

    ], paymentLimits: [
        {
            uri: "/api/v21/merchants/payment-limits/{inputCurrency}/{outputCurrency}",
            description: "Get payment limit for a specified currency"
        }

    ], payments: [
        {
            uri: "/api/v1/merchants/payments",
            description: "Gets all payment requests for a merchant"
        }, {
            uri: "/api/v1/merchants/payments/{id}/address",
            description: "Adds a new address to an existing payment"
        }  
    ], transactions: [
        {
            uri: "/api/v1/merchants/transactions",
            description: "Gets all transactions for a merchant"
        }
    ]
}