<template>
	<view class="container" @touchmove="dropMove" @touchend="dropEnd">
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
				<view class="btn" @tap="startGame">开始游戏</view>
			</view>
			<view>
				<view class="btn" @tap="$refs.setting.show()">游戏设置</view>
			</view>
		</view>
		<view class="game-world" v-else>
			<view class="top">
				<piece :type="nowPieceColor"></piece>
				<text class="top-text">{{winNums}} : {{failNums}}</text>
				<piece :type="nowPieceColor == 'white' ? 'black' : 'white'"></piece>
			</view>
			<view class="top">
				<view class="round">
					<text class="round-text" v-if="nowRound == playerPieceRound">☛</text>
				</view>
				<text class="top-text">玩家 VS 电脑</text>
				<view class="round">
					<text class="round-text" v-if="nowRound != playerPieceRound">☚</text>
				</view>
			</view>
			<view class="board">
				<view class="lattice block" v-for="(item, index) in worldData" :key="index">
					<view class="circle"></view>
				</view>
				<view class="blocks">
					<view class="block" v-for="(item, index) in worldData" :key="index">
						<view class="cursor" v-if="cursorIndex == index">
							<view class="cursor-line cursor-top"></view>
							<view class="cursor-line cursor-bottom"></view>
							<piece class="cursor-piece" :type="nowPieceColor" v-if="(touchStart.x > 0 || touchStart.y > 0) && item <= 0"></piece>
						</view>
						<piece :type="item == 1 ? 'white' : 'black'" v-if="item > 0"></piece>
					</view>
				</view>
			</view>
			<view class="control">
				<view class="btns">
					<view class="btn" @tap="resetGame">重玩</view>
					<view class="btn" @tap="endGame">结束</view>
					<view class="btn" @tap="regretChess">悔棋</view>
					<view class="btn" @tap="$refs.setting.show()">设置</view>
				</view>
				<!-- <view class="directions">
					<view class="direction direction-top" @tap="moveCursor(-15)"></view>
					<view class="direction direction-left" @tap="moveCursor(-1)"></view>
					<view class="direction direction-right" @tap="moveCursor(1)"></view>
					<view class="direction direction-bottom" @tap="moveCursor(15)"></view>
					<view class="confirm-btn" @tap="dropChess(playerPieceRound)"></view>
				</view> -->
				<view class="drop-btn" @touchstart="dropStart">{{btnText}}</view>
			</view>
		</view>
		<popup ref="setting">
			<view class="setting">
				<view class="setting-piece">
					<piece type="white" size="60"></piece>
					<piece type="black" size="60"></piece>
				</view>
				<view class="btn" @tap="setPiece('white')">我要执白棋</view>
				<view class="btn" @tap="setPiece('black')">我要执黑棋</view>
			</view>
		</popup>
		<view class="tip" v-if="tipText">
			<text class="tip-text">{{tipText}}</text>
			<view>
				<view class="btn" @tap="nextGame">再来一局</view>
			</view>
		</view>
	</view>
</template>

