import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import storage from 'assets/js/storage';
import {CART_CONTENT_KEY} from 'pages/cart/config';

Vue.use(Vuex);

const cartItems = [
    {
        id: 0,
        name: '',
        price: 0,
        pic: '',
        amount: 1,
        chosen: false
    }
];

export default new Vuex.Store({
    state: {
        cartItems
    },
    getters: {
        totalPrice(state) {
            if (state.cartItems.length) {
                return state.cartItems.reduce((total, currentValue) => { return total + currentValue.price * currentValue.amount * currentValue.chosen; }, 0);
            }
            return 0;
        }
    },
    mutations: {
        // 移除与传入id相同的商品
        removeCartItem(state, {itemId}) {
            state.cartItems = _.remove(state.cartItems, function(item) {
                return item.id !== itemId;
            });
            this.commit('updateItems');
        },

        // 添加到购物车，如果存在就amount加1，否则就添加该商品到数组最末端
        addCartItem(state, item) {
            // 查找是否已经存在传入的商品的序号
            let itemIndex = _.findIndex(state.cartItems, originItem => {
                return originItem.id === item.id;
            });

            // 根据序号去更新state
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].amount += 1;
            } else {
                item.amount = 1;
                item.chosen = false;
                state.cartItems.push(item);
            }
            this.commit('updateItems');
        },

        // 改变商品的个数
        changeAmount(state, {itemId, newAmount}) {
            let itemIndex = _.findIndex(state.cartItems, originItem => {
                return originItem.id === itemId;
            });

            state.cartItems[itemIndex].amount = newAmount;
            this.commit('updateItems');
        },

        // 从缓存中获取购物车列表
        getItems(state) {
            state.cartItems = storage.get(CART_CONTENT_KEY, []);
            state.cartItems = state.cartItems.map(item => {
                item.chosen = false;
                return item;
            });
        },

        // 将购物车列表更新到缓存
        updateItems(state) {
            storage.set(CART_CONTENT_KEY, state.cartItems);
        },

        // 选中购物车商品至结算列表
        chooseCartItem(state, itemInfo) {
            let itemId = itemInfo.id;
            let itemIndex = _.findIndex(state.cartItems, originItem => {
                return originItem.id === itemId;
            });

            state.cartItems[itemIndex].chosen = !state.cartItems[itemIndex].chosen;
        }
    }
});
