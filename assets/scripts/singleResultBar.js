// 每条result的脚本
cc.Class({
    extends: cc.Component,

    properties: {
        // 这是第几个玩家的result条
        playerNo:{
			default: 0,
			type: cc.Integer
		},

        // 玩家的各个属性
        icon:{
			default: null,
			type: cc.Sprite
		},
        yixiu:{
			default: null,
			type: cc.Label
		},
        erju:{
			default: null,
			type: cc.Label
		},
        sijin:{
			default: null,
			type: cc.Label
		},
        sanhong:{
			default: null,
			type: cc.Label
		},
        duitang:{
			default: null,
			type: cc.Label
		},

    },


    onLoad: function () { 
        // 调试信息
        console.log(gPlayerNum.playerPriceAry[this.playerNo][0],
            gPlayerNum.playerPriceAry[this.playerNo][1],
            gPlayerNum.playerPriceAry[this.playerNo][2],
            gPlayerNum.playerPriceAry[this.playerNo][3],
            gPlayerNum.playerPriceAry[this.playerNo][4]);
        
        // 改变显示值
        this.yixiu.string = gPlayerNum.playerPriceAry[this.playerNo][0];
        this.erju.string = gPlayerNum.playerPriceAry[this.playerNo][1];
        this.sijin.string = gPlayerNum.playerPriceAry[this.playerNo][2];
        this.sanhong.string = gPlayerNum.playerPriceAry[this.playerNo][3];
        this.duitang.string = gPlayerNum.playerPriceAry[this.playerNo][4];

        // 如果不该显示就隐藏
        if(gPlayerNum.playerNum < this.playerNo + 1){
            this.enabled = false;
            this.icon.enabled = false;
            this.yixiu.enabled = false;
            this.erju.enabled = false;
            this.sijin.enabled = false;
            this.sanhong.enabled = false;
            this.duitang.enabled = false;
        }
    },
    
    start () {
    },
});
