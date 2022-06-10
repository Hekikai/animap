<template>
	<div :class="$attrs.class">
		<div>
			Profile page!
			<a-button @click="handleLogout" type="warning">
				Logout
			</a-button>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AuthService from "@/services/auth.service";
import router from "@/router";

export default defineComponent({
	name: '',
	setup() {

		const handleLogout = () => AuthService.logout().then(
				() => {
					router.push({path: '/login'});
				},
				(error) => {
					// TODO: handle error on logout
				}
		);

		return {
			handleLogout
		}
	}
})
</script>

<style scoped lang="scss">
@import "../src/style/variables";
@import '../src/style/mixins';

.wrapper {
 @include wrapperNearSidebar;
}

</style>