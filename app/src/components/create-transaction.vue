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
          <q-btn @click="createTx"/>
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
    createTx () {
      var web3js = window.web3
      var web3 = new Web3(web3js.currentProvider)
      web3.eth.getAccounts(function (error, result) {
        if (!error) {
          console.log(result)
          web3.eth.sendTransaction(
            { from: '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481', to: '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481', value: '100178979780000000' },
            function (err, transactionHash) {
              if (!err) { console.log(transactionHash + ' Sucess') }
            },
            console.log(this.transactionHash)
          )
        }
      })
      console.log(this.transactionHash)
    }
  }
}
</script>

<style>
.q-card {
  width: 30%
}
</style>>
