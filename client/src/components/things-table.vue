<template>
  <b-container>
    <b-table striped hover :items="things" :fields="thingsFields"></b-table>
    <b-form-group label="لطفاً اشیاء موردنظر خود را از لیست زیر و با توجه به اطلاعات فوق تکمیل انتخاب کنید:">
      <b-form-checkbox-group stacked  v-for="thing in things" :key="thing.id" v-model="selectedThings">
        <b-form-checkbox :value="thing._id">{{ thing.name }}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </b-container>
</template>

<script>
import api from '../services/api'
export default {
  data () {
    return {
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
    api().get('things', {headers: {Authorization: 'Bearer ' + self.$store.state.token}})
      .then(function (response) {
        console.log(response.data.result.things)
        self.things = response.data.result.things
      })
      .catch(function (err) {
        console.log('THINGS CANNOT RERTIEVED: ' + err)
      })
  }
}
</script>

<style>

</style>
