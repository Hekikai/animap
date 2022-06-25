<template>
	<a-button @click="handleLogout" type="warning">
		Logout
	</a-button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AuthService from "@/services/auth.service";
import router from "@/router";

export default defineComponent({
	name: 'LogoutButton',
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

<style scoped>

</style>