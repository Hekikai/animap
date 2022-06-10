<template>
	<a-result :status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
		<template #extra>
			<a-button type="primary" @click="$router.push('/profile')">Back Home</a-button>
		</template>
	</a-result>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: 'PathNotFoundPage',
	setup() {

	}
})
</script>

<style scoped>

</style>