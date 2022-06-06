<template>
<teleport to="#app">
	<div class="modal">
		<a-button type="primary">Primary Button</a-button>
		<a-button>Default Button</a-button>
		<a-button type="dashed">Dashed Button</a-button>
		<a-button type="text">Text Button</a-button>
		<a-button type="link">Link Button</a-button>
	</div>

</teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: 'LoginForm',
	setup() {

	}
});


</script>

<style scoped>

.modal {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

</style>