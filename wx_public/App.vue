<script>
	import urlSetting from "./url_setting";
	export default {
		globalData:{
			baseUrl:urlSetting.urls.apiUrl,//测试环境,接口域名
			baseImageUrl:urlSetting.urls.imageUrl,//测试环境，静态资源域名
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.content{
		padding:30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		min-height: 100vh;
		background: #f6f6f6;
		color:#333;
	}
	.content .board{
		background: #fff;
		border-radius: 10rpx;
		padding:20rpx;
		box-sizing: border-box;
	}
	.content .board .title{
		font-size: 32rpx;
		position: relative;
		padding-left: 20rpx;
		font-weight: 600;
	}
	.content .board .title::before{
		content:"";
		width:3px;
		height:28rpx;
		background:#20b1f3;
		position: absolute;
		top:50%;
		left:0;
		transform: translateY(-50%);
	}
	.content .board .title .status{
		color:#0da81f;
	}
	.content .board .wrap{
		margin-top:40rpx;
	}
	.content .board .wrap .line{
		margin-bottom:30rpx;
		font-size: 28rpx;
	}
	.content .board .wrap .line .tit{
		width:160rpx;
	}
	.content .board .wrap .line .text{
		width:calc(100% - 160rpx);
		color:#666;
	}
	.flex{
		display: flex;
		align-items: center;
	}
	.flex_start{
		justify-content: flex-start;
	}
	.flex_end{
		justify-content: flex-end;
	}
	.flex_btween{
		justify-content: space-between;
	}
	.flex_around{
		justify-content: space-around;
	}
	.active{
		color:#0da81f;
	}
	.disable{
		color:#bdbdbd;
	}
	.btn{
		background: #20b1f3;
		color:#fff;
		width:100%;
		height:76rpx;
		line-height: 76rpx;
		text-align: center;
		border-radius: 70rpx;
		margin-top:50rpx;
	}
</style>
