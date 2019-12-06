import Web3 from 'web3'

export default function sendEther (account) {
  var web3 = new Web3(window.web3.currentProvider)
  return web3.eth.sendTransaction({
    from: account,
    to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
    value: '10017897970'
  })
    .on('transactionHash', function (hash) {
      console.log('Transaction hash : ' + hash) // return Hash of tx
      console.log('Number of the block ')
      web3.eth.getTransaction(hash).then(console.log) // Object of the tx to send 
    })
    .on('receipt', function (receipt) {
      console.log(receipt) // Tx is mined, here the receipt
      console.log('Index position :' + receipt.transactionIndex + 'in the block number :' + receipt.blockNumber) // Tx's index in the block
    })
    .on('confirmation', function (confirmationNumber, receipt) {
      if (confirmationNumber === 6) {
        console.log('LIGHT CONF IS OK  ' + confirmationNumber)
      }
      if (confirmationNumber === 24) {
        console.log('FINAL CONF IS OK  ' + confirmationNumber)
      }
    })
}
