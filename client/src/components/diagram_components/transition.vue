<template>
  <v-layer ref="layer">
    <v-group :config="group1Config">
      <v-line :config="eventConfig"></v-line>
      <v-text ref="eventtxt" :config="eventTextConfig"></v-text>
    </v-group>
    <v-line :config="line1Config"></v-line>
    <v-group :config="group2config">
      <v-rect :config="actionConfig"></v-rect>
      <v-text ref="actiontxt" :config="actionTextConfig"></v-text>
    </v-group>
    <v-line :config="line2Config"></v-line>
    <v-group :config="group3Config">
      <v-ellipse :config="stateConfig"></v-ellipse>
      <v-text ref="statetxt" :config="stateTextConfig"></v-text>
    </v-group>
  </v-layer>
</template>

<script>

var radiusX = 80
var radiusY = 30

export default {
  props: [
    'startX',
    'startY',
    'event',
    'action',
    'state'
  ],
  data () {
    return {
      group1Config: {
        x: this.startX,
        y: this.startY
      },
      group2config: {
        x: this.startX,
        y: this.startY + 150
      },
      group3Config: {
        x: this.startX + 40,
        y: this.startY + 300
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
        text: this.event,
        fill: 'black',
        fontSize: 12,
        x: 10,
        y: 10
      },
      line1Config: {
        points: [this.startX + 80, this.startY + 60, this.startX + 80, this.startY + 150],
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
        text: this.action,
        fill: 'black',
        fontSize: 12,
        x: 10,
        y: 10
      },
      line2Config: {
        points: [this.startX + 80, this.startY + 210, this.startX + 80, this.startY + 285],
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
        text: this.state,
        fill: 'black',
        fontSize: 15,
        x: radiusX / 2 - 20,
        y: radiusY / 2 - 10
      },
      show: false
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
