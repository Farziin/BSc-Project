<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store/index'

export default {
  name: 'App',
  store
}
</script>

<style>
@font-face {
  font-family: MyIRANSans;
  font-style: normal;
  font-weight: normal;
  src: url('./assets/fonts/eot/IRANSansWeb.eot');
  src: url('./assets/fonts/eot/IRANSansWeb.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
      url('./assets/fonts/woff2/IRANSansWeb.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
      url('./assets/fonts/woff/IRANSansWeb.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url('./assets/fonts/ttf/IRANSansWeb.ttf') format('truetype');
}

#app {
  font-family: MyIRANSans, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
  text-align: right;
  color: #2c3e50;
}
</style>
