window.gPlayerNum = {
    playerNum: null,
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
		gPlayerNum.playerNum = 1;
        // var audioMng = cc.find('Menu/AudioMng') || cc.find('Game/AudioMng')
        // if (audioMng) {
        //     audioMng = audioMng.getComponent('AudioMng');
        // }
       
    },

    start () {

    },

    // update (dt) {},
});
