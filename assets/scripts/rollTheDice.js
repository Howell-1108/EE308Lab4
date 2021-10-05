// var nowPrice = require("global").nowPrice;
// var diceAry = require("global").diceAry;

var btnPressed = 0;
cc.Class({
    extends: cc.Component,
    

     properties: {
        pressedScale: 1,
        transDuration: 0,

    },

    // // 博饼函数
    // rollTheDice: function(){
    //     var diceAry = [0,0,0,0,0,0];
    //     for(var i = 0; i < 6 ;i++){
    //         diceAry[i] = Math.ceil(Math.random()*6);
    //         console.log(diceAry[i]);
    //     }
    // },


    // LIFE-CYCLE CALLBACKS:

    
    onLoad: function () {
        var self = this;
        // var audioMng = cc.find('Menu/AudioMng') || cc.find('Game/AudioMng')
        // if (audioMng) {
        //     audioMng = audioMng.getComponent('AudioMng');
        // }
        self.initScale = this.node.scale;
        self.button = self.getComponent(cc.Button);
        self.scaleDownAction = cc.scaleTo(self.transDuration, self.pressedScale);
        self.scaleUpAction = cc.scaleTo(self.transDuration, self.initScale);
        function onTouchDown (event) {
            this.stopAllActions();
            // if (audioMng) audioMng.playButton();
            this.runAction(self.scaleDownAction);
        }
        function onTouchUp (event) {
            this.stopAllActions();
            this.runAction(self.scaleUpAction);
            cc.find("Canvas").getComponent("game").rollingNow();

            // // 摇骰子
            // //var diceAry = [0,0,0,0,0,0]; // 骰子数列
            // var diceBuck = [0,0,0,0,0,0,0]; // 骰子桶，duceBuck[i]是摇出点数为i的骰子个数
            // for(var i = 0; i < 6 ;i++){
            //     diceAry[i] = Math.ceil(Math.random()*6); 
            //     diceBuck[diceAry[i]]++;           
            // }
            // console.log("本次摇骰子：%d %d %d %d %d %d",diceAry[0],diceAry[1],diceAry[2],diceAry[3],diceAry[4],diceAry[5]);
            // console.log("本次摇骰子桶：1：%d; 2：%d; 3：%d; 4：%d; 5：%d; 6：%d",diceBuck[1],diceBuck[2],diceBuck[3],diceBuck[4],diceBuck[5],diceBuck[6]);
            
            // /*
            // 判定奖项
            // -1 无 
            // 0 一秀 4
            // 1 二举 44
            // 2 四进 四个同
            // 3 三红 444
            // 4 对堂 123456
            // 5 状元 4444
            // 6 五子 五个同
            // 7 五王 44444
            // 8 六博黑 六个同
            // 9 遍地锦 111111
            // 10 满堂红 444444
            // 11 状元插金花 444411
            // */
            // var priceLevel = -1;
            // if(diceBuck[4] == 4 && diceBuck[1] == 2){
            //     // 状元插金花 444411
            //     priceLevel = 11;
            //     console.log("状元插金花");
            // }else if(diceBuck[4] == 6){
            //     // 满堂红 444444
            //     priceLevel = 10;
            //     console.log("满堂红");
            // }else if(diceBuck[1] == 6){
            //     // 遍地锦 111111
            //     priceLevel = 9;
            //     console.log("遍地锦");
            // }else if(diceBuck[2] == 6 || diceBuck[3] == 6 || diceBuck[5] == 6 || diceBuck[6] == 6){
            //     // 六博黑 六个同
            //     priceLevel = 8;
            //     console.log("六博黑");
            // }else if(diceBuck[4] == 5){
            //     // 五王 44444
            //     priceLevel = 7;
            //     console.log("五王");
            // }else if(diceBuck[1] == 5 || diceBuck[2] == 5 || diceBuck[3] == 5 || diceBuck[5] == 5 || diceBuck[6] == 5){
            //     // 五子 五个同
            //     priceLevel = 6;
            //     console.log("五子");
            // }else if(diceBuck[4] == 4){
            //     // 状元 4444
            //     priceLevel = 5;
            //     console.log("状元");
            // }else if(diceBuck[1] == 1 && diceBuck[2] == 1 && diceBuck[3] == 1 && diceBuck[4] == 1 && diceBuck[5] == 1 && diceBuck[6] == 1){
            //     // 对堂 123456
            //     priceLevel = 4;
            //     console.log("对堂");
            // }else if(diceBuck[4] == 3){
            //     // 三红 444
            //     priceLevel = 3;
            //     console.log("三红");
            // }else if(diceBuck[1] == 4 || diceBuck[2] == 4 || diceBuck[3] == 4 || diceBuck[5] == 4 || diceBuck[6] == 4){
            //     // 四进 四个同
            //     priceLevel = 2;
            //     console.log("四进");
            // }else if(diceBuck[4] == 2){
            //     // 二举 44
            //     priceLevel = 1;
            //     console.log("二举");
            // }else if(diceBuck[4] == 1){
            //     // 一秀 4
            //     priceLevel = 0;
            //     console.log("一秀");
            // }else{
            //     // 无 
            //     priceLevel = -1;
            //     console.log("啥都没有捏");
            // }

            // nowPrice = priceLevel;


    }
        function onTouchCancel (event){
            this.stopAllActions();
            this.runAction(self.scaleUpAction);
        }


        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
        this.node.on('touchcancel', onTouchCancel, this.node);
    },


    start () {

    },

    // update (dt) {},
});
