<template>
	<view class="footer">
		<view>&copy;灵动优聘 2023 <text @click="open">备案号：蜀ICP备2024051734号-1</text> </view>
	</view>
</template>

<script>
	export default {
		name:"bot_footer",
		data() {
			return {
				
			};
		},
		methods:{
			open(){
				window.open("https://beian.miit.gov.cn/#/Integrated/index")
			}
		}
	}
</script>

<style lang="scss">
.footer{
	width: calc(100% - 200px);
	background: #f1f1f1;
	height:40px;
	line-height: 40px;
	text-align: center;
	color:#333;
	position: fixed;
	bottom:0;
	right:0;
	z-index:99;
	text{
		display: inline-block;
		margin-left:10px;
		cursor: pointer;
		color:$base-color;
	}
}
</style>