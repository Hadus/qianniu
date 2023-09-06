<template>
  <div class="live-stream-container">
    <el-container>
      <el-aside width="160px" style="background-color: #fff" class="mr10">
        <div class="top-logo-box">
          <i class="niceFonts-live-stream top-logo-icon"></i>
          <p style="color: #4472d3; font-size: 16px">直播</p>
        </div>
        <div class="live-menu-list">
          <el-menu default-active="overview" @select="selectMenu">
            <el-menu-item index="overview">直播概况</el-menu-item>
            <el-menu-item index="achievement">直播间业绩</el-menu-item>
            <el-menu-item index="1">本店商品成交</el-menu-item>
            <el-menu-item index="2">货品分析</el-menu-item>
            <el-menu-item index="3">店播助手</el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main class="main-container">
        <LiveOverview v-if="isOverviewActive" />
        <LiveAchievement v-if="isAchievementActive" />
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import LiveAchievement from "./LiveAchievement.vue";
import LiveOverview from './LiveOverview.vue';

const activeMenu = ref("overview");
const selectMenu = (value: string) => {
  activeMenu.value = value;
};
const isOverviewActive = computed(() => activeMenu.value === "overview");
const isAchievementActive = computed(() => activeMenu.value === "achievement");
</script>
<style scoped>
.top-logo-box {
  line-height: 32px;
  padding-top: 20px;
  text-align: center;
}
.top-logo-icon {
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 16px;
  margin-bottom: 6px;
  background-image: linear-gradient(45deg, #c6d7fd, #e4edff 59%, #d5e2ff);
  text-align: center;
}
.live-menu-list :deep(.el-menu-item) {
  height: 44px;
  justify-content: center;
}
.live-menu-list :deep(.is-active) {
  background-color: rgba(0, 95, 229, 0.1);
  border-left: 3px solid #005fe5;
}
.main-container {
  padding: 0 !important;
  min-height: 760px;
}
</style>