<template>
  <b-container fluid>
    <vue-headful title="کنترل کردن شرایط تست"/>
    <header-part></header-part>
    <br/>
    <br/>
    <b-container>
      <b-table striped hover :items="conditions" :fields="conditionFields"></b-table>
      <b-btn @click="goNextStep" variant="success">تأیید</b-btn>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../../components/header'

export default {
  components: {
    HeaderPart
  },
  props: [
    'scenario',
    'conditions'
  ],
  data () {
    return {
      conditionFields: {
        selectedSensor: {
          label: 'نام سنسور'
        },
        sensorValue: {
          label: 'مقدار سنسور'
        },
        timeOfChange: {
          label: 'زمان تغییر'
        }
        // ,
        // timeType: {
        //   label: 'نوع زمان'
        // }
      }
    }
  },
  methods: {
    goNextStep: function () {
      console.log(this.conditions)
      this.$router.push({name: 'python-code-show',
        params: {
          scenario: this.scenario,
          conditions: this.conditions
        }})
    }
  }
}
</script>

<style>
</style>
