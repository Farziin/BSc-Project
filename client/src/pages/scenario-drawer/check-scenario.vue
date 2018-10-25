<template>
  <b-container fluid>
    <vue-headful title="کنترل سناریو"/>
    <header-part></header-part>
    <br/>
    <b-container>
      <h1>سناریوی تولید شده در قالب JSON</h1>
      <highlight-code class="test">
        {{ scenario }}
      </highlight-code>
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
    'scenario'
  ],
  data () {
    return {
    }
  },
  methods: {
    goNextStep: function () {
      this.$router.push({name: 'add-conditions',
        params: {
          durationType: this.dmySelected,
          durationValue: this.inputValue,
          scenario: this.scenario
        }
      })
    }
  }
}
</script>

<style>
.test {
  direction: ltr;
  text-align: left;
}
</style>
