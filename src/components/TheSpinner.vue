<template>
	<div style="text-align: center">
		<a-spin :indicator="indicator"/>
	</div>
</template>

<script lang="ts">
import {defineComponent, h} from "vue";
import {LoadingOutlined} from '@ant-design/icons-vue';

export default defineComponent({
	name: 'TheSpinner',
	setup() {
		const indicator = h(LoadingOutlined, {
			style: {
				fontSize: '100px',
			},
			spin: true,
		});

		return {
			indicator,
		};
	}
})
</script>

<style scoped>
</style>