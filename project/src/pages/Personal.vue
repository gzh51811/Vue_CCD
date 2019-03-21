<template>
  <div>
    <div id="Pheader">
      <div id="userImg">
        <img src="../assets/8945ae63d940cc42406c3f67019c5cb6.png">
      </div>
      <div id="userMa">
        <img src="../assets/284c220c232c5edf76f250848b4dbd17.png">
        <img src="../assets/20190318104703.png">
      </div>
      <div id="userMsg">
        <div>{{username}}</div>
        <h4>普通用户</h4>
      </div>
    </div>
    <div id="Pcontent">
      <ul>
        <li>
          <div class="Pjlt Pjlt1"></div>
          <p>我的订单</p>
        </li>
        <li>
          <div class="Pjlt Pjlt2"></div>
          <p>周六一起拼</p>
        </li>
        <li>
          <div class="Pjlt Pjlt3"></div>
          <p>售后服务</p>
        </li>
        <li>
          <div class="Pjlt Pjlt4"></div>
          <p>邀请返利</p>
        </li>
        <li>
          <div class="Pjlt Pjlt5"></div>
          <p>优惠券</p>
        </li>
        <li>
          <div class="Pjlt Pjlt6"></div>
          <p>我的红包</p>
        </li>
        <li>
          <div class="Pjlt Pjlt7"></div>
          <p>优先购</p>
        </li>
        <li>
          <div class="Pjlt Pjlt8"></div>
          <p>礼品卡</p>
        </li>
        <li>
          <div class="Pjlt Pjlt9"></div>
          <p>积分中心</p>
        </li>
        <li>
          <div class="Pjlt Pjlt10"></div>
          <p>会员俱乐部</p>
        </li>
        <li>
          <div class="Pjlt Pjlt11"></div>
          <p>地址管理</p>
        </li>
        <li>
          <div class="Pjlt Pjlt12"></div>
          <p>账号安全</p>
        </li>
        <li>
          <div class="Pjlt Pjlt13"></div>
          <p>帮助和客服</p>
        </li>
        <li>
          <div class="Pjlt Pjlt14"></div>
          <p>意见反馈</p>
        </li>
        <li></li>
      </ul>
    </div>
    <div id="Plog" Fnum="4" >
      <div id="Plogout" @click="quit">退出登录</div>
    </div>
    <div id="Footer">
      <Xfooter Fnum="4"/>
    </div>
  </div>
</template>
<script>
import Xfooter from "../components/Xfooter.vue";
export default {
  data() {
    return {
      username:''
    };
  },
  components: {
    Xfooter
  },
  created(){
      let token = localStorage.getItem('user');
      if (token) {
        let arr = JSON.parse(token);
        this.$data.username = arr.name;

      }
  },
  methods:{
    quit(){
      localStorage.removeItem('user');
      this.$router.push({name:'llogin'});
    },
    
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#Pheader {
  width: 100%;
  height: 150px;
  position: relative;
  background: #cb9855;
}
#Pheader #userImg {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -40px;
  border-radius: 50px;
  overflow: hidden;
}
#Pheader #userImg img {
  width: 100%;
  height: 100%;
}
#Pheader #userMsg {
  width: 150px;
  height: 50px;
  position: absolute;
  left: 110px;
  top: 50%;
  margin-top: -25px;
  color: #ffffff;
}
#Pheader #userMsg div {
  margin-bottom: 5px;
  font-size: 18px;
}
#Pheader #userMa {
  width: 100px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 20px;
}
#Pheader #userMa img {
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
#Pcontent {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}
#Pcontent ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#Pcontent ul li {
  flex: 30%;
  height: 80px;
  border: 1px #686868 solid;
  position: relative;
}
/* #Pcontent ul:after {
  content: "";
  flex: 30%;
} */
.Pjlt {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 10%;
  margin-left: -20px;
  background: url("../assets/s4184c581c7-1b75c4216b.png");
  background-size: 40px auto;
}
#Pcontent ul li p {
  width: 80px;
  height: 20px;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -40px;
  margin-top: 43px;
  text-align: center;
  color: #686868;
}

.Pjlt1 {
  background-position: 0 323px;
}
.Pjlt2 {
  background-position: 0 235px;
}
.Pjlt3 {
  background-position: 0 705px;
}
.Pjlt4 {
  background-position: 0 370px;
}
.Pjlt5 {
  background-position: 0 660px;
}
.Pjlt6 {
  background-position: 0 90px;
}
.Pjlt7 {
  background-position: 0 135px;
}
.Pjlt8 {
  background-position: 0 565px;
}
.Pjlt9 {
  background-position: 0 185px;
}
.Pjlt10 {
  background-position: 0 280px;
}
.Pjlt11 {
  background-position: 0 755px;
}
.Pjlt12 {
  background-position: 0 40px;
}
.Pjlt13 {
  background-position: 0 515px;
}
.Pjlt14 {
  background-position: 0 610px;
}
#Plog {
  width: 100%;
  height: 140px;
  padding-top: 10px;
  padding-bottom: 80px;
  background: #f4f4f4;
}
#Plogout {
  width: 100%;
  height: 50px;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  background: #ffffff;
}
#Footer {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
}
</style>
