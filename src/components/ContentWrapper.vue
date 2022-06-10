<template>
	<the-header/>
	<the-sidebar/>
	<router-view class="wrapper"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default defineComponent({
	name: '',
	components: {
		TheHeader,
		TheSidebar
	},

	setup() {

	}
})
</script>

<style scoped>

</style>