<template>
  <v-layer ref="layer">
    <v-group :config="groupConfig">
      <v-ellipse :config="ellipseConfig"></v-ellipse>
      <v-text ref="text" :config="textConfig"></v-text>
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
    'stateName'
  ],
  data () {
    return {
      groupConfig: {
        x: this.startX,
        y: this.startY
      },
      ellipseConfig: {
        x: radiusX / 2,
        y: radiusY / 2,
        radius: {
          x: radiusX,
          y: radiusY
        },
        stroke: 'black',
        strokeWidth: 2
      },
      textConfig: {
        text: this.stateName,
        fill: 'black',
        fontSize: 15,
        x: radiusX / 2 - 20,
        y: radiusY / 2 - 10
      }
    }
  }
}
</script>

<style>

</style>
