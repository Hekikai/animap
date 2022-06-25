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
import {defineComponent} from "vue";
import TheHeaderLogo from "@/components/TheHeaderLogo.vue";
import LogoutButton from "@/components/auth/LogoutButton.vue";


export default defineComponent({
	name: 'TheHeader',
	components: {
		TheHeaderLogo,
		LogoutButton
	},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">
@import "../style/variables";

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