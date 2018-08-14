<template>
  <Component :is="effectComponent" :color="color" :fontFile="fontFile" :flash="flash">
    <slot></slot>
  </Component>
</template>

<script>
import { VueBling,VueNeon } from './effects'
import props from './props'

export default {
  name: 'vue-neon-light',
  components:{
      VueBling,VueNeon
  },
  props,
  data(){
    return {
      inside:'',
      width: 0,
      height: 72,
    };
  },
  computed: {
    effectComponent(){
      return `Vue${this.effect.substring(0,1).toUpperCase()+this.effect.substring(1)}`
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$black: #000;

body {
  background: $black;
  margin: 0 auto;
  text-align: center;
  padding: 5em;
}

</style>
