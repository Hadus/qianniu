<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" background-color="#eff1f8" text-color="#7a8599"
			active-text-color="#111" unique-opened router :collapse-transition="false" @open="handleOpen" @close="handleClose">
			<!-- 第一层 -->
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
						<template #title>
							<img :src="item.icon">
							{{ items.icon }}
							<el-image :src="items.icon" fit="cover" />
							<span>{{ item.title }}</span>
						</template>
						<!-- 第二层 -->
						<p class="item-title">{{ item.title }}</p>
						<template v-for="subItem in item.subs">
							<el-sub-menu class="sec-menu-li" v-if="subItem.subs" :index="subItem.index" :key="subItem.index"
								v-permiss="item.permiss">
								<!-- 第三层 -->
								<template #title>{{ subItem.title }}</template>
								<el-menu-item active-text-color="#3e7fff" class="thr-menu-li" v-for="(threeItem, i) in subItem.subs"
									:key="i" :index="threeItem.index">
									<p class="thr-p">
										{{ threeItem.title }}
									</p>
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
						<img :src="item.icon">
						<template #title v-if="item.link">
							<a :href="item.link" class="link" target="_blank">{{ item.title }}</a>
						</template>
						<template #title v-else>{{ item.title }}</template>
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
import items from './sidebarItem.js';
const alt = "https://qnworkbench.alibaba.com/workbench/oss_c4f6f9d4-0c6d-4f33-8dca-8417bb05d32c.png"

const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

const sidebar = useSidebarStore();
const handleOpen = function (index) {
	const flag = index.includes('sub');
	sidebar.handleHasSub(flag);
}

const handleClose = function (index) {
	const flag = index.includes('-sub');
	sidebar.handleHasSub(flag);
}

</script>

<style scoped>
.sidebar {
	height: 100%;
	position: absolute;
	left: 0;
	top: 76px;
	bottom: 0;
	/* overflow-y: scroll; */
	font-size: 14px;
	user-select: none;
	width: 108px;
}

.sidebar-el-menu img {
	width: 18px;
	height: 18px;
	margin-right: 10px;
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
	border: 0 none;
	position: relative;
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

.el-menu a.link {
	color: #7a8599;
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
<style>
.sidebar>ul>li.el-sub-menu>ul.el-menu {
	transition: all 0s !important;
}

.sidebar .el-menu .el-icon.el-sub-menu__icon-arrow {
	display: none;
}
</style>
