<template>
  <b-container fluid>
    <vue-headful title="نام نساریو"/>
    <header-part></header-part>
    <br/>
    <b-container>
      <b-card title="انتخاب نام برای سناریو"
                  header-tag="header">
              <h6 slot="header"
                  class="mb-0">به سناریوساز خوش آمدید</h6>
              <br/>
              <b-form-input v-model="name"
                  type="text"
                  required
                  placeholder="لطفا نام موردنظر خود برای سناریو را وارد نمایید"></b-form-input>
          </b-card>
      <br/>
      <b-btn @click="goNextStep" variant="primary">مرحله بعد</b-btn>
      <br/>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../../components/header'

export default {
  components: {
    HeaderPart
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    goNextStep: function () {
      var scenario = {name: this.name}
      this.$router.push({name: 'things', params: { scenarioName: this.name, scenario: scenario }})
    }
  }
}

</script>

<style>
.input-btn {
  width: 80%;
  height: 50px;
  padding: 5px;
}
</style>
