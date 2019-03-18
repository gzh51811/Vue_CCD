<template>
  <div id="app">

    <div id="Footer">
      <Xfooter />
    </div>
    
  </div>
</template>

<script>
import Xfooter from "./components/Xfooter.vue";

export default {
  name: "app",
  components: {
    Xfooter
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: yellow;
}
#Footer {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
}
</style>
