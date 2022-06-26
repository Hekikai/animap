<template>
	<a-card hoverable style="cursor: auto">
		<template #actions>
			<setting-outlined key="setting"/>
			<edit-outlined @click="" key="edit"/>
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
</template>

<script lang="ts">
export default {
	name: 'ProfileUserInfo'
}
</script>

<script setup lang="ts">
import {SettingOutlined, EditOutlined} from '@ant-design/icons-vue';
defineProps({
	store: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>

</style>