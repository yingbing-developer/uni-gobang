<template>
	<view class="container">
		<!-- #ifndef H5 -->
		<gap-bar></gap-bar>
		<!-- #endif -->
		<view class="border">
			<view class="border-box border-top"></view>
			<view class="border-box border-bottom"></view>
		</view>
		<view class="title" v-if="ended">
			<text class="title-text">初级五子棋</text>
		</view>
		<view class="start" v-if="ended">
			<view>
				<view class="btn">开始游戏</view>
			</view>
			<view>
				<view class="btn">游戏设置</view>
			</view>
		</view>
		<view class="game-world" v-else>
			<view class="top">
				<piece type="black"></piece>
				<text class="top-text">3 : 3</text>
				<piece type="white"></piece>
			</view>
			<view class="top">
				<text class="top-text">玩家 VS 电脑</text>
			</view>
			<view class="board">
				<view class="lattice block" v-for="(item, index) in worldData" :key="index">
					<view class="circle"></view>
				</view>
				<view class="blocks">
					<view class="block" v-for="(item, index) in worldData" :key="index">
					</view>
				</view>
			</view>
			<view class="control">
				<view class="btns">
					<view class="btn">重玩</view>
					<view class="btn">结束</view>
					<view class="btn">悔棋</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import GapBar from '@/components/gap-bar/gap-bar.nvue';
	import Piece from '@/components/piece/piece.vue';
	import { deepClone } from '@/assets/js/utils.js';
	import { mapGetters, mapMutations } from 'vuex';
	const boards = 15 * 15;
	export default {
		data() {
			return {
				//棋盘数据
				worldData: [],
				//是否结束
				ended: false
			}
		},
		created() {
			this.init();
		},
		computed: {
			
		},
		methods: {
			init () {
				let worldData = []
				for ( let i = 0; i < boards; i++ ) {
					worldData.push(0);
				}
				this.worldData = deepClone(worldData);
			}
		},
		components: {
			GapBar,
			Piece
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/body.css");
	@import url("../../assets/css/board.css");
	@import url("../../assets/css/button.css");
	.container {
		height: 100vh;
		overflow: hidden;
		background-image: radial-gradient(#2ab28a, #118563);
	}
	.border {
		position: absolute;
		top: 30rpx;
		left: 30rpx;
		right: 30rpx;
		bottom: 30rpx;
		border: 2rpx solid rgba(255,255,255,0.4);
	}
	.border-box {
		position: absolute;
		width: 100%;
		left: 0;
		height: 30rpx;
	}
	.border-box::before, .border-box::after {
		content: '';
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		border: 2rpx solid rgba(255,255,255,0.4);
		background-color: #118563;
	}
	.border-box::before {
		left: -15rpx;
		top: 0
	}
	.border-box::after {
		right: -15rpx;
		top: 0;
	}
	.border-top {
		top: -15rpx;
	}
	.border-bottom {
		bottom: -15rpx;
	}
	.title {
		text-align: center;
		margin-top: 300rpx;
		font-size: 90rpx;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		color: #e68c0c;
		position: relative;
	}
	.title-text {
		position: relative;
		z-index: 3;
	}
	.title::before, .title::after {
		content: '初级五子棋';
		width: 100%;
		position: absolute;
		top: calc(50% + 2rpx);
		left: calc(50% + 2rpx);
		transform: translate(-50%, -50%);
	}
	.title::before {
		color: #9f6411;
	}
	.title::after {
		color: #5c3907;
		filter: blur(3rpx);
	}
	.start {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.start .btn {
		min-width: 120rpx;
		margin: 20rpx 0;
	}
	.game-world {
		margin-top: 50rpx;
	}
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10rpx 0 0 0;
	}
	.top-text {
		color: #F1F1F1;
		font-size: 25rpx;
		margin: 0 40rpx;
	}
	.btns {
		text-align: center;
	}
	.btns .btn {
		margin: 0 20rpx;
	}
</style>
