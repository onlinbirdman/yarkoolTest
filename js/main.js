// tab
var tab = new auiTab({
    element:document.getElementById("footer"),
    index:4,
    repeatClick:false
},function(ret){
	showDefault('loading')
    if(ret.index == 4 ) {
    	$('#test').hide()
    	$('#header').show();
    	$('#content').show();
    }else{
    	$('#header').hide();
    	$('#content').hide();
    }
});

// toast
apiready = function(){
    api.parseTapmode();
}
var toast = new auiToast();
function showDefault(){

    toast.loading({
        title:"未完待续...",
        duration:2000
    },function(ret){
        setTimeout(function(){
            toast.hide();
        }, 300)
    });
    
    
}

//dialog
var dialog = new auiDialog({})
function openDialog() {
	dialog.alert({
        title:"打开自启动权限",
        msg:'已开启',
        buttons:['确定']
    },function(){
		$('.msg-advice').hide()
    });
}

function closeAdvice() {
    $('.msg-advice').hide()
}
function closeTips() {
	$('#tips-1').hide()
}



function gotoSalesPage() {
    $('.aui-content').hide();
    $('#salesPage').show();
}

function gotoChatPage() {
    $('.aui-content').hide();
    $('#chatPage').show();
}

function gotoMsgPage() {
    $('.aui-content').hide();
    $('#messagePage').show();
}

function toSpeak(){
    $('.input').hide();
    $('.button').show();
    $('.icon-gengduo1').show();
    $('.icon-maikefeng').hide();
}
function toWord(){
    $('.input').show();
    $('.button').hide();
    $('.icon-gengduo1').hide();
    $('.icon-maikefeng').show();
}
function express(){
    $('#express').toggle()
}

//scroll

var scroll = new auiScroll({
    listen:true, //是否监听滚动高度，开启后将实时返回滚动高度
    distance:0 //判断到达底部的距离，isToBottom为true
},function (ret){
   if(!ret.isToBottom){
        
   }
    
});

$(document).ready(function(){
    $('.smile').click(function(){
        var that = this;
        var smile = $(that).children('i').attr('class')
        $('#express').hide()
        App.sendMsg(smile)
    })
})

