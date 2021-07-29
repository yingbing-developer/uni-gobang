<template>
	<view class="popup" v-if="visiable" @touchmove.stop.prevent="">
		<view class="mask" @tap="hide"></view>
		<view class="window">
			<view class="close" @tap="hide"></view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				visiable: false
			}
		},
		methods: {
			show () {
				this.visiable = true;
			},
			hide () {
				this.visiable = false;
			}
		}
	}
</script>

<style scoped>
	@keyframes scale  {
	  0% {
	    transform: translate(-50%, -50%) scale(0);
	  }
	  100% {
	    transform: translate(-50%, -50%) scale(1);
	  }
	}
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
	}
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.4);
	}
	.window {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 500rpx;
		max-height: 500rpx;
		min-height: 300rpx;
		animation: scale .2s;
		background-color: rgba(255,255,255,0.6);
		animation-fill-mode: forwards;
		border-radius: 10rpx;
	}
	.close {
		position: absolute;
		right: -25rpx;
		top: -25rpx;
		width: 50rpx;
		height: 50rpx;
		border-radius: 50rpx;
		border: 10rpx solid #DD524D;
		border-bottom: 10rpx solid transparent;
		transform: rotateZ(45deg);
	}
	.close::before, .close::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 8rpx;
		height: 40rpx;
		border-radius: 40rpx;
		background-color: #DD524D;
	}
	.close::after {
		transform: translate(-50%, -50%) rotateZ(90deg);
	}
</style>
