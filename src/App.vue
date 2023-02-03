<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate,
	onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default defineComponent({
	components: {
		
	},
  setup() {
		onBeforeMount(() => {
			// DOM 생성 전
		})
		onMounted(() => {
			// DOM 생성 후
		})
		onBeforeUpdate(() => {
			// state가 업데이트 되기전
		});
		onUpdated(() => {
			// state가 업데이트 된 후
		});
		onBeforeUnmount(() => {
			// 컴포넌트가 소멸되기전
		});
		onUnmounted(() => {
			// 컴포넌트가 소멸된 후
		});

		return {
			
		};
	}
})
</script>

<style scoped>

</style>
