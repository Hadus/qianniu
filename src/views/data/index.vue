<template>
  <div class="data-wrapper">
    <div class="data-container">
      <el-menu :default-active="activeMenu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="homePage">首页</el-menu-item>
        <el-menu-item index="liveStream">直播</el-menu-item>
      </el-menu>
      <div v-if="isHomePage" class="mt20">
        <Overview />
        <AdvertView />
        <OperationWin />
      </div>
      <div v-else class="mt20">
        <LiveStream />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="tradePlatform">
import { computed, ref } from "vue";
import Overview from "./components/Overview.vue";
import OperationWin from "./components/OperationWin.vue";
import AdvertView from "./components/AdvertView.vue";
import LiveStream from "./components/LiveStream.vue";

const activeMenu = ref("liveStream");
const handleSelect = (value: string) => {
  activeMenu.value = value;
}
const isHomePage = computed(() => activeMenu.value === "homePage");
</script>

<style>
.content {
  padding: 0;
  background-color: #eef1f6;
}

.container {
  color: #333;
}

.data-wrapper {
  height: 100%;
  overflow-y: scroll;
}

.data-container {
  max-width: 1430px;
  margin: 0 auto;
}
</style>
