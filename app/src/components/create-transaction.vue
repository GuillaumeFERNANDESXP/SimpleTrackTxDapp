<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
            <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
        <div class="text-h6">Create a TX</div>
      </q-card-section>
   <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-card-section>
          <div class="row">
              <div class="col ">
            Amount to send :
              </div>
              <div class="col">
        <q-input
          outlined
          />
              </div>
          </div>
          <p>To: </p>
           <q-input
          outlined
          >
          </q-input>
          <div>
              <p></p>
          </div>
          <div >
        <q-btn label="Send" type="submit" color="primary"/>
      </div>
      </q-card-section>
   </q-form>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'create-transaction'
}
</script>

<style>
.q-card {
    width: 30%;
}
</style>>
