<template>
  <div class="live-overview-container">
    <div class="time-show">
      <div style="line-height: 18px">统计时间 {{ curDate }}</div>
      <div style="display: flex">
        <el-date-picker v-model="selectDate" type="date" :disabled-date="disabledDate" size="small"
          style="width: 110px; margin-right: 5px"></el-date-picker>
        <div class="pre-day-btn" style="margin-right: 5px">
          <el-button size="small" @click="handleDayBtnClick(-1)"><i class="niceFonts-front-btn"></i></el-button>
        </div>
        <div class="next-day-btn">
          <el-button size="small" @click="handleDayBtnClick(1)" :disabled="disabledDate(selectDate)"><i
              class="niceFonts-end-btn"></i></el-button>
        </div>
      </div>
    </div>
    <div class="live-data-performance">
      <div class="title">直播全局表现</div>
      <div class="preformance-content">
        <div style="display: flex">
          <div class="top-item">
            <div class="top-item-title">
              <span class="mr10">直播种草成交金额</span>
              <i class="niceFonts-fold-line-chart line-chart-icon"></i>
            </div>
            <div class="top-item-num">-</div>
          </div>
          <div class="top-item">
            <div class="top-item-title">
              <span class="mr10">同行同层排名</span>
              <i class="niceFonts-fold-line-chart line-chart-icon"></i>
            </div>
            <div class="top-item-num">-</div>
          </div>
          <div class="top-bg"></div>
        </div>
        <div class="tab-section">
          <div class="tab-item active">
            <div class="left">
              <div class="tab-title">
                <div class="text">
                  <span class="mr10">店铺种草成交金额 </span>
                  <i class="niceFonts-fold-line-chart line-chart-icon"></i>
                </div>
              </div>
              <div class="top-item-num">-</div>
            </div>
            <div class="split"></div>
            <div class="right">
              <p class="right-item">店播占比全店</p>
            </div>
          </div>
          <div class="tab-item" @click="handleClickPeddingTab">
            <div class="left">
              <div class="tab-title">
                <div class="text">
                  <span class="mr10">合作直播种草成交金额 </span>
                  <i class="niceFonts-fold-line-chart line-chart-icon"></i>
                </div>
              </div>
              <div class="top-item-num">-</div>
            </div>
            <div class="split"></div>
            <div class="right">
              <p class="right-item">合作直播占比全店</p>
            </div>
            <div class="pedding">
              <img src="@/assets/img/data/lock.png" style="width: 16px; height: 16px" />
              <span class="pedding-text">即将上线</span>
            </div>
          </div>
        </div>
        <div class="tab-content">
          <div class="table-list">
            <div class="table-list-item" style="width: 50%">
              <div class="table-title">人群组成</div>
              <el-table :data="personTypeData" style="width: 100%">
                <el-table-column prop="personType" label="人群" width="60" />
                <el-table-column prop="vistor" label="直播间访客数" />
                <el-table-column prop="transactionNum" label="种草成交人数" />
                <el-table-column prop="transactionMoney" label="种草成交额" />
              </el-table>
            </div>
            <div class="table-list-item" style="width: 25%">
              <div class="table-title">直播间流量构成</div>
              <el-table :data="dischargeData" style="width: 100%">
                <el-table-column prop="topFive" label="TOP5渠道" />
                <el-table-column prop="vistor" label="访客数" />
              </el-table>
            </div>
            <div class="table-list-item" style="width: 25%">
              <div class="table-title">货品构成</div>
              <el-table :data="productData" style="width: 100%">
                <el-table-column prop="product" label="货品" width="60" />
                <el-table-column prop="turnover" label="直播种草成交金额" />
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="live-check">
      <div class="title">直播智能诊断</div>
      <div class="live-check-content">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="全部" name="all">
            <div class="content-box">
              <div class="no-conclusion">
                <div class="oui-dt-message-content">
                  <span class="oui-dt-message-content-deer"></span>
                  <span>目前没有内容运营相关的问题和机会推荐哦！</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch, shallowReactive } from "vue";
import { ElMessage } from "element-plus";

const curDate = computed(() =>
  selectDate.value.toLocaleDateString().replaceAll("/", "-")
);
const selectDate = ref(new Date());
const disabledDate = (date: Date) => {
  return date.getTime() > new Date().getTime();
};
const handleDayBtnClick = (days: number) => {
  const day = selectDate.value.getDate();
  selectDate.value = new Date(selectDate.value.setDate(day + days));
};
const personTypeData = shallowReactive([
  {
    personType: "整体",
    vistor: 66,
    transactionNum: 2,
    transactionMoney: 3.99,
  },
  {
    personType: "新客",
    vistor: 62,
    transactionNum: 1,
    transactionMoney: 1.0,
  },
]);
const dischargeData = shallowReactive([
  {
    topFive: "推荐",
    vistor: 1,
  },
]);
const productData = shallowReactive([]);

