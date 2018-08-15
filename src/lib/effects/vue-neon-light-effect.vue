<template>
  <div class="neon-light">
    <!-- <Component :is="effectComponent" /> -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" :style="svgStyle"><defs>
         <filter id="glow">
           <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
           <feMerge>
             <feMergeNode in="coloredBlur"></feMergeNode>
             <feMergeNode in="SourceGraphic"></feMergeNode>
           </feMerge>
         </filter>

       </defs><!-- Logo Container -->
       <g class="fade">
    		 <!-- Outside -->
    		 <g :style="{fill:color}" v-html="inside">
         </g>
      </g>
    </svg>
  </div>
</template>

<script>
import TextToSVG from 'text-to-svg'
import props from '../props'

export default {
  name: 'vue-neon-light-effect',
  props,
  data(){
    return {
      inside:'',
      width: 0,
      height: 72,
      words: '',
      lang: 'en',
      svgStyle: {
        boxSizing: 'border-box',
      }
    };
  },
  mounted(){
    // Check
    if (!this.fontFile){
      throw new Error(`Property 'fontFile' is necessary.`);
    }

    // Get the content
    this.words = this.$slots.default[0].text;
    // Check the Language
    this.lang = this.isCHN(this.words)?'cn':'en';

    let _this = this;
    const textToSVG = TextToSVG.load(this.fontFile,function(err,textToSVG){
      // Divide to single letter
      for (const i in _this.words){
        // Setting
        const options = {x: _this.width + 10, y: 0, anchor: 'left top'};
        let svg = textToSVG.getSVG(_this.words[i],options);
        let matchs = svg.match(/(?<=").*?(?=")/g);
        _this.width += parseInt(matchs[4]);
        _this.height = (_this.lang === 'cn'?Math.max(_this.height, parseInt(matchs[6])):parseInt(matchs[6]));
        let path = svg.match(/\<path\s*(.*?)\/\>/g)[0];
        // if flash
        if (_this.flash){
          path = path.replace('<path ',`<path ${_this.$options._scopeId} class="random${Math.round(Math.random()*10)+1}"`)
        }
        _this.inside += path;
      }
      _this.width += 20;
    })
  },
  methods:{
    isCHN(val){
        const regchn = new RegExp("[\\u4E00-\\u9FFF]+","g");
        return regchn.test(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$black: #000;

// Animation Classes
.fade {
  animation: fade 3s infinite;
}
.random1 {
  animation: random 8s infinite;
}
.random2 {
  animation: random 7s infinite;
  animation-delay: 2s;
}
.random3 {
  animation: random 6s infinite;
  animation-delay: 4s;
}
.random4 {
  animation: random 5s infinite;
  animation-delay: 6s;
}

// Animations
@keyframes fade {
  0%, 100% {
    opacity: 0.7;
    filter: url(#glow);
  }
  50% {
    opacity: 1;
    filter: url(#glow);
  }
}

@keyframes random {
  0%, 9%, 11% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
}
</style>
