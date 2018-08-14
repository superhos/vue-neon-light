<template>
  <div class="vue-bling">
    <div class="bling-shape move">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-neon-light-bling',
  props: {
    msg: String
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$rotateDeg: 15deg;
$moveTime: 2.2s;

.vue-bling{
  background-color: #C71D32;
  display:inline-block;
  color: #FFF;
  border-radius: 4px;
  padding: 3px 6px;
  font-size:12px;
  box-sizing: border-box;
  position:relative;
  overflow:hidden;
  height:100%;

  .bling-shape{
    position:absolute;
    display:inline;
    left:0;
    top: -10px;
    height:150%;
    z-index:-1px;

     span{
      border: 5px solid rgba(255,255,255,.7);
      position:absolute;
      display:inline;
      height:inherit;
      top: - 50%;
      left:0;
      transform:rotate($rotateDeg);
      -ms-transform:rotate($rotateDeg); 	/* IE 9 */
      -moz-transform:rotate($rotateDeg); 	/* Firefox */
      -webkit-transform:rotate($rotateDeg); /* Safari 和 Chrome */
      -o-transform:rotate($rotateDeg); 	/* Opera */
    }

    span:last-child{
      border: 2px solid rgba(255,255,255,.7);
      left: -5px;
    }
  }
}
.move {
  animation: move $moveTime ease-in 0.2s infinite;
  -moz-animation: move $moveTime ease-in 0.2s infinite;	/* Firefox */
  -webkit-animation: move $moveTime ease-in 0.2s infinite;	/* Safari 和 Chrome */
  -o-animation: move $moveTime linease-inear 0.2s infinite;	/* Opera */
}

@keyframes move
{
  0% {
    left: -30%;
  }
  50% {
    left: 130%;
  }
  75% {
    left: -30%;
  }
  100% {
    left: -30%;
  }
}

@-moz-keyframes move /* Firefox */
{
  0% {
    left: -30%;
  }
  50% {
    left: 130%;
  }
  80% {
    left: -30%;
  }
  100% {
    left: -30%;
  }
}

@-webkit-keyframes move /* Safari 和 Chrome */
{
  0% {
    left: -30%;
  }
  50% {
    left: 130%;
  }
  80% {
    left: -30%;
  }
  100% {
    left: -30%;
  }
}

@-o-keyframes move /* Opera */
{
  0% {
    left: -30%;
  }
  50% {
    left: 130%;
  }
  80% {
    left: -30%;
  }
  100% {
    left: -30%;
  }
}
</style>
