<template>
	<div :class="$attrs.class">
		<main class="container">
			<section class="container__info">
				<the-spinner v-if="isUserLoaded === false"/>
				<a-card v-else hoverable style="cursor: auto">
					<template #actions>
						<setting-outlined key="setting"/>
						<edit-outlined key="edit"/>
						<ellipsis-outlined key="ellipsis"/>
					</template>
					<a-card-meta
							:title="store.getUser.username"
							:description="store.getUser.email"
					>
						<template #avatar>
							<a-avatar
									src="src/assets/images/userAvatar.png"
									style="width: 60px; height: 60px"
							/>
						</template>
					</a-card-meta>
				</a-card>
			</section>
			<section class="container__statistic">
				456
			</section>
		</main>
	</div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {SettingOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';
import useUserStore from "@/stores/user.store";
import TheSpinner from "@/components/TheSpinner.vue";


export default defineComponent({
	name: 'ProfilePage',
	components: {
		SettingOutlined,
		EditOutlined,
		EllipsisOutlined,
		TheSpinner
	},

	setup() {

		const isUserLoaded = ref(false);

		const store = useUserStore();
		const {loadUser} = store;


		onMounted(() => {
			loadUser().then(() => isUserLoaded.value = true);
		})
		return {
			store,
			isUserLoaded
		}
	}
})
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