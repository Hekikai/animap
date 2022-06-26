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

<script>
export default {
	name: 'RegistrationForm'
}
</script>

<script setup lang="ts">

const handleRedirectHomePage = () => ({path: '/login'});

</script>

<style scoped lang="scss">
@import '../../style/mixins';

.modal {
	@include modalWindow;
}
</style>