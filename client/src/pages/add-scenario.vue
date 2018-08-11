<template>
  <b-container fluid>
    <header-part></header-part>
    <br class="empty-space"/>
    <!-- <scenario-name :name.sync="scenarioName"></scenario-name> -->
    <things-table v-if="pageNumber === 1"></things-table>
    <br class="empty-space"/>
    <b-row align-h="center">
      <b-button-group>
        <b-button variant="info" class="pageination-btn" v-if="pageNumber > 1">مرحله قبلی</b-button>
        <b-button variant="primary" class="pageination-btn">مرحله {{ pageNumber }}</b-button>
        <b-button variant="info" class="pageination-btn">مرحله بعدی</b-button>
      </b-button-group>
    </b-row>
  </b-container>
</template>

<script>
import HeaderPart from '../components/header'
import ThingsTable from '../components/things-table'
// import ScenarioName from '../components/scenario-name'

export default {
  components: {
    HeaderPart,
    ThingsTable
    // ScenarioName
  },
  data () {
    return {
      pageNumber: 1
      // scenarioName: 'test'
    }
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
