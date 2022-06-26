<template>
	<div class="container">
		<img class="container__image" :src="backgroundImage" alt="">
		<router-view/>
	</div>
</template>

<script lang="ts">
export default {
	name: 'EntryPage'
}
</script>

<script setup lang="ts">
import backgroundImage from '../../assets/images/background.jpg';
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