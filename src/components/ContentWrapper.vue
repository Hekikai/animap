<template>
	<the-header/>
	<the-sidebar/>
	<router-view class="wrapper"/>
</template>

<script>
export default {
	name: 'ContentWrapper'
}
</script>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
</script>

<style scoped>

</style>