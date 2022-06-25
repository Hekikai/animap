<template>
	<div :class="$attrs.class">
		<main class="container">
			<section class="container__info">
				<a-card hoverable>
					<template #actions>
						<setting-outlined key="setting"/>
						<edit-outlined key="edit"/>
						<ellipsis-outlined key="ellipsis"/>
					</template>
					<a-card-meta title="Card title" description="This is the description">
						<template #avatar>
							<a-avatar src="https://joeschmoe.io/api/v1/random" style=""/>
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
import {defineComponent, onMounted} from "vue";
import {SettingOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';
import userService from "@/services/user.service";


export default defineComponent({
	name: 'ProfilePage',
	components: {
		SettingOutlined,
		EditOutlined,
		EllipsisOutlined,
	},

	setup() {

		onMounted(() => {
			userService.getUser().then(console.log)

		})

		return {
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