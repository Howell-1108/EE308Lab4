cc.Class({
    extends: cc.Component,

    properties: {
        // 骰子 声音
        diceAudio: {
            type: cc.AudioSource,
            default: null
        },
    },
    play: function () {
        this.diceAudio.play();
    },
    pause: function () {
        this.diceAudio.pause();
    },
});
