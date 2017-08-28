
var chatRight = {
	data(){
		return{
			'imgUrl':'imgs/cat.jpg',
			'sd':this.icon
		}
	},
	props:['msg','icon'],
	template:`
		<div>
			<div class="aui-chat-item aui-chat-right" >
				<div class="aui-chat-media">
					<img :src="imgUrl" alt="">
				</div>
				<div class="aui-chat-inner">
					<div class="aui-chat-content ">
						<div class="aui-chat-arrow"></div>
						<h4>{{msg}}</h4>
						<i :class='sd'></i>
					</div>
					<div class="aui-chat-status"></div>
				</div>
			</div>
		</div>
	`
}

var App = new Vue({
	el:'#chatPage',
	data:{
		msg:'',
		class:'icon',
		user:{
			avatorUrl: 'imgs/cat.jpg'
		},
		lastTime:0,
		deltaTime:0,
		chatContent:[
			// {date:'2017年08月15日 00:11',msg:'1',imgrul:'imgs/cat.jpg',showDate:true}
		]
	},
	methods:{
		sendMsg(icon) {

			if(this.msg != '' && icon == undefined) {
				var time = new Date();
				var msg = this.msg ;
				this.deltaTime = time - this.lastTime;
				this.lastTime = time;
				if(this.deltaTime > 60000) {
					var formatDate = FormatDate (time)
					$('.chat-window').append('<div class="aui-chat-header chat-time">'+formatDate+'</div>')
					this.$set(this.chatContent,this.chatContent.length,{sender:'right',msg:msg, imgrul:'imgs/cat.jpg',icon:''})
					this.msg = ''
				}else{
					this.$set(this.chatContent,this.chatContent.length,{sender:'right',msg:msg, imgrul:'imgs/cat.jpg',icon:''})
					this.msg = ''
				}
// 				localStorage.setItem('chatRecord',JSON.stringify(this.chatContent));
				$('body').scrollTop('9999')
			}else if(icon == undefined){
				dialog.alert({
			        title:"内容不能为空",
			        msg:'至少说点什么吧',
			        buttons:['确定']
			    });
			}else {
				if(this.deltaTime > 60000) {
					var formatDate = FormatDate (time)
					$('.chat-window').append('<div class="aui-chat-header chat-time">'+formatDate+'</div>')
					this.$set(this.chatContent,this.chatContent.length,{sender:'right',msg:'', imgrul:'imgs/cat.jpg',icon:icon})

					this.msg = ''
				}else{
					this.$set(this.chatContent,this.chatContent.length,{sender:'right',msg:'', imgrul:'imgs/cat.jpg',icon:icon})
					this.msg = ''
				}
// 				localStorage.setItem('chatRecord',JSON.stringify(this.chatContent));
				$('body').scrollTop('9999')
			}
		}
	},
	components:{
		'chat-right': chatRight
	},
	created() {
		$('body').scrollTop('9999')
	}
})


function FormatDate (strTime) {
    var date = new Date(strTime);
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+'日'+' '+date.getHours()+':'+date.getMinutes();
}
