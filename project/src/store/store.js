// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化Vuex，创建一个仓库
const store = new Vuex.Store({
    // 状态
    state: {
        cartlist: []
    },
    // 修改数据的方法 真正改数据的操作
    mutations: {
        // 添加
        addCartList(state,goods){
            state.cartlist.push(goods);
        },
        // 修改数量
        changeQty(state, {_id ,qty}){
            state.cartlist.forEach(goods => {
                if (goods._id === _id){
                    goods.qty = qty;
                }
            })
        },
        // 删除商品
        removeGoods(state , _id){
            for (var i = 0;i<state.cartlist.length; i++){
                if(state.cartlist[i]._id === _id){
                    break;
                }
            }
            state.cartlist.splice(i,1);
        }

    }
})

export default store