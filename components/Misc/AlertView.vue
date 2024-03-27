<template>
  <div v-if="alerts.length" class="alerts">
    <div v-for="(alert, index) in alerts" :key="index" :class="['alert', alert.type]">
      {{ alert.message }}
      <button @click="dismissAlert(index)">X</button>
    </div>
  </div>
</template>

  
  <script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed: {
        ...mapGetters({
            alerts: 'alert/getAlerts'
        })
    },
    methods: {
      ...mapActions({
        removeAlert:'alert/removeAlert'
      }),
      dismissAlert(index) {
        this.removeAlert(index)
      }
    }
  }
  </script>
  
<style scoped>
  .alerts {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
  }

  .alert {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #fff;
  }

  .success {
    background-color: #007bff; /* Deep blue for success */
  }

  .error {
    background-color: #dc3545; /* Deep blue for error */
  }

  .alert button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .alert button:hover {
    color: #ccc;
  }
</style>
  