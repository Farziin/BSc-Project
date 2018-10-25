<template>
  <b-container fluid>
    <header-part></header-part>
    <b-container>
      <b-table striped hover :items="things" :fields="thingsFields"></b-table>
        <b-form-group label="لطفاً اشیاء موردنظر خود را از لیست زیر و با توجه به اطلاعات فوق تکمیل انتخاب کنید:">
          <b-form-checkbox-group stacked  v-for="thing in things" :key="thing.id" v-model="selectedThings">
            <b-form-checkbox :value="thing">{{ thing.name }}</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <br/>
      <b-btn @click="goNextStep" variant="primary">مرحله بعد</b-btn>
      <br/>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../../components/header'
// import platformAPI from '../../services/platform_api'
import serverAPI from '../../services/server_api'
export default {
  props: [
    'scenarioName',
    'scenario'
  ],
  components: {
    HeaderPart
  },
  data () {
    return {
      // things' table data fields
      things: [],
      selectedThings: [],
      thingsFields: {
        name: {
          label: 'نام شیء'
        },
        description: {
          label: 'توضیحات'
        },
        active: {
          label: 'فعال'
        },
        type: {
          label: 'نوع'
        }
      }
    }
  },
  created: function () {
    var self = this
    // platformAPI().get('things', {headers: {Authorization: 'Bearer ' + self.$store.state.token}})
    //   .then(function (response) {
    //     self.things = response.data.result.things
    //   })
    //   .catch(function (err) {
    //     console.log('THINGS CANNOT RERTIEVED: ' + err)
    //   })
    serverAPI().get('get-things')
      .then(function (response) {
        self.things = response.data
      })
      .catch(function (err) {
        console.log('THINGS CANNOT RERTIEVED: ' + err)
      })
  },
  methods: {
    goNextStep: function () {
      var scenario = this.scenario
      scenario['things'] = this.selectedThings
      this.$router.push({name: 'scenario-number',
        params: { name: this.scenarioName, things: this.selectedThings, scenario: scenario }})
    }
  }
}
</script>

<style>

</style>
