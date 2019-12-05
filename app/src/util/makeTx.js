import Web3 from 'web3'

let txHash = function (address) {
  const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'))
  const subscription = web3.eth.subscribe('pendingTransactions', (error, txHash) => {
    if (error) console.log('error: ', error)
  })
    .on('data', function (txHash) {
      return web3.eth.getTransaction(txHash, (err, returnedValue) => {
        console.log(txHash)
        if (err) {
          console.log(err)
        }
        if (returnedValue && (returnedValue.from === address || returnedValue.to === address)) {
          console.log(`TransactionHash: ${returnedValue.hash}`)
        }
      })
    })
    .on('error', (log) => {
      console.log('error: ', log)
    })
  subscription.unsubscribe(function (error, success) {
    if (!error) {
      console.log('Unuccessfully unsubscribed!')
    }
  })
}
export default txHash
