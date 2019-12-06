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
      console.log('Status: Pending')
      web3.eth.getTransaction(hash).then(function (value) {
        console.log('Gas price: ' + value.gasPrice)
        console.log('Gas price: ' + value.gasLimit)
        console.log('Gas price: ' + value.gasPrice)
      }
      )
    })
    .on('receipt', function (receipt) {
      console.log('Status: Mined ')
      console.log(receipt) // Tx is mined, here the receipt
      console.log('Index position  ' + receipt.transactionIndex + '  in the block number  ' + receipt.blockNumber) // Tx's index in the block
      console.log()
    })
    .on('confirmation', function (confirmationNumber) {
      if (confirmationNumber === 6) {
        console.log('Status: Confirmed6  ' + confirmationNumber)
      }
      if (confirmationNumber === 24) {
        console.log('Status: Confirmed24  ' + confirmationNumber)
      }
    })
}
