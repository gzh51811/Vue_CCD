<template>
  <div id="Xfoot">
    <div class="Dfooter_box" @click="goto0">
      <div class="Dfooter_img" id="Dimg1"></div>
      <div class="Dfooter_font">首页</div>
    </div>
    <div class="Dfooter_box" @click="goto1">
      <div class="Dfooter_img" id="Dimg2"></div>
      <div class="Dfooter_font">分类</div>
    </div>
    <div class="Dfooter_box" @click="goto2">
      <div class="Dfooter_img" id="Dimg3"></div>
      <div class="Dfooter_font">识物</div>
    </div>
    <div class="Dfooter_box" @click="goto3">
      <div class="Dfooter_img" id="Dimg4"></div>
      <div class="Dfooter_font">购物车</div>
    </div>
    <div class="Dfooter_box" @click="goto4">
      <div class="Dfooter_img" id="Dimg5"></div>
      <div class="Dfooter_font">个人</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Fnum"],
  mounted() {
    if (this.Fnum == "0") {
      document.getElementById("Dimg1").style.backgroundPosition="0 -200px";
      document.getElementsByClassName("Dfooter_font")[0].style.color="#be1928"
    } else if (this.Fnum == "1") {
      document.getElementById("Dimg2").style.backgroundPosition="0 -100px";
      document.getElementsByClassName("Dfooter_font")[1].style.color="#be1928"
    } else if (this.Fnum == "2") {      
      document.getElementById("Dimg3").style.backgroundPosition="0 -300px";
      document.getElementsByClassName("Dfooter_font")[2].style.color="#be1928"
    } else if (this.Fnum == "3") {
      document.getElementById("Dimg4").style.backgroundPosition="0 0";
      document.getElementsByClassName("Dfooter_font")[3].style.color="#be1928"
    } else if (this.Fnum == "4") {
      document.getElementById("Dimg5").style.backgroundPosition="0 -400px";
      document.getElementsByClassName("Dfooter_font")[4].style.color="#be1928"
    }
  },methods: {
    goto0(){
      this.$router.push({ name: "app" });
    },
    goto1(){
      this.$router.push({ name: "list" });
    },
    goto2(){
      this.$router.push({ name: "shiwu" });
    },
    goto3(){
      this.$router.push({ name: "cart" });
    },
    goto4(){
      this.$router.push({ name: "personal" });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#Xfoot {
  width: 100%;
  height: 80px;
  background: #ffffff;
  border-top: #eee .0625rem solid;
  display: flex;
  flex-direction: row;
}

.Dfooter_box {
  text-align: center;
  flex: 1;
  padding-top: 10px;
}
.Dfooter_font {
  height: 35px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #686868;
}
.Dfooter_img {
  background: url("../assets/hxm%2Fyanxuan-wap%2Fp%2F20161201%2Fstyle%2Fimg%2Fsprites%2FtabBar-s43a0dc8a7d-de25ef8e19.png");
  text-align: center;
  height: 40px;
  width: 40px;
  overflow: hidden;
  margin: 0 auto;
}
/* 贼几把神奇的精灵图 */
#Dimg1 {
  background-position: 0 -250px;
}
/* #Dimg1 {
  background-position: 0 -200px;
} */
#Dimg2 {
  background-position: 0 -150px;
}
/* #Dimg2 {
  background-position: 0 -100px;
} */
#Dimg3 {
  background-position: 0 -350px;
}
/* #Dimg3 {
  background-position: 0 -300px;
} */
#Dimg4 {
  background-position: 0 -50px;
}
/* #Dimg4 {
  background-position: 0 0;
} */
#Dimg5 {
  background-position: 0 -450px;
}
/* #Dimg5 {
  background-position: 0 -400px;
} */
</style>
