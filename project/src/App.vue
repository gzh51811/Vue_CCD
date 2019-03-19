<template>
  <div id="app">
    <div id="Header">
      <div id="Header1">
        <div id="H_top1">
          <img
            src="./assets/hxm%2Fyanxuan-wap%2Fp%2F20161201%2Fstyle%2Fimg%2Ficon-normal%2FindexLogo-a90bdaae6b.png"
          >
        </div>
        <div id="H_top2">
          <input type="text" placeholder="搜索商品, 共21642款好物">
        </div>
        <div id="H_top3">
          <div id="H_log">登录</div>
        </div>
      </div>
      <div id="Header2">
        <div id="H_top4">
          <ul>
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>礼品特色</li>
          </ul>
        </div>
        <div id="H_top5">
          <img
            src="./assets/hxm%2Fyanxuan-wap%2Fp%2F20161201%2Fstyle%2Fimg%2Ficon-normal%2Farrow-down-3-799ded53ea.png"
            @click="changeTitleBanner"
          >
        </div>
      </div>

      <div id="Header3" v-if="titleBanner">
        <div id="H_top6">
          <div>全部频道</div>
          <img
            src="./assets/hxm%2Fyanxuan-wap%2Fp%2F20161201%2Fstyle%2Fimg%2Ficon-normal%2Farrow-down-3-799ded53ea.png"
            @click="changeTitleBanner"
            style="transform:rotate(180deg)"
          >
        </div>
        <div id="H_top7">
          <ul>
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>礼品特色</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="Lbt">
      <van-swipe :autoplay="3000" indicator-color="white" id="Lbt_box">
        <van-swipe-item>
          <img src="./assets/78f0190edc4048ff6ed9ceeb8cb37286.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/62c419fc64495e51b744944f74e96fb1.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/189731a75cb63f07475ed6db869d4f51.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/f0ef7f561879c5b3a9f68104209447b0.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/092383ec62e1ebb451968844f25b2d11.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/3021a36961db7b8d10ce249c0619280b.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./assets/cd9270d26547b1833d70d69a2fc99e61.jpg" alt>
        </van-swipe-item>
      </van-swipe>
    </div>
    <img src="./assets/tag.png" alt style="width:100%;">
    <ul id="Nav">
      <li>
        <img src="./assets/fede8b110c502ec5799702d5ec824792.png" alt>
        <div>居家生活</div>
      </li>
      <li>
        <img src="./assets/fb9dde0c1593536c18c8e12b6f49eb17.png" alt>
        <div>服饰鞋包</div>
      </li>
      <li>
        <img src="./assets/d916591adea776351e084016335e5820.png" alt>

        <div>美食酒水</div>
      </li>
      <li>
        <img src="./assets/6c3bd9d885c818b1f73e497335a68b47.png" alt>
        <div>个户清洁</div>
      </li>
      <li>
        <img src="./assets/63682bd2df06963251b2715e20f98a75.png" alt>
        <div>限时购</div>
      </li>
      <li>
        <img src="./assets/559d2a240ec20b096590a902217009ff.png" alt>
        <div>母婴亲子</div>
      </li>
      <li>
        <img src="./assets/23be40a05926faf2f2a81a08a1c53164.png" alt>
        <div>运动旅行</div>
      </li>
      <li>
        <img src="./assets/fbca8e1f2948f0c09fc7672c2c125384.png" alt>
        <div>数码家电</div>
      </li>
      <li>
        <img src="./assets/e83bd330713b66a8d4e8eb0cefed8996.png" alt>
        <div>礼品特色</div>
      </li>
      <li>
        <img src="./assets/51f5a91f10ba745ec68340b98315acf5.png" alt>
        <div>超级会员</div>
      </li>
    </ul>
    <div style="padding:10px;width:100%;">
      <div id="banner">
        <div id="bannerLeft">
          <div>新人专享</div>
          <img src="./assets/a020bed0783956f650abc016e386bead.png">
        </div>
        <div id="bannerRight">
          <div id="bannerRightTop">
            <h4>福利社</h4>
            <h5>今日特价</h5>
            <img src="./assets/630931188e2ea52919da9fa8aab3dcc9.jpg" alt>
          </div>
          <div id="bannerRightBottom">
            <h4>新人拼团</h4>
            <h5>1件起包邮</h5>
            <img src="./assets/4216343e6afe1c3b00ee3566595f5afa.png" alt>
          </div>
        </div>
      </div>
    </div>
    <img src="./assets/6877587aa8aeb17f5d66aa1044d97f06.jpg" alt style="width:100%;">
    <img src="./assets/d917d63c17c39835df0e3e04bfbb8c87.jpg" alt style="width:100%;">
    <img src="./assets/881533d9e66e57566114b85b67ab2205.jpg" alt style="width:100%;">
    <div id="FooterUp"></div>
    <div id="Footer">
