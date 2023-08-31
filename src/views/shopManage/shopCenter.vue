<template>
	<div class="container">
		<div class="left">
			<div class="block-wrapper introduce-wrapper">
				<v-h3-block>
					惠水琥珀蜜蜡
				</v-h3-block>
			</div>
			<div class="confirm-wrapper">com</div>
		</div>
		<div class="right">
			right
		</div>
	</div>
</template>

<script setup lang="ts" name="shopCenter">
import vH3Block from '@/components/H3Header/index.vue';

</script>

<style scoped>
.container {
	position: relative;
}

.left {
	width: 100%;
	padding-right: 407px;
}

.right {
	width: 357px;
	position: absolute;
	right: 0;
	top: 0;
	background-color: skyblue;
}

.right>div {
	min-height: 100px;
	margin-bottom: 17px;
	border-radius: 10px;
}
</style>
