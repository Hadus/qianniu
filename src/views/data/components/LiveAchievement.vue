<template>
  <div class="live-achievement-container">
    <div class="my-live-studio">
      <div class="update-date">
        <span>于 {{ updateDate }} 更新</span>
      </div>
      <div class="user-overview-container">
        <div class="user-info-box">
          <div class="user-info">
            <img alt="用户头像" class="user-avatar" src="@/assets/img/data/userAvatar.png" />
            <div class="ml20">
              <p>亲</p>
              <p style="margin-top: 15px">
                欢迎来到淘宝直播，做好准备欢迎你的宝宝们吧！
              </p>
            </div>
          </div>
          <div class="rank-info">
            <div class="rank-item">
              <div class="rank-item-tile mb20">近7日同级同类目累计成交排名</div>
              <div class="rank-item-content">
                <span class="rank-num">{{ rankInfo.my.cur }}</span>
                <span class="ml20">较上周下降{{ rankInfo.my.change }}</span>
                <i class="niceFonts-trend-down" style="color: #00a854; margin-left: 5px"></i>
              </div>
            </div>
            <div class="rank-item">
              <div class="rank-item-tile mb20">全网排名</div>
              <div class="rank-item-content">
                <span class="rank-num">{{ rankInfo.all.cur }}</span>
                <span class="ml20">较上周下降{{ rankInfo.all.change }}</span>
                <i class="niceFonts-trend-down" style="color: #00a854; margin-left: 5px"></i>
              </div>
            </div>
          </div>
          <div class="optimization-box mt10">
            <div class="mb10" style="position: relative">
              <span style="color: #e6a23c; font-size: 14px"><el-icon :size="20" color="#E6A23C"
                  style="postion: relative; top: 5px">
                  <WarningFilled />
                </el-icon>开播：</span>
              <span class="optimization-text">近7天场均有效开播时长260，相比同级同类主播平均水平312，低17%</span>
              <span class="view-plan">查看锦囊</span>
            </div>
            <div class="mb10" style="position: relative">
              <span style="color: #e6a23c; font-size: 14px"><el-icon :size="20" color="#E6A23C"
                  style="postion: relative; top: 5px">
                  <WarningFilled />
                </el-icon>开播：</span>
              <span class="optimization-text">近7天场均有效开播场次1，相比同级同类主播平均水平1，低2%</span>
              <span class="view-plan">查看锦囊</span>
            </div>
            <div style="position: relative">
              <span style="color: #e6a23c; font-size: 14px"><el-icon :size="20" color="#E6A23C"
                  style="postion: relative; top: 5px">
                  <WarningFilled />
                </el-icon>观看：</span>
              <span class="optimization-text">近7天场均有效观看时长194，相比同级同类主播平均水平382，低49%</span>
              <span class="view-plan">查看锦囊</span>
            </div>
          </div>
          <div class="view-all-opts">查看全部 10 个优化项</div>
          <div class="notice-box mt20">
            <div>
              <span class="notice-icon">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="rgb(32, 98, 230)" data-spm-anchor-id="a21ag.21587146.0.i9.5693410cZqUUNv">
                  <path
                    d="M620.313 913.691L220.932 683.64H102.745c-19.437 0-35.248-15.826-35.248-35.263V375.666c0-19.451 15.812-35.269 35.248-35.269h118.186L620.313 110.31v803.381zM102.745 373.394a2.272 2.272 0 00-2.257 2.271v272.712c0 1.214 1.03 2.257 2.257 2.257h127.016l357.547 205.961V167.398L229.761 373.394H102.745z">
                  </path>
                  <path
                    d="M625.313 922.342L219.595 688.64h-116.85c-22.193 0-40.248-18.062-40.248-40.263V375.666c0-22.205 18.055-40.269 40.248-40.269h116.848l405.719-233.738v820.683zM102.745 345.396c-16.679 0-30.248 13.579-30.248 30.269v272.711c0 16.687 13.569 30.263 30.248 30.263h119.523l1.159.667L615.312 905.04V118.96L222.268 345.396H102.745zm489.563 519.849L228.424 655.634H102.745c-4.001 0-7.257-3.255-7.257-7.257V375.665c0-4.009 3.255-7.271 7.257-7.271h125.678l363.884-209.646v706.497zm-486.82-219.611h125.609l1.159.667 350.051 201.644V176.05L231.098 378.394h-125.61v267.24z">
                  </path>
                  <path d="M208.857 356.891h32.992v310.245h-32.992V356.891z"></path>
                  <path
                    d="M246.849 672.136h-42.992V351.891h42.992v320.245zm-32.992-10h22.992V361.891h-22.992v300.245zM735.24 632.156l-14.373-29.704c37.843-18.28 61.342-55.602 61.342-97.431 0-41.834-23.499-79.171-61.313-97.437l14.33-29.712c48.578 23.442 79.989 73.353 79.989 127.148 0 54.61-30.651 103.327-79.975 127.136z">
                  </path>
                  <path
                    d="M732.915 638.831l-18.728-38.705 4.505-2.176c36.095-17.436 58.517-53.044 58.517-92.929 0-39.897-22.411-75.508-58.488-92.934l-4.5-2.174 18.674-38.717 4.504 2.174c50.309 24.277 82.816 75.953 82.816 131.651 0 56.543-31.728 106.983-82.801 131.638l-4.499 2.172zm-5.414-34.148l10.026 20.72c44.967-23.697 72.688-69.375 72.688-120.381 0-50.219-28.374-96.93-72.698-120.388l-9.993 20.718c36.944 19.823 59.686 57.568 59.686 99.67-.001 42.088-22.749 79.83-59.709 99.661z">
                  </path>
                  <path
                    d="M791.067 762.231l-13.696-30.028c88.776-40.482 146.141-129.653 146.141-227.168 0-95.421-55.616-183.773-141.657-225.102l14.274-29.741c97.438 46.772 160.375 146.805 160.375 254.842.001 110.408-64.925 211.357-165.437 257.197z">
                  </path>
                  <path
                    d="M788.593 768.855l-17.846-39.127 4.55-2.074c87-39.673 143.215-127.056 143.215-222.619 0-93.499-54.491-180.088-138.822-220.595l-4.506-2.164 18.602-38.755 4.508 2.164c99.146 47.593 163.211 149.394 163.211 259.35.001 112.358-66.085 215.1-168.361 261.745l-4.551 2.075zm-4.618-34.222l9.548 20.934c96.14-45.962 157.982-143.747 157.981-250.531 0-104.462-59.913-201.303-153.051-248.13l-9.949 20.73c85.216 43.043 140.008 131.748 140.008 227.399 0 97.8-56.568 187.37-144.537 229.598z">
                  </path>
                </svg>
              </span>
              <span class="ml10 font12">实时阶梯流量上升小技巧~</span>
            </div>
            <div>
              <el-link type="primary" style="font-size: 12px">查看详情</el-link>
            </div>
          </div>
        </div>
        <div class="user-radar-chart">
          <div class="radar-chart-title">雷达图说明</div>
          <div>
            <div id="userRadarChart" style="width: 330px; height: 310px"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tab-item" :class="{ active: isPerformanceActive }" @click="handleSelectLiveType('livePerformance')">
        直播间业绩表现
      </div>
      <div class="tab-item" :class="{ active: myLiveActive }" @click="handleSelectLiveType('myLive')">
        我的直播列表
      </div>
    </div>
    <div class="tab-content">
      <div class="live-performance-box" v-if="isPerformanceActive">
        <LivePerformance />
      </div>
      <div class="my-live-box" v-if="myLiveActive">
        <live-list />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, computed } from "vue";
