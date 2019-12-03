import Web3 from 'web3'

// let getTxHash = function () {
//   var web3 = new Web3(window.web3.currentProvider)
//   web3.eth.sendTransaction({
//     from: '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481',
//     to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
//     value: '100178979780000'
//   })
//     .on('transactionHash', function (hash) {
//       console.log('THIS IS TXH HASH  ' + hash)
//       return hash
//     })
// }

let txHash = function () {
  const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'))
  web3.eth.subscribe('pendingTransactions', (error, result) => {
    if (!error) console.log('result: ', result)
    console.log('error: ', error)
  })
    .on('data', (log) => {
      console.log('data: ', log) // if(log===tx) { console.log...}
    })
    .on('error', (log) => {
      console.log('error: ', log)
    })
}
export default txHash

// You can create a stream of pending transactions using web3.eth.subscribe('pendingTransactions' [, callback]);, which currently returns a transaction hash.
// You can turn into the actual transaction object using web3.eth.getTransaction(transactionHash [, callback]), which will return a transaction object.
