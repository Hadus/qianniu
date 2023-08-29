<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="sidebar.collapse" background-color="#eff1f8"
			text-color="#7a8599" active-text-color="#111" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
						<template #title>
							<el-icon>
								<component :is="item.icon"></component>
							</el-icon>
							<span>{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index" v-permiss="item.permiss">
								<template #title>{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
									{{ threeItem.title }}
								</el-menu-item>
							</el-sub-menu>
							<el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<template #title>{{ item.title }}</template>
					</el-menu-item>
					<li class="line" v-if="item.title == '财务--'">
						<span></span>
					</li>
				</template>
			</template>
		</el-menu>
		<div class="about">
			<p class="title">关于千牛</p>
			<div class="copyright">
				<p class="">Copyright</p>
				<p>© Alibaba Group</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useRoute } from 'vue-router';
import { first as items } from './sidebarItem.js';

const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
	height: 100%;
	position: absolute;
	left: 0;
	top: 76px;
	bottom: 0;
	overflow-y: scroll;
	color: #111;
	font-size: 14px;
	user-select: none;
	width: 108px;
}

.sidebar::-webkit-scrollbar {
	width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
	width: 108px;
}

.el-menu {
	padding: 0;
	padding-top: 7px;
	height: 100%;
}

.el-menu>.el-menu-item {
	font-weight: normal;
	height: 42px;
	width: 100%;
}

.el-menu-item.is-active {
	font-weight: 500;
}

.el-menu .line {
	padding-top: 0px;
	padding-bottom: 8px;
	text-align: center;
}

.el-menu .line>span {
	display: inline-block;
	height: 1px;
	width: 46px;
	background-color: #d7dbe0;
}

.about {
	width: 100%;
	height: 74px;
	position: absolute;
	left: 0;
	bottom: 100px;
	text-align: center;
}

.about>.title {
	color: #7a8599;
	font-size: 13px;
	margin-bottom: 15px;
}

.about>.copyright {
	color: #a1b1cd;
	font-size: 12px;
	transform: scale(.9);
}
</style>
