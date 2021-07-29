import Vue from 'vue'
import Vuex from 'vuex'
import { PIECECOLOR } from '@/assets/js/config.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		pieceColor: uni.getStorageSync(PIECECOLOR) || 'white', //玩家执棋子颜色
	},
	getters: {
		getPieceColor (state) {
			return state.pieceColor
		}
	},
    mutations: {
		setPieceColor (state, color) {
			state.pieceColor = color;
			uni.setStorageSync(PIECECOLOR, color)
		},
		clearHiscore (state) {
			state.pieceColor = '';
			uni.removeStorageSync(PIECECOLOR);
		}
	},
    actions: {}
})
export default store