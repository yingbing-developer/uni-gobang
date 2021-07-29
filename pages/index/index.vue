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
				<view class="directions">
					<view class="direction direction-top" @tap="moveCursor(-15)"></view>
					<view class="direction direction-left" @tap="moveCursor(-1)"></view>
					<view class="direction direction-right" @tap="moveCursor(1)"></view>
					<view class="direction direction-bottom" @tap="moveCursor(15)"></view>
					<view class="confirm-btn" @tap="dropChess(playerPieceRound)"></view>
				</view>
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
	</view>
</template>

<script>
	import GapBar from '@/components/gap-bar/gap-bar.nvue';
	import Piece from '@/components/piece/piece.vue';
	import Popup from '@/components/popup/popup.vue';
	import { deepClone, countOf } from '@/assets/js/utils.js';
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
				ended: false,
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
				lastEnemyDropIndex: 0
			}
		},
		created() {
			this.init();
		},
		computed: {
			...mapGetters(['getPieceColor']),
			playerPieceRound () {
				return this.getPieceColor == 'white' ? 1 : 2;
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
			},
			startGame () {
				this.ended = false;
				this.init();
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
				this.init();
			},
			//再来一局
			nextGame () {
				this.init();
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
			//玩家落子
			dropChess (round) {
				if ( this.nowRound != round ) {
					return;
				}
				if ( this.worldData[this.cursorIndex] == 0 ) {
					this.$set(this.worldData, this.cursorIndex , round);
					//判断是否有五子连珠
					let isWin = this.isWin(round);
					if ( isWin ) {
						uni.showModal({
							title: '提示',
							content: round == this.playerPieceRound ? '你赢了' : '你输了',
							confirmText: '再来一局',
							success: (res) => {
								if ( res.confirm ) {
									if ( round == this.playerPieceRound ) {
										this.winNums += 1;
									} else {
										this.failNums += 1;
									}
									this.nextGame();
								} else {
									this.endGame();
								}
							}
						})
						return;
					}
					//判断棋盘有没有放满棋子
					let isFull = this.worldData.every((item) => {
						return item > 0
					})
					if ( isFull ) {
						uni.showModal({
							title: '提示',
							content: '平局',
							confirmText: '再来一局',
							success: (res) => {
								if ( res.confirm ) {
									this.nextGame();
								} else {
									this.endGame();
								}
							}
						})
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
				let cursotIndex = this.cursorIndex;
				//计算出落子位置处于哪一行
				let line = 0;
				let count = 0;
				for ( let i = 0; i < 15; i++ ) {
					if ( cursotIndex >= i * 15 && cursotIndex < (i + 1) * 15 ) {
						line = i
					}
				}
				//横线赢法
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex - i;
					if ( index >= line * 15 && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex + i;
					if ( index < (line + 1) * 15 && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				if ( count - 1 == 5 ) {
					return true;
				} else {
					count = 0;
				}
				
				//竖线赢法
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex - (i * 15);
					if ( index >= 0 && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex + (i * 15);
					if ( index < boards && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				if ( count - 1 == 5 ) {
					return true;
				} else {
					count = 0;
				}
				
				//正斜线赢法
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex - (i * 16);
					if ( index >= 0 && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex + (i * 16);
					if ( index < boards && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				if ( count - 1 == 5 ) {
					return true;
				} else {
					count = 0;
				}
				
				//反斜线赢法
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex - (i * 14);
					if ( index >= 0 && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				for ( let i = 0; i < 5; i++ ) {
					let index = cursotIndex + (i * 14);
					if ( index < boards && this.worldData[index] == round ) {
						count += 1;
					} else {
						break;
					}
				}
				if ( count - 1 == 5 ) {
					return true;
				} else {
					count = 0;
				}
				return false
			},
			//计算当前点的结构
			getPosition (position, round) {
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
				for ( let i in count ) {
					//横线
					if ( i == 0 ) {
						for ( let i = 0; i < 5; i++ ) {
							let index = position + i;
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
						for ( let i = 0; i < 5; i++ ) {
							//横线
							let index = position + i;
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
					}
					//竖线 正斜线 反斜线
					if ( i > 0 ) {
						for ( let i = 0; i < 5; i++ ) {
							let index = i == 1 ? position - (i * 15) : index == 2 ? position - (i * 16) : position - (i * 14);
							if ( index >= 0 && this.worldData[index] == round ) {
								count[i]++;
							} else {
								if ( index >= 0 && this.worldData[index] == 0 ) {
									start[i] = true
								} else {
									start[i] = false
								}
								break;
							}
						}
						for ( let i = 0; i < 5; i++ ) {
							let index = i == 1 ? position + (i * 15) : index == 2 ? position + (i * 16) : position + (i * 14);
							if ( index < boards && this.worldData[index] == round ) {
								count[i]++;
							} else {
								if ( index < boards && this.worldData[index] == 0 ) {
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
				let types = [];
				for ( let i in count ) {
					switch (count[i]) {
						case 2:
							if ( start[i] && end[i] ) types.push('DL');
							break;
						case 3:
							if ( start[i] && end[i] ) {
								types.push('TL');
							} else if ( (start[i] && !end[i]) || (!start[i] && end[i]) ) {
								types.push('TN')
							}
							break;
						case 4:
							if ( start[i] && end[i] ) {
								types.push('FL');
							} else if ( (start[i] && !end[i]) || (!start[i] && end[i]) ) {
								types.push('FN')
							}
							break;
						case 5:
							types.push('Five');
							break;
						default:
							break;
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
				} else {//其余状况均为零分
					return 0;
				}
			},
			//计算权重
			computedWeight () {
				let weights = [];
				for ( let i = 0; i < boards; i++ ) {
					if ( this.worldData[i] == 0 ) {
						let round = this.playerPieceRound == 1 ? 2 : 1;
						//计算电脑在这个位置上的权重
						let weight1 = this.getPosition(i, round);
						//计算玩家在这个位置上的权重
						let weight2 = this.getPosition(i, this.playerPieceRound) - 1;
						//谁的权重大存谁 玩家的权重要减1，比电脑的权重小点
						weights.push(weight1 > weight2 ? weight1 : weight2);
					}
				}
				let index = weights.indexOf(3000);
				if ( index > -1 ) {
					
				}
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
</style>
