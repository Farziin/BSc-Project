<template>
  <b-container fluid>
    <header-part></header-part>
    <br/>
    <b-container>
      <p>تعداد حالت‌هایی که می‌خواهید سناریوی شما داشته باشد را وارد نمایید:</p>
      <b-form-input v-model="stateSum"
                  type="number"
                  placeholder="تعداد حالت‌های سناریو را مشخص نمایید"></b-form-input>
      <br/>
      <b-btn @click="goNextStep" variant="primary">مرحله بعد</b-btn>
      <br/>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../../components/header'

export default {
  props: [
    'name',
    'things',
    'scenario'
  ],
  components: {
    HeaderPart
  },
  data () {
    return {
      stateSum: 1
    }
  },
  methods: {
    goNextStep: function () {
      var scenario = this.scenario
      scenario['number_of_states'] = this.stateSum
      this.$router.push({name: 'exit-number',
        params: { name: this.scenarioName,
          things: this.selectedThings,
          state: 1,
          stateSum: this.stateSum,
          scenario: scenario }})
    }
  }
}
</script>

<style>

</style>
