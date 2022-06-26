<template>
	<header class="header">
		<the-header-logo/>
		<div class="header__title">
			Animap by Katana
		</div>
		<logout-button/>
	</header>
</template>

<script lang="ts">
export default {
	name: 'ContentWrapper'
}
</script>

<script setup lang="ts">
import TheHeaderLogo from "@/components/header/TheHeaderLogo.vue";
import LogoutButton from "@/components/auth/LogoutButton.vue";
</script>

<style scoped lang="scss">
@import "../../style/variables";

.header {
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	height: $headerHeight;
	padding: 8px;
	background-color: $mainGreen;
	z-index: 1;

	&__title {
		align-self: center;
	}


}
</style>