<script>
	import GapBar from '@/components/gap-bar/gap-bar.nvue';
	import Piece from '@/components/piece/piece.vue';
	import Popup from '@/components/popup/popup.vue';
	import { deepClone, countOf, indexAllOf } from '@/assets/js/utils.js';
	import { mapGetters, mapMutations } from 'vuex';
	const boards = 15 * 15;
	const Integers = {
		'Five': 3000,//活五得分
		'FFDL': 2900,//双活四得分
		'FFSL': 2800,//活四冲四得分
		'FTDL': 2700,//活四活三得分
		'FL': 2600,//活四得分
		'FFNL': 2500,//双冲四得分
		'FTSL': 2400,//冲四活三得分
		'TTDL': 2300,//双活三得分
		'TTSL': 2200,//活三死三得分
		'TDDL': 2100,//活三活二得分
		'FN': 2000,//冲四得分
		'TL': 2000,//活三得分
		'TN': 1900,//死三得分
		'DL': 1900,//活二得分
	}
	export default {
		data() {
			return {
				//棋盘数据
				worldData: [],
				//是否结束
				ended: true,
				//当前局玩家执棋子的颜色
				nowPieceColor: '',
				//光标索引
				cursorIndex: 112,
				//当前回合执行人 1 表示白棋, 2表示黑棋
				nowRound: 2,
				//玩家失败回数
				failNums: 0,
				//玩家赢的回数
				winNums: 0,
				//玩家最后落棋的位置
				lastPlayerDropIndex: 0,
				//对手最后落棋的位置
				lastEnemyDropIndex: 0,
				//提示
				tipText: '',
				touchStart: {
					x: 0,
					y: 0
				}
			}
		},
		created() {
			this.init();
		},
		computed: {
			...mapGetters(['getPieceColor']),
			playerPieceRound () {
				return this.nowPieceColor == 'white' ? 1 : 2;
			},
			btnText () {
				return this.touchStart.x == 0 && this.touchStart.y == 0 ? '按此下棋' :  '松开落子'
			}
		},
		methods: {
			...mapMutations(['setPieceColor']),
			//初始化
			init () {
				let worldData = []
				for ( let i = 0; i < boards; i++ ) {
					worldData.push(0);
				}
				this.worldData = deepClone(worldData);
				this.nowPieceColor = this.getPieceColor;
				this.nowRound =2;
				this.cursorIndex = 112;
				this.lastPlayerDropIndex = 0;
				this.lastEnemyDropIndex = 0;
				this.tipText = '';
			},
			//开始游戏
			startGame () {
				this.ended = false;
				this.init();
				//当玩家执白棋时，电脑先下棋
				if ( this.playerPieceRound == 1 ) {
					this.computedWeight();
				}
			},
			//结束游戏
			endGame () {
				this.ended = true;
				this.failNums = 0;
				this.winNums = 0;
				this.init();
			},
			//重玩游戏
			resetGame () {
				this.failNums = 0;
				this.winNums = 0;
				this.startGame();
			},
			//再来一局
			nextGame () {
				this.startGame();
			},
			//悔棋
			regretChess () {
				if ( this.nowRound != this.playerPieceRound ) {
					return;
				}
				if ( !this.lastPlayerDropIndex || !this.lastEnemyDropIndex ) {
					uni.showToast({
						icon: 'none',
						title: '不能再悔棋了'
					})
					return;
				}
				this.$set(this.worldData, this.lastPlayerDropIndex, 0);
				this.$set(this.worldData, this.lastEnemyDropIndex, 0);
				this.cursorIndex = this.lastEnemyDropIndex;
				this.lastPlayerDropIndex = 0;
				this.lastEnemyDropIndex = 0;
			},
			//设置执棋颜色
			setPiece (color) {
				this.setPieceColor(color);
				uni.showToast({
					icon: 'none',
					title: '设置棋子成功，将在下一局开始应用'
				})
				this.$refs.setting.hide();
			},
			//移动光标
			moveCursor (value) {
				if ( this.nowRound != this.playerPieceRound ) {
					return;
				}
				let cursorIndex = 0;
				if ( value < 0 ) {
					cursorIndex = this.cursorIndex + value >= 0 ? (this.cursorIndex + value ): (this.cursorIndex + (14 * 15))
				} else {
					cursorIndex = this.cursorIndex + value < 225 ? (this.cursorIndex + value) : (this.cursorIndex - (14 * 15));
				}
				this.cursorIndex = cursorIndex;
			},
			//落子
			dropChess (round) {
				if ( this.nowRound != round ) {
					return;
				}
				if ( this.worldData[this.cursorIndex] == 0 ) {
					this.$set(this.worldData, this.cursorIndex , round);
					//判断是否有五子连珠
					let isWin = this.isWin(round);
					if ( isWin ) {
						this.tipText = round == this.playerPieceRound ? '你赢了' : '你输了';
						if ( round == this.playerPieceRound ) {
							this.winNums += 1;
						} else {
							this.failNums += 1;
						}
						return;
					}
					//判断棋盘有没有放满棋子
					let isFull = this.worldData.every((item) => {
						return item > 0
					})
					if ( isFull ) {
						this.tipText = '平局';
						return;
					}
					
					//更换当前下棋手
					this.nowRound = round == 1 ? 2 : 1;
					//记录玩家最后落子位置，用于悔棋
					if ( round == this.playerPieceRound ) {
						this.lastPlayerDropIndex = this.cursorIndex;
						setTimeout(() => {
							this.computedWeight();
						}, 300)
					} else {
						this.lastEnemyDropIndex = this.cursorIndex;
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: '不能在棋子上面落子'
					})
				}
			},
			//判断当前是否有棋子五连珠
			isWin (round) {
				let weights = this.getPosition(this.cursorIndex, round);
				if ( weights == 3000 ) {
					return true;
				}
				return false
			},
			//计算当前点的结构
			getPosition (position, round) {
				//计算当前点处于哪一行
				let line = 0;
				for ( let i = 0; i < 15; i++ ) {
					if ( position >= i * 15 && position < (i + 1) * 15 ) {
						line = i
					}
				}
				//当前点的连珠数量
				let count = [0,0,0,0];
				//当前点连珠前方是否封闭 false 代表封闭, true 代表未封闭
				let start = [false,false,false,false];
				//当前点连珠后方是否封闭 false 代表封闭, true 代表未封闭
				let end = [false,false,false,false];
				
				//判断该点的横线，竖线，正斜线，反斜线上有多少连在一起的棋子，两边有无阻挡
				for ( let i in count ) {
					//横线
					if ( i == 0 ) {
						for ( let j = 1; j < 5; j++ ) {
							let index = position - j;
							if ( index >= line * 15 && this.worldData[index] == round ) {
								count[i]++;
							} else {
								if ( index >= line * 15 && this.worldData[index] == 0 ) {
									start[i] = true
								} else {
									start[i] = false
								}
								break;
							}
							
						}
						for ( let j = 1; j < 5; j++ ) {
							let index = position + j;
							if ( index < (line + 1) * 15 && this.worldData[index] == round ) {
								count[i]++;
							} else {
								if ( index < (line + 1) * 15 && this.worldData[index] == 0 ) {
									end[i] = true
								} else {
									end[i] = false
								}
								break;
							}
						}
					} else {
						//竖线 正斜线 反斜线
						for ( let j = 1; j < 5; j++ ) {
							let index = i== 1 ? position - (j * 15) : i == 2 ? position - (j * 16) : position - (j * 14);
							if ( index >= (line - j) * 15 && index < (line - j + 1) * 15 && index >= 0 && this.worldData[index] == round ) {
								count[i]++;
							} else {
								if ( index >= (line - j) * 15 && index < (line - j + 1) * 15 && index >= 0 && this.worldData[index] == 0 ) {
									start[i] = true
								} else {
									start[i] = false
								}
								break;
							}
						}
						for ( let j = 1; j < 5; j++ ) {
							let index = i == 1 ? position + (j * 15) : i == 2 ? position + (j * 16) : position + (j * 14);
							if ( index >= (line + j) * 15 && index < (line + j + 1) * 15 && index < boards && this.worldData[index] == round ) {
								count[i]++;
							} else {
								if ( index >= (line + j) * 15 && index < (line + j + 1) * 15 && index < boards && this.worldData[index] == 0 ) {
									end[i] = true
								} else {
									end[i] = false
								}
								break;
							}
						}
					}
					count[i]++
				}
				
				//根据横线，竖线，正斜线，反斜线上的情况计算该点的分数
				let types = [];
				for ( let i in count ) {
					if ( count[i] == 2 ) {
						if ( start[i] && end[i] ) types.push('DL');
					} else if ( count[i] == 3 ) {
						if ( start[i] && end[i] ) {
							types.push('TL');
						} else if ( (start[i] && !end[i]) || (!start[i] && end[i]) ) {
							types.push('TN')
						}
					} else if ( count[i] == 4 ) {
						if ( start[i] && end[i] ) {
							types.push('FL');
						} else if ( (start[i] && !end[i]) || (!start[i] && end[i]) ) {
							types.push('FN')
						}
					} else if ( count[i] >= 5 ) {
						types.push('Five');
					}
				}
				if ( types.indexOf('Five') > -1 ) {//活五得分
					return Integers['Five']
				} else if ( countOf(types, 'FL') > 1 ) {//双活四得分
					return Integers['FFDL']
				} else if ( types.indexOf('FL') > -1 && types.indexOf('FN') > -1 ) {//活四冲四得分
					return Integers['FFSL']
				} else if ( types.indexOf('FL') > -1 && types.indexOf('TL') > -1 ) {//活四活三得分
					return Integers['FTDL']
				} else if ( types.indexOf('FL') > -1 ) {//活四得分
					return Integers['FL']
				} else if ( countOf(types, 'FN') > 1 ) {//双冲四得分
					return Integers['FFNL']
				} else if ( types.indexOf('FN') > -1 && types.indexOf('TL') > -1 ) {//冲四活三得分
					return Integers['FTSL']
				} else if ( countOf(types, 'TL') > 1 ) {//双活三得分
					return Integers['TTDL']
				} else if ( types.indexOf('TL') > -1 && types.indexOf('TN') > -1 ) {//活三死三得分
					return Integers['TTSL']
				} else if ( types.indexOf('TL') > -1 && types.indexOf('DL') > -1 ) {//活三活二得分
					return Integers['TDDL']
				} else if ( types.indexOf('FN') > -1) {//冲四得分
					return Integers['FN']
				} else if ( types.indexOf('TL') > -1) {//活三得分
					return Integers['TL']
				} else if ( types.indexOf('TN') > -1) {//死三得分
					return Integers['TN']
				} else if ( types.indexOf('DL') > -1) {//活二得分
					return Integers['DL']
				} else {//其余状况均为1分
					return 1;
				}
			},
			//计算权重
			computedWeight () {
				let weights = [];
				let round = this.playerPieceRound == 1 ? 2 : 1;
				for ( let i = 0; i < boards; i++ ) {
					if ( this.worldData[i] == 0 ) {
						//计算电脑在这个位置上的权重
						let weight1 = this.getPosition(i, round);
						//计算玩家在这个位置上的权重
						let weight2 = this.getPosition(i, this.playerPieceRound) - 1;
						//谁的权重大存谁 玩家的权重要减1，比电脑的权重小点
						weights.push(weight1 > weight2 ? weight1 : weight2);
					} else {
						//当此点已经有棋子时得分为零,表示不能下子
						weights.push(0);
					}
				}
				let index = -1;
				for ( let i in Integers ) {
					if ( indexAllOf(weights, Integers[i]).length > 0 ) {
						index = indexAllOf(weights, Integers[i])[~~(Math.random() * indexAllOf(weights, Integers[i]).length)];
						break;
					}
					if ( indexAllOf(weights, Integers[i] - 1).length > 0 ) {
						index = indexAllOf(weights, Integers[i] - 1)[~~(Math.random() * indexAllOf(weights, Integers[i] - 1).length)];
						break;
					}
				}
				if ( index == -1 ) {
					if ( this.worldData[112] != 0 ) {
						let arr = indexAllOf(this.worldData, 0);
						index = arr[~~(Math.random() * arr.length)];
					} else {
						index = 112;
					}
				}
				this.cursorIndex = index;
				this.dropChess(round);
			},
			dropStart (e) {
				if ( this.nowRound != this.playerPieceRound ) {
					return;
				}
				if ( e.touches.length > 1 ) {
					return;
				}
				let touch = e.touches[0];
				this.touchStart.x = touch.pageX;
				this.touchStart.y = touch.pageY;
			},
			dropMove (e) {
				if ( this.nowRound != this.playerPieceRound ) {
					return;
				}
				if ( e.touches.length > 1 ) {
					return;
				}
				if ( this.touchStart.x == 0 && this.touchStart.y == 0 ) {
					return;
				}
				let touch = e.touches[0];
				let x = touch.pageX - this.touchStart.x;
				let y = touch.pageY - this.touchStart.y;
				let value = 0;
				if ( Math.abs(x) > Math.abs(y) ) {
					value = Math.floor(Math.abs(x) / (uni.upx2px(600) / 12));
					value = x < 0 ? (-value) : value;
				} else {
					value = Math.floor(Math.abs(y) / (uni.upx2px(600) / 12)) * 15;
					value = y < 0 ? (-value) : value;
				}
				if ( Math.abs(value) > 0 ) {
					this.touchStart.x = touch.pageX;
					this.touchStart.y = touch.pageY;
				}
				this.moveCursor(value);
			},
			dropEnd () {
				if ( this.nowRound != this.playerPieceRound ) {
					return;
				}
				if ( this.touchStart.x == 0 && this.touchStart.y == 0 ) {
					return;
				}
				this.touchStart.x = 0;
				this.touchStart.y = 0;
				this.dropChess(this.playerPieceRound);
			}
		},
		onBackPress(event) {
			if ( event.from == 'backbutton' ) {
				if ( this.$refs.setting.visiable ) {
					this.$refs.setting.hide();
					return true;
				}
			}
			return false
		},
		components: {
			GapBar,
			Piece,
			Popup
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/body.css");
	@import url("../../assets/css/board.css");
	@import url("../../assets/css/button.css");
	@import url("../../assets/css/control.css");
	.container {
		height: 100vh;
		overflow: hidden;
		background-image: radial-gradient(#2ab28a, #118563);
		position: relative;
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
	.round {
		width: 30rpx;
		line-height: 10rpx;
		text-align: center;
	}
	.round-text {
		color: #DD524D;
		font-size: 25rpx;
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
	.setting {
		text-align: center;
	}
	.setting-piece {
		display: flex;
		justify-content: space-between;
		margin: 0 130rpx;
		margin-top: 80rpx;
	}
	.setting .btn {
		margin: 40rpx 20rpx;
	}
	.tip {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 4rpx solid #DD524D;
		background-color: rgba(255,255,255,0.6);
		padding: 10rpx 20rpx;
		text-align: center;
		box-shadow: 0 0 20rpx rgba(0,0,0,0.6);
		z-index: 10;
	}
	.tip .btn {
		margin-top: 10rpx;
	}
	.tip-text {
		font-size: 26rpx;
		font-weight: bold;
	}
	.drop-btn {
		background-color: rgba(255,255,255,0.6);
		color: white;
		font-size: 24rpx;
		text-align: center;
		width: 400rpx;
		margin: 100rpx auto 0 auto;
		padding: 20rpx 0;
		position: relative;
		z-index: 1;
	}
</style>
