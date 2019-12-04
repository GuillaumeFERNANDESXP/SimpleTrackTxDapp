import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'))

let txHash = function (address) {
  return web3.eth.subscribe('pendingTransactions', (error, txHash) => {
    if (error) console.log('result: ', error)
  })
    .on('data', function (txHash) {
      return web3.eth.getTransaction(txHash, (err, returnedValue) => {
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
}
export default txHash
