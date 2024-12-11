<template>
	<view class="content">
		<view class="success">认证成功，正在跳转个人中心...</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			let pages = getCurrentPages();
			console.log(pages,'pages')
			let pageLen = pages.length;
			let fromSign = false
			let pb_id = ""
			for(let i=0;i<pageLen;i++){
				if(pages[i].route.indexOf("work_detail") != -1){
					// 从报名页面来
					fromSign = true
					pb_id = pages[i].$vm.pb_id
				}
			}
			console.log(fromSign,"formsign")
			let scene = encodeURIComponent("pb_id="+pb_id)
			if(fromSign){
				uni.navigateTo({
					url:"/subpkg/work_detail/work_detail?scene="+scene
				})
			}else{
				uni.switchTab({
					url:"/pages/mine/mine"
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.success{
	position: fixed;
	width:80%;
	text-align: center;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
}
</style>