const handleClickPeddingTab = () => {
  ElMessage.info("敬请期待!");
};

const activeTab = ref("all");

watch(selectDate, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
</script>
<style scoped>
.time-show {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 30px;
  font-size: 12px;
}

.time-show :deep(.el-button--small) {
  padding: 5px !important;
}

.live-check {
  margin-top: 10px;
  background-color: #fff;
}

.live-data-performance {
  margin-top: 10px;
  background-color: #fff;
}

.title {
  padding: 10px 30px;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 1px solid #e6e6e6;
}

.preformance-content {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg,
      rgba(238, 247, 255, 0.5) 100%,
      hsla(0, 0%, 100%, 0.5) 0);
}

.top-item {
  padding: 30px 46px;
  display: flex;
  flex-direction: column;
}

.top-item-title {
  line-height: 24px;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  white-space: nowrap;
}

.top-item-num {
  margin-top: 14px;
  line-height: 24px;
  font-family: DINAlternate-Bold;
  font-size: 32px;
  color: #333;
}

.line-chart-icon {
  color: #2062e6;
  font-size: 14px;
}

.top-bg {
  position: absolute;
  top: 0;
  right: 40px;
  width: 154px;
  height: 154px;
  background: url("@/assets/img/data/livePerformance.png") 0 0 no-repeat;
  background-size: contain;
}

.tab-section {
  padding: 0 16px;
  width: 100%;
  height: 106px;
  display: flex;
  align-items: center;
}

.tab-item {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #f7f9fc;
  border: 1px solid #cacaca;
  cursor: pointer;
}

.tab-item .left {
  padding-left: 20px;
  width: calc(50% - 1px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tab-item .split {
  width: 2px;
  height: 48px;
  background-color: hsla(0, 0%, 84.7%, 0.3);
  border-radius: 2px;
}

.tab-item .right {
  width: calc(50% - 1px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tab-item .right .right-item {
  padding-left: 30px;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: #333;
}

.tab-item .pedding {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(90deg,
      rgba(34, 99, 229, 0.1) 4%,
      rgba(152, 186, 255, 0.1));
  border-radius: 2px 2px 2px 22px;
}

.pedding-text {
  margin-left: 4px;
  font-size: 12px;
  color: rgba(51, 51, 51, 0.6);
}

.tab-item.active {
  border-bottom: 1px solid #2263e5;
  border-top: 1px solid #2263e5;
  border-color: #2263e5 #2263e5 transparent;
  border-style: solid;
  border-width: 6px 1px 1px;
  position: relative;
}

.tab-item:first-child:before {
  content: "";
  position: absolute;
  left: -16px;
  bottom: -1px;
  width: 16px;
  height: 1px;
  background-color: #cacaca;
}

.tab-item:last-child::after {
  content: "";
  position: absolute;
  right: -16px;
  bottom: -1px;
  width: 16px;
  height: 1px;
  background-color: #cacaca;
}

.tab-item.active:before {
  background-color: #2263e5;
}

.tab-title {
  display: flex;
  align-items: center;
}

.tab-title .text {
  line-height: 24px;
  font-weight: 600;
  font-size: 18px;
  color: #333;
}

.tab-content {
  padding: 25px 24px;
  background-color: #fff;
}

.table-list {
  margin-top: 24px;
  display: flex;
}

.table-list-item {
  margin-right: 30px;
}

.table-title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.table-list :deep(.el-table__header .cell) {
  text-align: left;
  color: #333333;
  font-size: 12px;
  font-weight: 500;
}

.table-list :deep(.el-table__body .cell) {
  text-align: left;
  color: #333333;
  font-size: 12px;
  font-weight: 500;
}

.live-check-content {
  padding: 10px 30px 30px;
  background-color: #f9fafb;
}

.content-box {
  min-height: 300px;
  position: relative;
  padding: 0 16px;
  margin-top: 8px;
}

.oui-dt-message-content {
  position: absolute;
  top: 30%;
  left: 40%;
  width: 80%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 0 15px;
  min-height: 56px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.oui-dt-message-content-deer {
  width: 100px;
  height: 100px;
  margin: 10px 0;
  background: url('@/assets/img/data/beer.png') no-repeat;
  background-size: 100px 100px;
}</style>