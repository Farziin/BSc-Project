<template>
  <b-container fluid>
    <vue-headful title="نمایش کد تولید شده"/>
    <header-part></header-part>
    <br/>
    <br/>
    <b-container>
      <strong>کد پایتون تولید شده</strong>
      <br/>
      <br/>
      <highlight-code class="test" lang="python">
        {{ code }}
      </highlight-code>
      <br/>
      <br/>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../components/header'
import generateCode from '../services/generate_code'

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
      code: generateCode(this.scenario, this.conditions)
    }
  }
}
</script>

<style>

</style>
