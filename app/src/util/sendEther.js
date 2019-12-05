import Web3 from 'web3'

let sendEther = function (account) {
  var web3 = new Web3(window.web3.currentProvider)
  web3.eth
    .sendTransaction({
      from: account,
      to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
      value: '10017897970'
    })
    .on('transactionHash', function (hash) {
      console.log(web3.eth.getTransaction(hash).then(console.log))
    })
}
export default sendEther
