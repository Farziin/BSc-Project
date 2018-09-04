<template>
  <b-container fluid>
    <vue-headful title="ایجاد سناریو"/>
    <header-part></header-part>
    <br class="empty-space"/>
    <scenario-name :name.sync="scenarioName" v-if="pageNumber === 1"></scenario-name>

    <!-- things table part -->
      <!-- because couldn't passing selected things to parent -->
      <!-- define it here -->
    <b-container v-if="pageNumber === 2">
      <b-table striped hover :items="things" :fields="thingsFields"></b-table>
      <b-form-group label="لطفاً اشیاء موردنظر خود را از لیست زیر و با توجه به اطلاعات فوق تکمیل انتخاب کنید:">
        <b-form-checkbox-group stacked  v-for="thing in things" :key="thing.id" v-model="selectedThings">
          <b-form-checkbox :value="thing._id">{{ thing.name }}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </b-container>

    <draw-scenario v-if="pageNumber === 3"></draw-scenario>

    <br class="empty-space"/>
    <!-- page navigation buttons -->
    <b-row align-h="center">
      <b-button-group>
        <b-button variant="info" class="pageination-btn"
          v-if="pageNumber > 1" @click="prevStep">مرحله قبلی</b-button>
        <b-button variant="primary" class="pageination-btn" disabled>مرحله {{ pageNumber }}</b-button>
        <b-button variant="info" class="pageination-btn"
        v-if="pageNumber < 3" @click="nextStep">مرحله بعدی</b-button>
      </b-button-group>
    </b-row>
    <br/>
    <br/>
  </b-container>
</template>

<script>
import HeaderPart from '../components/header'
import ScenarioName from '../components/scenario-name'
import DrawScenario from '../components/draw-scenario'
import api from '../services/api'

export default {
  components: {
    HeaderPart,
    ScenarioName,
    DrawScenario
  },
  data () {
    return {
      pageNumber: 3,
      scenarioName: '',
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
  methods: {
    nextStep () {
      this.pageNumber++
    },
    prevStep () {
      this.pageNumber--
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
.empty-space {
  margin-top: 30px;
  margin-bottom: 30px;
}

.pageination-btn {
  border-radius: 0px;
}
</style>
