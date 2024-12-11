<template>
	<view>
		<web-view :src="url" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:""
			}
		},
		onLoad(param) {
			this.url = decodeURIComponent(param.url)
		},
		methods: {
			getMessage(e) {
				console.log(e,"getMessage")
			},
		}
	}
</script>

<style>

</style>
