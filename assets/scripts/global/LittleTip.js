cc.Class({
    extends: cc.Component,

    properties: {
        label:{
            default:null,
            type:cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
    },
    setContent:function(str){//设置提示内容
        this.label.string = str;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
