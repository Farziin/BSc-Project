<template>
  <b-container fluid>
    <vue-headful title="تعریف سناریو"/>
    <br/>
    <h4 v-if="inputShow === false">برای تغییر رخداد‌ها و اعمال، روی مؤلفه موردنظر دو بار کلیک کنید.</h4>
    <br/>
    <b-container v-if="inputShow">
      <b-form-textarea id="textarea1"
                          v-model="inputText"
                          placeholder="دستور موردنظر را اینجا تایپ کنید"
                          :rows="3"
                          :max-rows="6">
      </b-form-textarea>
      <br/>
      <br/>
      <b-button variant="success" @click="handleOk">تأیید</b-button>
      <b-button variant="primary" @click="handleReset">پاک کردن متن نوشته‌شده</b-button>
      <b-button variant="danger" @click="handleCancle">انصراف</b-button>
    </b-container>
    <br/>

    <!-- diagram part -->
    <v-stage ref="stage" :config="stageConfig">
      <state :startX="190" :startY="80" :stateName="'state' + inState"></state>
      <v-layer  ref="layer">
        <v-line :config="hLineConfig"></v-line>
        <v-line :config="vLineConfig"></v-line>
        <v-group v-for="item in list" :key="item.id">
          <v-line :config="item.vLine1Config" ></v-line>
          <v-group :config="item.group1Config">
            <v-line :config="item.eventConfig"></v-line>
            <v-text ref="eventtxt" :config="item.eventTextConfig" @dblclick="changeText"></v-text>
          </v-group>
          <v-line :config="item.line1Config"></v-line>
          <v-group :config="item.group2config">
            <v-rect :config="item.actionConfig"></v-rect>
            <v-text ref="actiontxt" :config="item.actionTextConfig" @dblclick="changeText"></v-text>
          </v-group>
          <v-line :config="item.line2Config"></v-line>
          <v-group :config="item.group3Config">
            <v-ellipse :config="item.stateConfig"></v-ellipse>
            <v-text ref="statetxt" :config="item.stateTextConfig" @dblclick="changeText"></v-text>
          </v-group>
        </v-group>
      </v-layer>
    </v-stage>
    <br/>
    <b-btn @click="goNextStep" variant="primary">مرحله بعد</b-btn>
    <br/>
    <br/>
  </b-container>
</template>

<script>
import State from '../../components/diagram_components/state.vue'

var width = window.innerWidth
var height = 600
var radiusX = 80
var radiusY = 30
var startX = 150
var startY = 200

export default {
  props: [
    'name',
    'things',
    'stateSum',
    'inState',
    'exitNumber',
    'scenario'
  ],
  components: {
    State
  },
  data () {
    return {
      list: [],
      number: 3,
      inputShow: false,
      component: null,
      inputText: '',
      stageConfig: {
        width: width,
        height: height,
        draggable: true
      },
      hLineConfig: {
        points: [startX + 80, startY - 40, startX + 80 + (this.exitNumber - 1) * 250, startY - 40],
        stroke: 'black',
        strokeWidth: 2,
        lineJoin: 'round'
      },
      vLineConfig: {
        points: [startX + 80, startY - 75, startX + 80, startY - 40],
        stroke: 'black',
        strokeWidth: 2,
        lineJoin: 'round'
      }
    }
  },
  mounted () {
    for (let index = 0; index < this.exitNumber; index++) {
      this.list.push({
        id: index,
        group1Config: {
          x: startX + index * 250,
          y: startY
        },
        group2config: {
          x: startX + index * 250,
          y: startY + 150
        },
        group3Config: {
          x: startX + 40 + index * 250,
          y: startY + 300
        },
        eventConfig: {
          points: [0, 0,
            160, 0,
            130, 30,
            160, 60,
            0, 60],
          stroke: 'black',
          strokeWidth: 2,
          closed: true
        },
        eventTextConfig: {
          text: 'event' + (index + 1),
          fill: 'black',
          fontSize: 12,
          x: 10,
          y: 10,
          width: 120,
          height: 50
        },
        line1Config: {
          points: [startX + 80 + index * 250, startY + 60, startX + 80 + index * 250, startY + 150],
          stroke: 'black',
          strokeWidth: 2,
          lineJoin: 'round'
        },
        actionConfig: {
          x: 0,
          y: 0,
          width: 160,
          height: 60,
          stroke: 'black',
          strokeWidth: 2
        },
        actionTextConfig: {
          text: 'action' + (index + 1),
          fill: 'black',
          fontSize: 12,
          x: 10,
          y: 10,
          width: 150,
          height: 50
        },
        line2Config: {
          points: [startX + 80 + index * 250, startY + 210, startX + 80 + index * 250, startY + 285],
          stroke: 'black',
          strokeWidth: 2,
          lineJoin: 'round'
        },
        stateConfig: {
          x: radiusX / 2,
          y: radiusY / 2,
          radius: {
            x: radiusX,
            y: radiusY
          },
          stroke: 'black',
          strokeWidth: 2
        },
        stateTextConfig: {
          text: 'state' + (index + 1),
          fill: 'black',
          fontSize: 15,
          x: 20,
          y: radiusY / 2 - 10,
          width: radiusX - 20,
          height: 30
        },
        vLine1Config: {
          points: [startX + 80 + index * 250, startY - 40, startX + 80 + index * 250, startY],
          stroke: 'black',
          strokeWidth: 2,
          lineJoin: 'round'
        }
      })
    }
  },
  methods: {
    changeText (comp) {
      this.inputShow = true // show input box
      this.component = comp
    },
    handleOk () {
      this.component.getStage().setText(this.inputText)
      this.$refs.layer.getStage().draw()
      this.inputText = ''
      this.component = null
      this.inputShow = false
    },
    handleReset () {
      this.inputText = ''
    },
    handleCancle () {
      this.inputText = ''
      this.component = null
      this.inputShow = false
    },
    createScenario () {
      var scenario = this.scenario
      var inStateScenario = []
      for (let index = 0; index < this.exitNumber; index++) {
        var inStateScenarioEntry = {}
        inStateScenarioEntry['event'] =
          this.$refs.eventtxt[index].getStage().getText()
        inStateScenarioEntry['action'] =
          this.$refs.actiontxt[index].getStage().getText()
        inStateScenarioEntry['go_to_state'] =
           this.$refs.statetxt[index].getStage().getText()
        inStateScenario.push(inStateScenarioEntry)
      }
      if (!scenario['scenario']) {
        scenario['scenario'] = {}
      }
      scenario['scenario']['state' + this.inState] = inStateScenario
      return scenario
    },
    goNextStep: function () {
      var scenario = this.createScenario()
      console.log(scenario)
      if (this.inState < this.stateSum) {
        this.$router.push({name: 'exit-number',
          params: { name: this.name,
            things: this.selectedThings,
            stateSum: this.stateSum,
            state: this.inState + 1,
            scenario: scenario }})
      } else {
        this.$router.push({name: 'check-scenario',
          params: { scenario: scenario }})
      }
    }
  }
}
</script>

<style>

</style>
