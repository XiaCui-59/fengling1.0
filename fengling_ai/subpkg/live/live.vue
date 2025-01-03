<template>
	<view class="live">
		<video id="videoElement" controls style="width: 100%; height: auto"></video>
	</view>
</template>

<script>
	import flvjs from 'flv.js'
	export default {
		data() {
			return {
				player: null
			}
		},
		onUnload() {
			this.destroyPlayer();
		},
		onReady() {
			this.createPlayer();
		}
		methods: {
			createPlayer() {
				if (flvjs.isSupported()) {
					const videoElement = document.getElementById('videoElement');
					this.player = flvjs.createPlayer({
						type: 'flv',
						url: '你的直播流地址.flv' // 替换为你的直播流地址
					});
					this.player.attachMediaElement(videoElement);
					this.player.load();
					this.player.play();
				}
			},
			destroyPlayer() {
				if (this.player) {
					this.player.pause();
					this.player.unload();
					this.player.detachMediaElement();
					this.player.destroy();
					this.player = null;
				}
			}
		}
	}
</script>

<style lang="scss">

</style>