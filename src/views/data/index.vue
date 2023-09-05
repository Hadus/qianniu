<template>
	<div>
		<Overview />
		<AdvertView />
		<OperationWin />
	</div>
</template>

<script setup lang="ts" name="tradePlatform">
import Overview from './components/Overview.vue';
import OperationWin from './components/OperationWin.vue';
import AdvertView from './components/AdvertView.vue';

</script>

<style>
.container {
	color: #333
}
</style>
