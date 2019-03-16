<template>
  <div id="app">
    <div id="Footer">
<Xfooter />
    </div>
    
  </div>
</template>

<script>
import Xfooter from './components/Xfooter.vue'

export default {
  name: 'app',
  components: {
    Xfooter
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
#app { 
  padding: 0;
  margin: 0;
  width:100%;
  height:100%;
  position: absolute;
  background: yellow;
}
#Footer{
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
}
</style>
