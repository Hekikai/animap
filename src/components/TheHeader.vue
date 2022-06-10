<template>
	<header class="header">
		<the-header-logo/>
		<ul>
			<li>1</li>
			<li>2</li>
		</ul>
	</header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TheHeaderLogo from "@/components/TheHeaderLogo.vue";

export default defineComponent({
	name: 'TheHeader',
	components: {
		TheHeaderLogo
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
	height: $headerHeight;
	padding: 8px;
	background-color: $mainGreen;
	z-index: 1;
}
</style>