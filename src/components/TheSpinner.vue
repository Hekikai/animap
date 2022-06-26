<template>
	<div style="text-align: center">
		<a-spin :indicator="indicator"/>
	</div>
</template>

<script lang="ts">
export default {
	name: 'TheSpinner'
}
</script>

<script setup lang="ts">
import {h} from 'vue';
import {LoadingOutlined} from '@ant-design/icons-vue';

const indicator = h(LoadingOutlined, {
	style: {
		fontSize: '100px',
	},
	spin: true,
});

</script>

<style scoped>
</style>