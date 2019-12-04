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
          {{account}}
          <q-btn @click="getAccounts" label="Get Account" />
        </div>
        <div>
          <q-btn @click="sendEther" label="Send Ether" />
        </div>
        <div>
          <q-btn @click="getTxHash" label="get Tx Hash" />
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
import { mapState } from 'vuex'
import Web3 from 'web3'
import txHash from '../util/makeTx'
export default {
  name: 'create-transaction',
  computed: mapState({
    account: state => state.web3.account
  }),
  methods: {
    getAccounts () {
      var web3 = new Web3(window.web3.currentProvider)
      return web3.eth.getAccounts(function (error, result) {
        if (!error) {
          console.log('Your account address :' + result)
          return result
        }
      })
    },
    getTxHash () {
      return txHash(this.account)
    },
    sendEther () {
      var web3 = new Web3(window.web3.currentProvider)
      web3.eth.sendTransaction({
        from: this.account,
        to: '0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd',
        value: '100178979780000'
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
