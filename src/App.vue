<template>
  <div id="app">
    <VueNeonLight :fontFile="font" :flash="true" style="margin-bottom:15px">霓虹灯效果</VueNeonLight>
    <VueNeonLight color="#ecf554" :flash="true">Sevens Chan</VueNeonLight>
    <VueNeonLight :flash="true" color="#00ced1">Vue Neon Light</VueNeonLight>
  </div>
</template>

<script>
import VueNeonLight from './lib/vue-neon-light.vue'
import fontpath from '../public/bb1093.TTF'
export default {
  name: 'app',
  components: {
    VueNeonLight
  },
  data(){
    return {
      font: fontpath
    }
  }
}
</script>

<style lang="scss">
body,html{
  background: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin:0 auto;
  width:580px;
  margin-top: 160px;
}
</style>
