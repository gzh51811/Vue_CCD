<template>
  <div id="shiwu">
    <div id="Header">
      <div id="Header1">
        <div id="H1_0" class="iconF">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII="
            alt
            width="60%"
            height="60%"
          >
        </div>
        <div id="H1_1">
          <span>发现</span>
          甄选家
        </div>
        <div id="H1_2" class="iconF">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC"
            alt
            width="60%"
            height="60%"
          >
        </div>
        <div id="H1_3" @click="gotocart" class="iconF">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII="
            alt
            width="60%"
            height="60%"
          >
        </div>
      </div>
      <div id="Header2">
        <div id="H_top4">
          <ul>
            <li>推荐</li>
            <li>春鞋上新</li>
            <li>床品换季</li>
            <li>晒单</li>
            <li>达人</li>
            <li>上新</li>
            <li>HOME</li>
          </ul>
        </div>
      </div>
    </div>
    <div style="height:80px"></div>
    <div id="Scontent">
      <div data-tid="4035" class="m-tpls">
        <div class="u-name">
          <img
            src="https://yanxuan.nosdn.127.net/52bbfdc43780710303d7fceba3e382ec.png?imageView&amp;quality=65&amp;thumbnail=56y56"
            height="100%"
          >
          选妹
        </div>
        <div class="title">这些“断货王”平时等到望眼欲穿，这次严选一口气全都补单了！</div>
        <div class="u-pic">
          <img
            src="https://yanxuan.nosdn.127.net/7b8f18db78d572f036875a58529f6a16.jpg?imageView&amp;quality=65&amp;thumbnail=690y376"
            alt
            width="100%"
            height="100%"
          >
        </div>
        <div class="u-rcount">
          <i class="ico"></i>
          <span>203w人看过</span>
        </div>
      </div>
      <div data-tid="4036" class="m-tpls">
        <div class="u-name">
          <img
            src="https://yanxuan.nosdn.127.net/52bbfdc43780710303d7fceba3e382ec.png?imageView&amp;quality=65&amp;thumbnail=56y56"
            height="100%"
          >
          选妹
        </div>
        <div class="title">2019明前春茶新鲜上市，尝过这一口，才算不辜负春天</div>
        <div class="u-pic">
          <img
            src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&quality=65&thumbnail=690y376"
            alt
            width="100%"
            height="100%"
          >
        </div>
        <div class="u-rcount">
          <i class="ico"></i>
          <span>103w人看过</span>
        </div>
      </div>

      <div data-tid="4037" class="m-tpls">
        <div class="u-name">
          <img
            src="https://yanxuan.nosdn.127.net/52bbfdc43780710303d7fceba3e382ec.png?imageView&amp;quality=65&amp;thumbnail=56y56"
            height="100%"
          >
          选妹
        </div>
        <div class="title">即将进入流感和过敏高发季，衣物床品护肤品的更替，学问太多！</div>
        <div class="u-pic">
          <img
            src="https://yanxuan.nosdn.127.net/3c54a287b5a16abff2639ae253815510.jpg?imageView&quality=65&thumbnail=690y376"
            alt
            width="100%"
            height="100%"
          >
        </div>
        <div class="u-rcount">
          <i class="ico"></i>
          <span>143w人看过</span>
        </div>
      </div>
    </div>
    <div id="FooterUp"></div>
    <div id="Footer">
      <Xfooter Fnum="2"/>
    </div>
  </div>
</template>
<script>
import Xfooter from "../components/Xfooter.vue";
export default {
  components: {
    Xfooter
  },
  methods:{
    gotocart(){
      this.$router.push({ name: "cart" });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#shiwu {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fafafa;
}
#Header {
  width: 100%;
  height: 80px;
  background: #ffffff;
  position: fixed;
  z-index: 1;
  top: 0;
}
#Header1 {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom: #686868 1px solid;
}
.iconF {
  position: relative;
}
.iconF img {
  position: absolute;
  left: 20%;
  top: 20%;
}
#H1_0 {
  flex: 1;
}
#H1_1 {
  flex: 6;
  font-size: 15px;
  font-weight: bolder;
  text-align: center;
  line-height: 50px;
  color: rgb(100, 82, 82);
}
#H1_1 span {
  flex: 6;
  font-size: 18px;
  font-weight: bolder;
  line-height: 50px;
  color: rgb(134, 51, 51);
}
#H1_2 {
  flex: 1;
}
#H1_3 {
  flex: 1;
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
  width: 490px;
}
#Header2 #H_top4 ul li {
  flex: 1;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  color: #686868;
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

.m-tpls {
  margin-top: 20px;
}
#Scontent {
  width: 100%;
  background: #fff;
  margin: 0.2rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 10px;
}

.u-name {
  width: 100%;
  height: 20px;
  font-weight: bolder;
  font-size: 18px;
  line-height: 20px;
}
.title {
  width: 100%;
  font-size: 15px;
  padding: 3px 10px;
}
.u-rcount {
  font-size: 0.22rem;
  color: #999;
  line-height: 0.32rem;
  margin-top: 0.18rem;
}
</style>
