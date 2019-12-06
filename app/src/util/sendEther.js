import Web3 from 'web3'

export default function sendEther (account) {
  var web3 = new Web3(window.web3.currentProvider)
  return web3.eth.sendTransaction({
    from: account,
    to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
    value: '10017897970'
  })
    .on('transactionHash', function (hash) {
      console.log(hash) // return Hash pf tx
      web3.eth.getBlockNumber(console.log)
    })
    .on('confirmation', function (receipt) {
      console.log('Transaction confirmed' + receipt)
      if (receipt === 5) {
        console.log('LIGHT CONF IS OK')
        web3.eth.getBlockNumber(console.log)
      }
      if (receipt === 72) {
        console.log('LIGHT CONF IS OK')
        web3.eth.getBlockNumber(console.log)
      }
    })
}
