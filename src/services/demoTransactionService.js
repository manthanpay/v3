export const demoTransactionService = {
  commission(amount, rate) { return +(Number(amount) * Number(rate || 0)).toFixed(2) },
  create({ service, to, amount, commission }) {
    return { id: 'MP' + Date.now().toString().slice(-9), service, to, amount, commission, date: new Date().toLocaleString('en-IN'), status: 'Success' }
  },
  walletAfterPayment(wallet, amount, commission) { return +(Number(wallet) - Number(amount) + Number(commission)).toFixed(2) },
}
