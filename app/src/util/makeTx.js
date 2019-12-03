import Web3 from 'web3'

let getTxHash = function () {
  var web3 = new Web3(window.web3.currentProvider)
  web3.eth.sendTransaction({
    from: '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481',
    to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
    value: '100178979780000'
  })
    .on('transactionHash', function (hash) {
      console.log('THIS IS TXH HASH  ' + hash)
      return hash
    })
}

let txHash = async function () {
  const web3 = new Web3(new Web3.providers.HttpProvider('ropsten.infura.io/v3/ecd08f482701425fbc7dd36db8c63358'))
  const tx = await getTxHash()
  const subscription = web3.eth.subscribe('pendingTransactions')
  console.log(subscription, tx)
}
export default txHash
