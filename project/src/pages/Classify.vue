<template>
  <div>
    <van-tree-select
      id="Vbox"
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @navclick="onNavClick"
      @itemclick="onItemClick"
    />
   <div id="Footer">
      <Xfooter Fnum="1"/>
    </div>
  </div>
</template>
<script>
import Xfooter from "../components/Xfooter.vue";
import Vue from "vue";
import { TreeSelect } from "vant";
Vue.use(TreeSelect);
export default {
  components: {
    Xfooter
  },
  data() {
    return {
      items: [
        {
          // 导航名称
          text: "推荐专区",
          // 该导航下所有的可选项
          children: [
            {
              text: "厨房换新颜",
              id: 1
              //   disabled: true
            },
            {
              text: "员工精选",
              id: 2
            },
            {
              text: "定义牛仔时代",
              id: 3
            },
            {
              text: "茶叶茶具低至7.4折",
              id: 4
            },
            {
              text: "居家特惠",
              id: 5
            },
            {
              text: "20元内选好物",
              id: 6
            },
            {
              text: "给你精致好睡眠",
              id: 7
            },
            {
              text: "爱吃福利站",
              id: 8
            },
            {
              text: "严选甄品",
              id: 9
            }
          ]
        },
        {
          // 导航名称
          text: "春季专区",
          // 该导航下所有的可选项
          children: [
            {
              text: "女士春季穿搭",
              id: 1
              //   disabled: true
            },
            {
              text: "男士春季穿搭",
              id: 2
            },
            {
              text: "换季收纳",
              id: 3
            },
            {
              text: "春日品茶正当时",
              id: 4
            },
            {
              text: "春季扫除必备",
              id: 5
            },
            {
              text: "开春健身季",
              id: 6
            },
            {
              text: "春季出游精选",
              id: 7
            },
            {
              text: "婴童春季换新",
              id: 8
            }
          ]
        },
        {
          // 导航名称
          text: "爆品专区",
          // 该导航下所有的可选项
          children: [
            {
              text: "居家生活",
              id: 1
              //   disabled: true
            },
            {
              text: "服饰鞋包",
              id: 2
            },
            {
              text: "美食酒水",
              id: 3
            },
            {
              text: "个护清洁",
              id: 4
            },
            {
              text: "运动旅行",
              id: 5
            },
            {
              text: "母婴亲子",
              id: 6
            },
            {
              text: "数码家电",
              id: 7
            }
          ]
        },
        {
          // 导航名称
          text: "新品专区",
          // 该导航下所有的可选项
          children: [
            {
              text: "居家生活新品",
              id: 1
              //   disabled: true
            },
            {
              text: "服饰鞋包新品",
              id: 2
            },
            {
              text: "美食酒水新品",
              id: 3
            },
            {
              text: "个护清洁新品",
              id: 4
            },
            {
              text: "运动旅行新品",
              id: 5
            },
            {
              text: "母婴亲子新品",
              id: 6
            },
            {
              text: "数码家电新品",
              id: 7
            },
            {
              text: "礼品特色新品",
              id: 8
            }
          ]
        },
        {
          // 导航名称
          text: "居家生活",
          // 该导航下所有的可选项
          children: [
            {
              text: "夏凉系列",
              id: 1
              //   disabled: true
            },
            {
              text: "主题床品",
              id: 2
            },
            {
              text: "材质精选",
              id: 3
            },
            {
              text: "床品件套",
              id: 4
            },
            {
              text: "被枕垫褥",
              id: 5
            },
            {
              text: "布艺软装",
              id: 6
            },
            {
              text: "毛巾浴巾",
              id: 7
            },
            {
              text: "客餐厅家具",
              id: 8
            },
            {
              text: "卧室家具",
              id: 9
            },
            {
              text: "办公书房家具",
              id: 10
            },
            {
              text: "小件家具",
              id: 11
            },
            {
              text: "灯具",
              id: 12
            },
            {
              text: "家饰",
              id: 13
            },
            {
              text: "收纳",
              id: 14
            },
            {
              text: "晾晒除味",
              id: 15
            },
            {
              text: "家庭医疗",
              id: 16
            },
            {
              text: "拖鞋",
              id: 17
            },
            {
              text: "锅具",
              id: 18
            },
            {
              text: "餐具",
              id: 19
            },
            {
              text: "水具杯壶",
              id: 20
            },
            {
              text: "茶咖酒具",
              id: 21
            },
            {
              text: "文具",
              id: 22
            },
            {
              text: "数码办公",
              id: 23
            },
            {
              text: "办公搭配",
              id: 24
            },
            {
              text: "办公家具",
              id: 25
            },
            {
              text: "宠物食品",
              id: 26
            },
            {
              text: "宠物用品",
              id: 27
            }
          ]
        },
        {
          // 导航名称
          text: "服饰鞋包",
          // 该导航下所有的可选项
          children: [
            {
              text: "早春穿搭",
              id: 1
              //   disabled: true
            },
            {
              text: "春季鞋履",
              id: 2
            },
            {
              text: "品质内衣",
              id: 3
            },
            {
              text: "男式T恤/POLO",
              id: 4
            },
            {
              text: "男式衬衫",
              id: 5
            },
            {
              text: "男式裤装",
              id: 6
            },
            {
              text: "男式牛仔",
              id: 7
            },
            {
              text: "男式针织衫/卫衣",
              id: 8
            },
            {
              text: "男式外套",
              id: 9
            },
            {
              text: "女式T恤/POLO",
              id: 10
            },
            {
              text: "女式衬衫",
              id: 11
            },
            {
              text: "女式裙装",
              id: 12
            },
            {
              text: "女式裤装",
              id: 13
            },
            {
              text: "女式牛仔",
              id: 14
            },
            {
              text: "女式针织衫/卫衣",
              id: 15
            },
            {
              text: "女式外套",
              id: 16
            },
            {
              text: "男式家居服",
              id: 17
            },
            {
              text: "女式家居服",
              id: 18
            },
            {
              text: "男式内裤",
              id: 19
            },
            {
              text: "女式内裤",
              id: 20
            },
            {
              text: "女式内衣",
              id: 21
            },
            {
              text: "男式内衣",
              id: 22
            },
            {
              text: "袜子",
              id: 23
            },
            {
              text: "女鞋",
              id: 24
            },
            {
              text: "男鞋",
              id: 25
            },
            {
              text: "拖鞋",
              id: 26
            },
            {
              text: "鞋配",
              id: 27
            },
            {
              text: "女士包袋",
              id: 28
            },
            {
              text: "男士包袋",
              id: 29
            },
            {
              text: "钱包小配件",
              id: 30
            },
            {
              text: "珠宝首饰",
              id: 31
            },
            {
              text: "眼镜墨镜",
              id: 32
            },
            {
              text: "腰带腕表",
              id: 33
            },
            {
              text: "腰带腕表",
              id: 34
            },
            {
              text: "围巾帽子",
              id: 35
            },
            {
              text: "Yessing上装",
              id: 36
            },
            {
              text: "Yessing下装",
              id: 37
            }
          ]
        },
        {
          // 导航名称
          text: "美食酒水",
          // 该导航下所有的可选项
          children: [
            {
              text: "饼干糕点",
              id: 1
              //   disabled: true
            },
            {
              text: "小食糖巧",
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: "个护清洁",
          // 该导航下所有的可选项
          children: [
            {
              text: "纸品湿巾",
              id: 1
              //   disabled: true
            },
            {
              text: "家庭清洁",
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: "母婴亲子",
          // 该导航下所有的可选项
          children: [
            {
              text: "儿童鞋",
              id: 1
              //   disabled: true
            },
            {
              text: "内衣配搭",
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: "运动旅行",
          // 该导航下所有的可选项
          children: [
            {
              text: "男式运动",
              id: 1
              //   disabled: true
            },
            {
              text: "女式运动",
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: "数码家电",
          // 该导航下所有的可选项
          children: [
            {
              text: "清洁电器",
              id: 1
              //   disabled: true
            },
            {
              text: "厨房电器",
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: "礼品特色",
          // 该导航下所有的可选项
          children: [
            {
              text: "进口尖货",
              id: 1
              //   disabled: true
            },
            {
              text: "日韩馆",
              id: 2
            }
          ]
        }
      ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
      // console.log(data.id+":"+data.text);
       this.$router.push({ name: "clist" });
    }
  }
};
</script>
<style scoped>

#Vbox {
  height: 100% !important;
  width: 100%;
  position: absolute;
  padding-bottom: 80px;
}
#Footer {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
}
</style>
