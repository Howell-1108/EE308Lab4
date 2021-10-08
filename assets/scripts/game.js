var diceAry = [0, 0, 0, 0, 0, 0]; // 骰子数列
var diceBuck = [0, 0, 0, 0, 0, 0, 0]; // 骰子桶，duceBuck[i]是摇出点数为i的骰子个数
var priceLevel = -1; // 奖项等级
var maxPlayerNum = 1;// 玩家数
var playerNow = 1; // 当前玩家编号
// var btnType = 0; // 当前按钮类型，1是下一位，0是试试手气
cc.Class({
    extends: cc.Component,

    properties: {
        // 骰子节点
        diceOne: {
            default: null,
            type: cc.Sprite
        },
        diceTwo: {
            default: null,
            type: cc.Sprite
        },
        diceThree: {
            default: null,
            type: cc.Sprite
        },
        diceFour: {
            default: null,
            type: cc.Sprite
        },
        diceFive: {
            default: null,
            type: cc.Sprite
        },
        diceSix: {
            default: null,
            type: cc.Sprite
        },

        // 随机动画扔骰子
        diceRollOne: {
            default: null,
            type: cc.Sprite
        },
        diceRollTwo: {
            default: null,
            type: cc.Sprite
        },
        diceRollThree: {
            default: null,
            type: cc.Sprite
        },
        diceRollFour: {
            default: null,
            type: cc.Sprite
        },
        diceRollFive: {
            default: null,
            type: cc.Sprite
        },
        diceRollSix: {
            default: null,
            type: cc.Sprite
        },



        // 玩家头像节点
        playerIcon: {
            default: null,
            type: cc.Sprite
        },

        // 当前玩家序号label节点
        playerNumDisplay: {
            default: null,
            type: cc.Label
        },

        // 奖项贴图节点
        priceDisplay: {
            default: null,
            type: cc.Sprite
        },

        // 骰子音效
        diceAudio: {
            default: null,
            type: cc.AudioClip
        },

        // 按钮label
        buttonDisplay:{
			default: null,
			type: cc.Label
		},

        // 骰子静态贴图
        picture: [cc.SpriteFrame],

        // 玩家头像
        playerIcons: [cc.SpriteFrame],

        // 奖项贴图
        priceFrame: [cc.SpriteFrame],
    },
    onLoad: function () {
        // 获取全局变量：玩家人数
        maxPlayerNum = gPlayerNum.playerNum;

        // 先将动画色子隐藏
        this.diceRollOne.enabled = false;
        this.diceRollTwo.enabled = false;
        this.diceRollThree.enabled = false;
        this.diceRollFour.enabled = false;
        this.diceRollFive.enabled = false;
        this.diceRollSix.enabled = false;

        // 加载当前玩家
        this.playerIcon.spriteFrame = this.playerIcons[gPlayerNum.playerNow - 1];
        this.playerNumDisplay.string = gPlayerNum.playerNow;

        // 加载当前按钮
        if(gPlayerNum.btnType == 0){
            this.buttonDisplay.string = "试试手气";
        }else{
            this.buttonDisplay.string = "下一位";
        }
    },


    rollingNow: function () {
        // 摇骰子
        diceBuck = [0, 0, 0, 0, 0, 0, 0];
        // 随机数生成结果
        for (var i = 0; i < 6; i++) {
            diceAry[i] = Math.ceil(Math.random() * 6);
            diceBuck[diceAry[i]]++;
        }
        // 调试输出
        console.log("本次摇骰子：%d %d %d %d %d %d", diceAry[0], diceAry[1], diceAry[2], diceAry[3], diceAry[4], diceAry[5]);
        console.log("本次摇骰子桶：1：%d; 2：%d; 3：%d; 4：%d; 5：%d; 6：%d", diceBuck[1], diceBuck[2], diceBuck[3], diceBuck[4], diceBuck[5], diceBuck[6]);
        
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
        if (diceBuck[4] == 4 && diceBuck[1] == 2) {
            // 状元插金花 444411
            priceLevel = 11;
            console.log("状元插金花");
        } else if (diceBuck[4] == 6) {
            // 满堂红 444444
            priceLevel = 10;
            console.log("满堂红");
        } else if (diceBuck[1] == 6) {
            // 遍地锦 111111
            priceLevel = 9;
            console.log("遍地锦");
        } else if (diceBuck[2] == 6 || diceBuck[3] == 6 || diceBuck[5] == 6 || diceBuck[6] == 6) {
            // 六博黑 六个同
            priceLevel = 8;
            console.log("六博黑");
        } else if (diceBuck[4] == 5) {
            // 五王 44444
            priceLevel = 7;
            console.log("五王");
        } else if (diceBuck[1] == 5 || diceBuck[2] == 5 || diceBuck[3] == 5 || diceBuck[5] == 5 || diceBuck[6] == 5) {
            // 五子 五个同
            priceLevel = 6;
            console.log("五子");
        } else if (diceBuck[4] == 4) {
            // 状元 4444
            priceLevel = 5;
            console.log("状元");
        } else if (diceBuck[1] == 1 && diceBuck[2] == 1 && diceBuck[3] == 1 && diceBuck[4] == 1 && diceBuck[5] == 1 && diceBuck[6] == 1) {
            // 对堂 123456
            priceLevel = 4;
            console.log("对堂");
        } else if (diceBuck[4] == 3) {
            // 三红 444
            priceLevel = 3;
            console.log("三红");
        } else if (diceBuck[1] == 4 || diceBuck[2] == 4 || diceBuck[3] == 4 || diceBuck[5] == 4 || diceBuck[6] == 4) {
            // 四进 四个同
            priceLevel = 2;
            console.log("四进");
        } else if (diceBuck[4] == 2) {
            // 二举 44
            priceLevel = 1;
            console.log("二举");
        } else if (diceBuck[4] == 1) {
            // 一秀 4
            priceLevel = 0;
            console.log("一秀");
        } else {
            // 无 
            priceLevel = -1;
            console.log("啥都没有捏");
        }

        // 存储奖项数据
        if (priceLevel >= 5 && gPlayerNum.ZYLevel < priceLevel) {
            // 状元
            gPlayerNum.ZYLevel = priceLevel;
            gPlayerNum.ZYPlayer = gPlayerNum.playerNow;
        } else if (gPlayerNum.priceRemain[priceLevel] != 0) {
            // 非状元
            gPlayerNum.priceRemain[priceLevel] -= 1;
            gPlayerNum.playerPriceAry[gPlayerNum.playerNow - 1][priceLevel] += 1;
        }

    },

    // 按钮按下调用，根据当前按钮状态判断执行
    btnCheck: function () {
        if(gPlayerNum.btnType == 0){
            cc.audioEngine.play(this.diceAudio, false, 1);
            this.spawnNewDice();
            this.buttonDisplay.string = "下一位";
            gPlayerNum.btnType = 1;
        }else{
            this.changePlayer();
            this.buttonDisplay.string = "试试手气";
            gPlayerNum.btnType = 0;
        }
    },

    changePlayer: function () {
        // 切换玩家
        if (gPlayerNum.playerNow == maxPlayerNum) {
            gPlayerNum.playerNow = 1;
        } else {
            gPlayerNum.playerNow += 1;
        }
        this.playerIcon.spriteFrame = this.playerIcons[gPlayerNum.playerNow - 1];
        this.playerNumDisplay.string = gPlayerNum.playerNow;
        this.priceDisplay.spriteFrame = this.priceFrame[6];
    },

    spawnNewDice: function () {
        // 在限定范围内随机数，使骰子在一定范围内随机乱窜
        function randomX() {
            return Math.floor(Math.random() * 551) - 250;
        }
        function randomY() {
            return Math.floor(Math.random() * 301) - 200;
        }

        // 先隐藏静态骰子 等动画结束再出来 
        this.diceOne.enabled = false;
        this.diceTwo.enabled = false;
        this.diceThree.enabled = false;
        this.diceFour.enabled = false;
        this.diceFive.enabled = false;
        this.diceSix.enabled = false;

        // 启用动态骰子
        this.diceRollOne.enabled = true;
        this.diceRollTwo.enabled = true;
        this.diceRollThree.enabled = true;
        this.diceRollFour.enabled = true;
        this.diceRollFive.enabled = true;
        this.diceRollSix.enabled = true;

        // 调用摇色子函数生成结果数据
        this.rollingNow();

        // x 取值为 -250 ~ 300  y 取值为-150 100
        cc.tween(this.diceRollOne.node)
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .start()

        cc.tween(this.diceRollTwo.node)
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .start()

        cc.tween(this.diceRollThree.node)
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .start()

        cc.tween(this.diceRollFour.node)
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .start()

        cc.tween(this.diceRollFive.node)
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .start()

        cc.tween(this.diceRollSix.node)
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .to(0.15, { position: cc.v2(randomX(), randomY()) })
            .start()


        this.scheduleOnce(function () {
            // 将动画色子隐藏
            this.diceRollOne.enabled = false;
            this.diceRollTwo.enabled = false;
            this.diceRollThree.enabled = false;
            this.diceRollFour.enabled = false;
            this.diceRollFive.enabled = false;
            this.diceRollSix.enabled = false;


            // 启用静态骰子
            this.diceOne.enabled = true;
            this.diceTwo.enabled = true;
            this.diceThree.enabled = true;
            this.diceFour.enabled = true;
            this.diceFive.enabled = true;
            this.diceSix.enabled = true;
        }, 3);

        // 静态色子图片切换
        this.diceOne.spriteFrame = this.picture[diceAry[0] - 1];
        this.diceTwo.spriteFrame = this.picture[diceAry[1] - 1];
        this.diceThree.spriteFrame = this.picture[diceAry[2] - 1];
        this.diceFour.spriteFrame = this.picture[diceAry[3] - 1];
        this.diceFive.spriteFrame = this.picture[diceAry[4] - 1];
        this.diceSix.spriteFrame = this.picture[diceAry[5] - 1];

        // 奖项贴图切换
        if (priceLevel == -1) {
            // 啥也没有捏
            this.priceDisplay.spriteFrame = this.priceFrame[6];
        } else if (priceLevel >= 5) {
            // 所有状元都贴状元
            this.priceDisplay.spriteFrame = this.priceFrame[5];
        } else {
            // 其它奖项
            this.priceDisplay.spriteFrame = this.priceFrame[priceLevel];
        }
    },

    start() {

    },
});
