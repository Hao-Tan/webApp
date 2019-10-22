import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import storage from 'assets/js/storage';
import {CART_CONTENT_KEY} from 'pages/cart/config';

Vue.use(Vuex);

const cartItems = [
    {
        name: '',
        price: '',
        pic: '',
        amount: 1
    }
];

export default new Vuex.Store({
    state: {
        cartItems
    },
    mutations: {
        // 移除与传入名称相同的商品
        removeCartItem(state, {itemName}) {
            state.cartItems = _.remove(state.cartItems, function(item) {
                return item.name !== itemName;
            });
            this.commit('updateItems');
        },

        // 添加到购物车，如果存在就amount加1，否则就添加该商品到数组最末端
        addCartItem(state, item) {
            // 查找是否已经存在传入的商品的序号
            let itemIndex = _.findIndex(state.cartItems, originItem => {
                return originItem.name === item.name;
            });

            // 根据序号去更新state
            if (itemIndex >= 0) {
                this.commit('changeAmount', {itemName: item.name, amount: state.cartItems[itemIndex].amount + 1});
            } else {
                item.amount = 1;
                state.cartItems.push(item);
            }
            this.commit('updateItems');
        },

        // 改变商品的个数
        changeAmount(state, {itemName, newAmount}) {
            let itemIndex = _.findIndex(state.cartItems, originItem => {
                return originItem.name === itemName;
            });
            // console.log(state.cartItems[itemIndex].amount);
            // state.cartItems[itemIndex].amount = newAmount;
            this.commit('updateItems');
        },

        // 从缓存中获取购物车列表
        getItems(state) {
            state.cartItems = storage.get(CART_CONTENT_KEY, []);
        },

        // 将购物车列表更新到缓存
        updateItems(state) {
            storage.set(CART_CONTENT_KEY, state.cartItems);
        }
    }
});
