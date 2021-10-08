window.gPlayerNum = {
    playerNum: null, // 玩家总人数
    ZYPlayer: null, // 当前状元玩家
    ZYLevel: null, // 当前状元等级
    playerPriceAry: null, // 所有已得奖项
    priceRemain: null,//  剩余奖项
    playerNow: null,//  当前玩家
    btnType: null,// 当前按钮类型，1是下一位，0是试试手气
};
cc.Class({
    extends: cc.Component,

    // 当前玩家数的显示label
    properties: {
        numDisplay:{
			default: null,
			type: cc.Label
		},
    },

	plusPlayerNum: function () {
		// 最大人数是10
        if(gPlayerNum.playerNum < 10){
			gPlayerNum.playerNum += 1;
			// 更新 playerNum Label 的文字
			this.numDisplay.string =  gPlayerNum.playerNum;
		}       
    },

	minusPlayerNum: function () {
		// 最小人数是1
        if(gPlayerNum.playerNum > 1){
			gPlayerNum.playerNum -= 1;
			// 更新 playerNum Label 的文字
			this.numDisplay.string =  gPlayerNum.playerNum;
		}       
    },

    onLoad: function () {
        // 初始化当前按钮状态
        gPlayerNum.btnType = 0;
        // 初始化当前玩家
        gPlayerNum.playerNow = 1;
        // 初始化游戏人数
		gPlayerNum.playerNum = 1;
        // 初始化玩家获得奖项
        gPlayerNum.playerPriceAry = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
        ,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
        // 初始化状元
        gPlayerNum.ZYPlayer = 0;
        gPlayerNum.ZYLevel = 0;
        // 初始化剩余奖项
        gPlayerNum.priceRemain = [32,16,8,4,2];
    },

    start () {

    },
});
