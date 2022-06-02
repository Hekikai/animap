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
	name: "TheAuthenticationPage",
	setup() {
		return {
			backgroundImage
		}
	}
})

</script>

<style scoped lang="scss">
@import "src/style/mixins";

.container {
	@include imageContainer;
}

</style>