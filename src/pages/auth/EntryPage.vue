<template>
	<div class="container">
		<img class="container__image" :src="backgroundImage" alt="">
		<router-view/>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import backgroundImage from '../../assets/images/background.jpg';

export default defineComponent({
	name: "EntryPage",
	setup() {
		return {
			backgroundImage
		}
	}
})

</script>

<style scoped lang="scss">

.container {
	height: 100%;
	width: 100%;
	overflow-y: hidden;
	user-select: none;

	&__image {
		height: auto;
		min-width: 100vw;
		filter: blur(8px)
	}
}

</style>