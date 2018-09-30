<template>
  <b-container fluid>
    <header-part></header-part>
    <br/>
    <b-container>
      <p>از حالت {{ state }} به چند حالت دیگر می‌روید؟</p>
      <b-form-input v-model="exitNumber"
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
    'stateSum',
    'state',
    'name',
    'things',
    'scenario'
  ],
  components: {
    HeaderPart
  },
  data () {
    return {
      exitNumber: 1
    }
  },
  methods: {
    goNextStep: function () {
      this.$router.push({name: 'define-scenario',
        params: { name: this.name,
          things: this.selectedThings,
          stateSum: this.stateSum,
          inState: this.state,
          exitNumber: this.exitNumber,
          scenario: this.scenario }})
    }
  }
}
</script>

<style>

</style>
