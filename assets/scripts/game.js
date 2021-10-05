cc.Class({
    extends: cc.Component,

    properties: {
        dicePrefab:{
            default: null,
            type: cc.Prefab
        },

        rollBtn: cc.Node,

    },
    onLoad: function () {
        this.spawnNewDice();
        // let rollBTN = this.rollBtn;
        // console.log('--> rollBTN.name:', rollBTN.name); 
        // rollBTN.getComponent('rollTheDice').game = this;
        // console.log(rollBTN.btnPressed);
    },

    rollingNow: function () {
        // 摇骰子
            var diceAry = [0,0,0,0,0,0]; // 骰子数列
            var diceBuck = [0,0,0,0,0,0,0]; // 骰子桶，duceBuck[i]是摇出点数为i的骰子个数
            var priceLevel = -1; // 奖项等级
            for(var i = 0; i < 6 ;i++){
                diceAry[i] = Math.ceil(Math.random()*6); 
                diceBuck[diceAry[i]]++;           
            }
            console.log("本次摇骰子：%d %d %d %d %d %d",diceAry[0],diceAry[1],diceAry[2],diceAry[3],diceAry[4],diceAry[5]);
            console.log("本次摇骰子桶：1：%d; 2：%d; 3：%d; 4：%d; 5：%d; 6：%d",diceBuck[1],diceBuck[2],diceBuck[3],diceBuck[4],diceBuck[5],diceBuck[6]);
            
            /*
            判定奖项
            -1 无 
            0 一秀 4
            1 二举 44
            2 四进 四个同
            3 三红 444
            4 对堂 123456
            5 状元 4444
            6 五子 五个同
            7 五王 44444
            8 六博黑 六个同
            9 遍地锦 111111
            10 满堂红 444444
            11 状元插金花 444411
            */
           
            if(diceBuck[4] == 4 && diceBuck[1] == 2){
                // 状元插金花 444411
                priceLevel = 11;
                console.log("状元插金花");
            }else if(diceBuck[4] == 6){
                // 满堂红 444444
                priceLevel = 10;
                console.log("满堂红");
            }else if(diceBuck[1] == 6){
                // 遍地锦 111111
                priceLevel = 9;
                console.log("遍地锦");
            }else if(diceBuck[2] == 6 || diceBuck[3] == 6 || diceBuck[5] == 6 || diceBuck[6] == 6){
                // 六博黑 六个同
                priceLevel = 8;
                console.log("六博黑");
            }else if(diceBuck[4] == 5){
                // 五王 44444
                priceLevel = 7;
                console.log("五王");
            }else if(diceBuck[1] == 5 || diceBuck[2] == 5 || diceBuck[3] == 5 || diceBuck[5] == 5 || diceBuck[6] == 5){
                // 五子 五个同
                priceLevel = 6;
                console.log("五子");
            }else if(diceBuck[4] == 4){
                // 状元 4444
                priceLevel = 5;
                console.log("状元");
            }else if(diceBuck[1] == 1 && diceBuck[2] == 1 && diceBuck[3] == 1 && diceBuck[4] == 1 && diceBuck[5] == 1 && diceBuck[6] == 1){
                // 对堂 123456
                priceLevel = 4;
                console.log("对堂");
            }else if(diceBuck[4] == 3){
                // 三红 444
                priceLevel = 3;
                console.log("三红");
            }else if(diceBuck[1] == 4 || diceBuck[2] == 4 || diceBuck[3] == 4 || diceBuck[5] == 4 || diceBuck[6] == 4){
                // 四进 四个同
                priceLevel = 2;
                console.log("四进");
            }else if(diceBuck[4] == 2){
                // 二举 44
                priceLevel = 1;
                console.log("二举");
            }else if(diceBuck[4] == 1){
                // 一秀 4
                priceLevel = 0;
                console.log("一秀");
            }else{
                // 无 
                priceLevel = -1;
                console.log("啥都没有捏");
            }

            nowPrice = priceLevel;
    },

    spawnNewDice: function() {

        var newDice1 = cc.instantiate(this.dicePrefab);
        this.node.addChild(newDice1);

        var newDice2 = cc.instantiate(this.dicePrefab);
        this.node.addChild(newDice2);

        var newDice3 = cc.instantiate(this.dicePrefab);
        this.node.addChild(newDice3);

        var newDice4 = cc.instantiate(this.dicePrefab);
        this.node.addChild(newDice4);

        var newDice5 = cc.instantiate(this.dicePrefab);
        this.node.addChild(newDice5);

        var newDice6 = cc.instantiate(this.dicePrefab);
        this.node.addChild(newDice6);
        // 一号骰子 -180,-220
        
        newDice1.setPosition(-220,-180);
        newDice2.setPosition(-120,-60);
        newDice3.setPosition(10,-220);
        newDice4.setPosition(140,-70);
        newDice5.setPosition(260,-190);
        newDice6.setPosition(5,20);

        newDice1.destroy();


    },

    // spawnNewDice: function() {
    //     // 在碗里生成一个新的骰子
    //     var newDice = cc.instantiate(this.dicePrefab);
    //     // 将新增的节点添加到 Canvas 节点下面
    //     this.node.addChild(newDice);
    //     // 为骰子设置一个位置
    //     newDice1.setPosition(-180,-220);
    // },
    // LIFE-CYCLE CALLBACKS:

    

    start () {
        
    },

    update: function (dt) {
        // console.log(btnPressed);
        // console.log(rollBTN.btnPressed);
        if(this.node.getChildByName("rollDice").btnPressed == 1){
            this.node.getChildByName("rollDice").btnPressed = 0;
            console.log("对了");
        }
    },
});
