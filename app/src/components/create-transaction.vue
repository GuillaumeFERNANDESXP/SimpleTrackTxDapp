<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <p v-if="isInjected" id="has-metamask">
          <i aria-hidden="true" class="fa fa-check"></i> Metamask installed
        </p>
        <div class="text-h6">Create a TX</div>
      </q-card-section>
      <!-- <q-form @submit="onSubmit" class="q-gutter-md"> -->
      <q-card-section>
        <div class="row">
          <div class="col">Amount to send :</div>
          <div class="col">
            <q-input outlined />
          </div>
        </div>
        <p>To:</p>
        <q-input outlined></q-input>
        <div>
          <q-btn @click="sendEther" label="Send Ether" />
        </div>
        <div>
          <q-btn @click="sendEtherWithInfura" label="Send Ether With Infura" />
        </div>
        <div>
          <!-- <q-btn label="Send" type="submit" color="primary" /> -->
        </div>
      </q-card-section>
      <!-- </q-form> -->
    </q-card>
  </div>
</template>
<script>
import Web3 from 'web3'
export default {
  name: 'create-transaction',
  methods: {
    sendEther () {
      var web3js = window.web3
      var web3 = new Web3(web3js.currentProvider)
      web3.eth.getAccounts(function (error, result) {
        if (!error) {
          let account = result
          console.log('Your account address :' + account)
          web3.eth
            .sendTransaction({
              from: '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481',
              to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
              value: '10017897978000000'
            })
            .on('transactionHash', function (hash) {
              console.log('THIS IS TXH HASH  ' + hash)
            })
            .on('error', console.error)
        }
      })
    }
  }
}
</script>

<style>
.q-card {
  width: 70%
}
</style>>
