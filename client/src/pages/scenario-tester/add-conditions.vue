<template>
  <b-container fluid>
    <vue-headful title="اضافه کردن شرایط تست"/>
    <header-part></header-part>
    <b-container>
      <br/>
      <strong>لطفا برای تمامی سنسورها مقدار اولیه تعیین کنید.</strong>
      <br/>
      <br/>
      <b-row v-for="n in numberOfRow" :key="n">
        <!-- select sensor or actuator -->
        <b-col cols="6">
          <b-form-select v-model="selectedSensors[n - 1]">
            <option :value="null" disabled>-- لطفا یک سنسور یا عملگر را انتخاب کنید --</option>
            <option v-for="sensor in sensors" :key="sensor.name" :value="sensor" v-if="sensor.type === 'sensor'">
              {{ sensor.name }}
            </option>
          </b-form-select>
        </b-col>
        <!-- select value of sensor or actuator -->
        <b-col cols="2">
          <b-form-select v-model="sensorValues[n - 1]" v-if="selectedSensors[n - 1] !== null">
            <option :value="null" disabled>-- لطفا یک مقدار برای این سنسور انتخاب نمایید --</option>
            <option v-for="value in selectedSensors[n - 1].rangeArray" :key="value" :value="value">
              {{ value }}
            </option>
          </b-form-select>
        </b-col>
        <!-- time of changing sensor value -->
        <b-col cols="4">
          <b-form-input placeholder="لطفا iteration موردنظر برای تغییر مقدار سنسور را وارد نمایید."
          type="number" v-model="timeOfChanges[n - 1]" v-if="sensorValues[n-1] !== null"/>
        </b-col>
        <!-- <b-col cols="2">
          <b-form-select v-model="timeTypes[n - 1]" v-if="sensorValues[n - 1] !== null">
            <option :value="null" disabled>-- لطفا زمان تغییر را انتخاب کنید. --</option>
            <option v-for="d in durationTypes" :key="d.value" :value="d">
              {{ d.text }}
            </option>
          </b-form-select>
        </b-col> -->
        <br/>
        <br/>
      </b-row>
      <br/>
      <strong>حالت‌های اولیه و پایانی</strong>
      <br/>
      <br/>
      <b-row>
          <b-form-select v-model="startState">
            <option :value="null" disabled>-- لطفا حالت اولیه سناریو را انتخاب کنید. --</option>
            <option v-for="value in parseInt(scenario.number_of_states)" :key="value" :value="value">
              {{ value }}
            </option>
          </b-form-select>
      </b-row>
      <br/>
      <b-row>
        <b-form-select v-model="finishState">
          <option :value="null" disabled>-- لطفا حالت پایانی سناریو را انتخاب کنید. --</option>
          <option v-for="value in parseInt(scenario.number_of_states)" :key="value" :value="value">
            {{ value }}
          </option>
        </b-form-select>
      </b-row>
      <br/>
      <b-row class="custom-row">
        <b-btn variant="warning" @click="addNewRow">افزودن سطر جدید</b-btn>
        <b-btn variant="primary" @click="goNextStep" class="custom-btn">مرحله بعد</b-btn>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../../components/header'
import config from '../../config/config'
// import serverAPI from '../../services/server_api'

export default {
  components: {
    HeaderPart
  },
  props: [
    'durationType',
    'durationValue',
    'scenario'
  ],
  data () {
    return {
      // TODO: this part retrieve from platform
      // sensors: [
      //   { name: 'sensor1', validRange: [-2, 3] },
      //   { name: 'sensor2', validRange: ['hello', 'bye'] }
      // ],
      sensors: [],
      selectedSensors: [null],
      sensorValues: [null],
      timeOfChanges: [null],
      timeTypes: [null],
      durationTypes: [],
      numberOfRow: 1,
      startState: null,
      finishState: null
    }
  },
  created: function () {
    // computing sensor range array
    // var self = this
    // serverAPI().get('get-things')
    // .then(function (response) {
    // self.sensors = response.data
    this.sensors = this.scenario.things
    this.sensors.forEach(element => {
      var range = element['validRange']
      element['rangeArray'] = []
      if (Number.isInteger(range[0]) && Number.isInteger(range[1])) {
        for (var i = range[0]; i <= range[1]; i++) {
          element['rangeArray'].push(i)
        }
      } else {
        element['rangeArray'] = range
      }
    })
    // computing time range can sensor's value changed
    this.durationTypes = config.timeTypes
    for (let index = 0; index < self.durationTypes.length; index++) {
      if (this.durationTypes[index].value > this.durationType.value) {
        this.durationTypes.splice(index, this.durationTypes.length - index)
        break
      }
    }
    // })
    // .catch(function (err) {
    // console.log('THINGS CANNOT RERTIEVED: ' + err)
    // })
  },
  methods: {
    addNewRow: function () {
      this.numberOfRow++
      this.selectedSensors.push(null)
      this.sensorValues.push(null)
      this.timeOfChanges.push(null)
      this.timeTypes.push(null)
    },
    goNextStep: function () {
      var conditions = []
      for (let index = 0; index < this.numberOfRow; index++) {
        conditions[index] = {}
        conditions[index]['selectedSensor'] = this.selectedSensors[index].name
        conditions[index]['sensorValue'] = this.sensorValues[index]
        conditions[index]['timeOfChange'] = this.timeOfChanges[index]
      }
      conditions['startState'] = this.startState
      conditions['finishState'] = this.finishState
      this.$router.push({name: 'condition-table',
        params: {
          scenario: this.scenario,
          conditions: conditions
        }})
    }
  }
}
</script>

<style>
.custom-row {
  margin: 20px 0px;
}

.custom-btn {
  margin-right: 20px;
}
</style>