import liveList from "./liveList.vue";
import * as echarts from "echarts";
import LivePerformance from "./LivePerformance.vue";
import mock_live from '@/assets/data/current/live.js';

const now = new Date();
const updateDate = ref(
  new Date(now.setDate(now.getDate() - 1))
    .toLocaleDateString()
    .replaceAll("/", "-")
);

const rankInfo = mock_live.performance.overall;

const initUserRadarChart = () => {
  const chart = echarts.init(document.getElementById("userRadarChart"));
  const option = {
    legend: {
      data: ["我的", "同级同类目均值"],
      bottom: -5,
      itemWidth: 12,
      itemHeight: 12,
      icon: "rect",
    },
    radar: {
      shape: "circle",
      splitArea: {
        show: false,
      },
      indicator: [
        { name: "开播", max: 10 },
        { name: "成交", max: 10 },
        { name: "转粉", max: 10 },
        { name: "观看", max: 10 },
        { name: "流量", max: 10 },
      ],
    },
    series: [
      {
        type: "radar",
        areaStyle: {
          opacity: 0.2,
        },
        data: [
          {
            value: [5, 8, 6.5, 7.5, 5],
            name: "我的",
          },
          {
            value: [6.5, 5, 7, 4, 5, 5.2],
            name: "同级同类目均值",
            itemStyle: {
              color: "#00d79a",
            },
          },
        ],
      },
    ],
  };
  chart.setOption(option);
};

const activeTab = ref("livePerformance");
const isPerformanceActive = computed(
  () => activeTab.value === "livePerformance"
);
const myLiveActive = computed(() => activeTab.value === "myLive");
const handleSelectLiveType = (type: string) => {
  activeTab.value = type;
};
onMounted(() => {
  initUserRadarChart();
});
</script>
<style scoped>
.my-live-studio {
  padding: 30px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  border-radius: 6px;
}

.update-date {
  text-align: right;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666;
}

.user-overview-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.user-info-box {
  width: 600px;
  color: rgba(51, 51, 51, 1);
}

.user-info {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 160px;
}

.rank-info {
  display: flex;
  font-size: 14px;
  line-height: 18px;
  padding: 25px 0;
  color: rgba(102, 102, 102, 1);
}

.rank-item {
  width: 50%;
}

.rank-num {
  font-family: DINCondensed-Bold;
  font-size: 26px;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  padding-right: 10px;
}

.optimization-text {
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
}

.notice-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background-image: linear-gradient(90deg, rgba(238, 247, 255, 1), #fff 99%);
}

.notice-icon {
  position: relative;
  top: 5px;
}

.user-radar-chart {
  width: 350px;
  height: 350px;
  padding: 20px 0 20px 20px;
}

.radar-chart-title {
  display: flex;
  align-items: center;
  color: rgba(32, 98, 230, 1);
  font-size: 13px;
  cursor: pointer;
}

.tabs {
  position: relative;
  -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  background: #fff;
  background-color: #fff;
  margin: 20px 0;
  padding: 0 30px;
  display: flex;
  border-radius: 6px;
}

.tab-item {
  padding: 15px 0;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(32, 98, 230, 1);
  line-height: 18px;
  border-bottom: 3px solid #fff;
  margin-right: 30px;
  cursor: pointer;
}

.tab-item.active {
  border-color: rgba(32, 98, 230, 1);
}

.tab-content {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
  border-radius: 6px;
}

.my-live-box {
  padding: 50px 40px;
  background-color: #fff;
}

.view-plan {
  position: absolute;
  right: 0;
  top: 5px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #2062e6;
  border: 1px solid #2062e6;
  padding: 1px 3px;
  border-radius: 2px;
  margin-left: 15px;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
  height: 22px;
}

.view-all-opts {
  display: block;
  color: #333;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #2062e6;
  letter-spacing: 0;
  line-height: 22px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
}
</style>