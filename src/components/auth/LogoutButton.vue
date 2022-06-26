<template>
	<a-button @click="handleLogout" type="warning">
		Logout
	</a-button>
</template>

<script lang="ts">
export default {
	name: 'LogoutButton'
}
</script>

<script setup lang="ts">
import AuthService from "@/services/auth.service";
import router from "@/router";

const handleLogout = () => AuthService.logout().then(
		() => {
			router.push({path: '/login'});
		},
		(error) => {
			// TODO: handle error on logout
		}
);

</script>

<style scoped>

</style>