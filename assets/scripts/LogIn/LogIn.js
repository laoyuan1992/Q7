cc.Class({
    extends: cc.Component,

    properties: {
         userName:{// 用户名 
             default:null,
             type:cc.EditBox 
         },
         password:{// 密码 
             default:null,
             type:cc.EditBox
         },
         remAct:{//  记住账号  
             default:null,
             type:cc.Node
         },
         remPwd:{//  记住密码  
             default:null,
             type:cc.Node
         },
         littleTip:{
             default:null,
             type:cc.Prefab
         },
        root: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {
        //this.showLittleTip();
    },
    logIn:function(){
        // 登录
        var account = this.userName.string;
        var password = this.password.string;
        // 记住账号密码
        var isRemAct = this.remAct.children[1].active;
        var isRemPwd = this.remPwd.children[1].active;
        this.showLittleTip("登录成功");
        this.scheduleOnce(function() {
            cc.director.loadScene("Game");
        }, 0.5);


    },
    update: function (dt) {
    
    },
    showLittleTip:function(str){//显示提示
        var _little = cc.instantiate(this.littleTip);
        var actionShow = cc.fadeTo(0.2,255);
        var actionHold = cc.fadeTo(1.5,255);
        var actionHide = cc.fadeTo(0.5,0);
        var seq = cc.sequence(actionShow,actionHold,actionHide)
        _little.getChildByName('littleTip').getComponent('LittleTip').setContent(str);
        _little.parent = this.root;
        _little.runAction(seq);
    }
});