<<<<<<< HEAD
      <Xfooter Fnum="0"/>
    </div>
=======
      <Xfooter />
    </div>

>>>>>>> 73efa649945784e3dde8620215845b6e69fe8854
  </div>
</template>

<script>
<<<<<<< HEAD
import Xfooter from "./components/Xfooter.vue";

export default {
  name: "app",
  data() {
    return {
      titleBanner: false,
      test:1,
    };
  },
  components: {
    Xfooter
  },
  methods: {
    changeTitleBanner(){
      this.titleBanner=!this.titleBanner;
    }    
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
#Header {
  width: 100%;
  height: 70px;
  background: #ffffff;
  position: fixed;
  z-index: 1;
  top: 0;
}
#Header3 {
  position: absolute;
  top: 40px;
  border-top: #cccccc 1px dashed;
  height: 150px;
  width: 100%;
  z-index: 2;
  background: #ffffff;
}
#Header3  #H_top6{
position: relative
;width:100%;height: 20px;
}
#Header3  #H_top6 img{
position: absolute
;right:5px;top:2px;height: 20px;
}
#Header3  #H_top7 {
width: 100%;height: 100px;
}
#Header3  #H_top7 ul{
width: 100%;height: 100px;display: flex;flex-direction: row;flex-wrap: wrap;
padding: 5px;
}
#Header3  #H_top7 ul li{
border: indianred solid 1px;text-align: center;border-radius: 5px;height: 25px;flex: 20%;margin:5px 15px;; 
}
#Header1 {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
}
#Header1 #H_top1 {
  flex: 2;
  height: 40px;
  padding: 8px 10px;
}
#Header1 #H_top1 img {
  height: 24px;
}
#Header1 #H_top2 {
  flex: 8;
  height: 40px;
  padding: 6px 2px;
  position: relative;
}
#Header1 #H_top2 input {
  height: 28px;
  width: 95%;
  background: #cccccc;
  color: #686868;
  border: none;
  border-radius: 5px;
}
#Header1 #H_top3 {
  flex: 2;
  height: 40px;
  padding: 5px 2px;
  position: relative;
}
#Header1 #H_top3 #H_log {
  position: absolute;
  width: 40px;
  height: 20px;
  border: 1px #b4282d solid;
  border-radius: 7px;
  color: #b4282d;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  top: 50%;
  margin-top: -10px;
}
#Header2 {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
}
#Header2 #H_top4 {
  height: 30px;
  flex: 9;
  overflow: hidden;
  overflow-x: scroll;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#Header2 #H_top4 ul {
  height: 30px;
  display: flex;
  flex-direction: row;
  width: 630px;
}
#Header2 #H_top4 ul li {
  flex: 1;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  color: #686868;
}
#Header2 #H_top5 {
  height: 30px;
  flex: 1;
  position: relative;
}
#Header2 #H_top5 img {
  height: 18px;
  width: 18px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -8px;
  margin-top: -8px;
}
#Lbt {
  margin-top: 70px;
  width: 100%;
}
#Lbt_box {
  width: 100%;
}
#Lbt_box img {
  width: 100%;
}
#Nav {
  height: 180px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: #ffffff;
}
#Nav li {
  flex: 20%;
  height: 90px;
  position: relative;
}
#Nav li img {
  width: 70%;
  position: absolute;
  left: 15%;
  top: 5%;
}
#Nav li div {
  width: 60px;
  height: 20px;
  font-size: 14px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  color: #686868;
  top: 70%;
  text-align: center;
}
#banner {
  height: 200px;
}
#bannerLeft {
  height: 100%;
  width: 40%;
  float: left;
  margin-right: 2%;
  border-radius: 10px;
  background: pink;
}
#bannerLeft div {
  padding-left: 10px;
  margin: 10% 10%;
}
#bannerLeft img {
  width: 80%;
  margin: 0 10%;
}
#bannerRight {
  height: 100%;
  width: 58%;
  float: left;
}
#bannerRightTop {
  height: 49%;
  width: 100%;
  margin-bottom: 2%;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  background: greenyellow;
}
#bannerRightTop img {
  position: absolute;
  height: 80%;
  right: 5%;
  top: 10%;
}
#bannerRightBottom {
  height: 49%;
  width: 100%;
  margin-bottom: 2%;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  background: greenyellow;
}
#bannerRightBottom img {
  position: absolute;
  height: 80%;
  right: 5%;
  top: 10%;
}
#FooterUp {
  height: 80px;
}
#Footer {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
}
</style>
=======
  import Xfooter from './components/Xfooter.vue'

  export default {
    name: 'app',
    components: {
      Xfooter
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  #app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
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
>>>>>>> 73efa649945784e3dde8620215845b6e69fe8854
