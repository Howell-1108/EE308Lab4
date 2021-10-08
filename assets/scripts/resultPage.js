cc.Class({
    extends: cc.Component,

    properties: {
        // 状元板块
        ZYIcon: {
            default: null,
            type: cc.Sprite
        },
        ZYNumDisplay:{
			default: null,
			type: cc.Label
		},
        ZYPic: {
            default: null,
            type: cc.Sprite
        },
        ZYWordDisplay:{
			default: null,
			type: cc.Label
		},

        player2:{
			default: null,
			type: cc.Label
		},
        player3:{
			default: null,
			type: cc.Label
		},
        player4:{
			default: null,
			type: cc.Label
		},
        player5:{
			default: null,
			type: cc.Label
		},
        player6:{
			default: null,
			type: cc.Label
		},
        player7:{
			default: null,
			type: cc.Label
		},
        player8:{
			default: null,
			type: cc.Label
		},
        player9:{
			default: null,
			type: cc.Label
		},
        player10:{
			default: null,
			type: cc.Label
		},

        // 玩家头像
        playerIcons: [cc.SpriteFrame],
        
    },

    onLoad: function () {
        // 隐藏不需要的玩家列表
        if(gPlayerNum.playerNum < 2){
            this.player2.enabled = false;
        }
        if(gPlayerNum.playerNum < 3){
            this.player3.enabled = false;
        }
        if(gPlayerNum.playerNum < 4){
            this.player4.enabled = false;
        }
        if(gPlayerNum.playerNum < 5){
            this.player5.enabled = false;
        }
        if(gPlayerNum.playerNum < 6){
            this.player6.enabled = false;
        }
        if(gPlayerNum.playerNum < 7){
            this.player7.enabled = false;
        }
        if(gPlayerNum.playerNum < 8){
            this.player8.enabled = false;
        }
        if(gPlayerNum.playerNum < 9){
            this.player9.enabled = false;
        }
        if(gPlayerNum.playerNum < 10){
            this.player10.enabled = false;
        }

        // 如果还没产生状元，隐藏状元板块
        if(gPlayerNum.ZYPlayer == 0){
            this.ZYPic.enabled = false;
            this.ZYNumDisplay.enabled = false;
            this.ZYIcon.enabled = false;
            this.ZYWordDisplay.enabled = false;
        }else{
            // 让状元板块显示
            this.ZYPic.enabled = true;
            this.ZYNumDisplay.enabled = true;
            this.ZYIcon.enabled = true;
            this.ZYWordDisplay.enabled = true;

            // 设置内容
            this.ZYNumDisplay.string =  gPlayerNum.ZYPlayer;
            this.ZYIcon.spriteFrame = this.playerIcons[gPlayerNum.ZYPlayer - 1];
        }
    },

    start () {

    },
});
