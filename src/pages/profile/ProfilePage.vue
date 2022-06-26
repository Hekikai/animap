<template>
	<div :class="$attrs.class">
		<main class="container">
			<section class="container__info">
				<the-spinner v-if="!isFetched"/>
				<profile-user-info v-else :store="store"/>
			</section>
			<section class="container__statistic">
				456
			</section>
		</main>
	</div>
</template>

<script lang="ts">
export default {
	name: 'ProfilePage'
}
</script>

<script setup lang="ts">
import useUserStore from "@/stores/user.store";
import {useFetchWithSpinner} from "@/utils/hooks/useFetchWithSpinner";
import ProfileUserInfo from "@/components/profile/ProfileUserInfo.vue";

const {toFetch, isFetched, TheSpinner} = useFetchWithSpinner();

const store = useUserStore();
const {loadUser} = store;
toFetch(loadUser);
</script>

<style scoped lang="scss">
@import "../src/style/variables";
@import '../src/style/mixins';

.wrapper {
	@include wrapperNearSidebar;
	padding: 10px 20px;
}

.container {
	display: grid;
	grid-template-areas: "s1 s2";
	grid-template-columns: repeat(2, 1fr);
}

</style>