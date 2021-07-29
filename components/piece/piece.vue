<template>
	<view class="piece">
		<view
		class="piece-item"
		:class="{'white-piece': type == 'white', 'black-piece': type == 'black'}"
		:style="{
			width: size + 'rpx',
			height: size + 'rpx',
			'border-radius': size + 'rpx'
		}"
		></view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'white'
			},
			size: {
				type: String | Number,
				default: 30
			}
		}
	}
</script>

<style scoped>
	.piece-item {
		box-shadow: 2rpx 2rpx 5rpx rgba(255,255,255,0.2) inset, -2rpx -2rpx 5rpx rgba(255,255,255,0.2) inset, 0 0 10rpx rgba(0,0,0,0.3);
		position: relative;
	}
	.piece-item::before {
		content: '';
		position: absolute;
		width: 33%;
		height: 13%;
		border-radius: 13%;
		top: 24%;
		left: 13%;
		transform: rotateZ(-40deg);
	}
	.black-piece {
		background-image: radial-gradient(center, #1a1d1c, #232726);
	}
	.black-piece::before {
		background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.3));
	}
	.white-piece {
		background-image: radial-gradient(center, #e5e5e5, #f2f0f0);
	}
	.white-piece::before {
		background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.3));
	}
</style>
