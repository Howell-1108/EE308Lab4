window.gPlayerNum = {
    playerNum: null,
    ZYPlayer: null,
    ZYLevel: null,
    playerPriceAry: null,
    priceRemain: null,
    playerNow: null,
};
cc.Class({
    extends: cc.Component,

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

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

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

    // update (dt) {},
});
