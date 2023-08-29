<template>
	<v-header />
	<v-sidebar />
	<div class="content-box">
		<div class="blank">
			<div class="sub-sidebar">
				<p>交易</p>
				<div>subsidebar</div>
			</div>
		</div>
		<div class="content">
			<router-view v-slot="{ Component }">
				<transition name="move" mode="out-in">
					<keep-alive>
						<component :is="Component"></component>
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '../store/sidebar';
import vHeader from '@/components/Header/header.vue';
import vSidebar from '@/components/Sidebar/sidebar.vue';

const sidebar = useSidebarStore();
</script>
