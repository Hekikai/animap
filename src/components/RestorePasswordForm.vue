<template>
	<teleport to="#app">
		<div class="modal">
			<p>
				Incoming feature!
			</p>
			<router-link :to="handleRedirectHomePage()">Get back!</router-link>
		</div>
	</teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: 'RestorePasswordForm',
	setup() {
		const handleRedirectHomePage = () => ({path: '/login'});

		return {
			handleRedirectHomePage
		}
	}
})
</script>

<style scoped lang="scss">
@import '../style/mixins';

.modal {
	@include modalWindow;
}
</style>