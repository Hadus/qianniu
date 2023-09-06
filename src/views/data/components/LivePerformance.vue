<template>
  <div>
    <div class="live-performance-section">
      <div class="header">
        <div class="title">直播间大盘</div>
        <div>
          <el-date-picker
            v-model="broadcastDate"
            type="date"
            :disabled-date="disabledDate"
            style="width: 150px; margin-right: 5px"
          ></el-date-picker>
        </div>
      </div>
      <div>
        <div class="next-slick">
          <div class="next-slick-list">
            <div class="next-slick-track" style="transform: translateX(-480px)">
              <div
                class="next-slick-slide"
                v-for="(item, index) in slickList"
                :key="index"
                @click="selectSlick(item)"
              >
                <div
                  class="series-field-wrapper"
                  :class="{
                    'series-field-selected': selectSlickKey === item.key,
                  }"
                >
                  <div class="series-field-top">
                    <div class="series-field-title">{{ item.desc }}</div>
                  </div>
                  <div class="series-field-data">
                    {{ item.value }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="next-slick-arrow pre-btn"
            @click="handleSlick(1)"
          >
            <i class="next-icon-arrow-right niceFonts-front-btn"></i>
          </button>
          <button
            type="button"
            class="next-slick-arrow post-btn"
            @click="handleSlick(-1)"
          >
            <i class="next-icon-arrow-right niceFonts-end-btn"></i>
          </button>
        </div>
      </div>
      <div class="chart-section">
        <div class="chart-header">
          <div class="title">{{ chartData.desc }}</div>
          <div style="display: flex">
            <el-radio-group v-model="dayCounts" @change="changeDayCounts">
              <el-radio-button label="7">7天</el-radio-button>
              <el-radio-button label="15">15天</el-radio-button>
              <el-radio-button label="30">30天</el-radio-button>
            </el-radio-group>
            <el-date-picker
              class="ml10"
              v-model="slickDate"
              :disabled-date="disabledDate"
              type="daterange"
              range-separator="-"
              style="width: 260px"
            />
          </div>
        </div>
        <div class="chart-wrapper">
          <div
            style="padding: 0 20px; height: 350px; width: 100%"
            id="slickChart"
          ></div>
        </div>
      </div>
    </div>
    <div class="live-order-detail-section">
      <div class="detail-header">
        <div class="detail-title">直播订单明细</div>
        <div style="display: flex">
          <el-input
            v-model="detailFilter.search"
            placeholder="请输入商品标题/ID"
            :suffix-icon="Search"
            style="width: 150px; margin-right: 10px"
          />
          <el-select v-model="detailFilter.select" class="mr10">
            <el-option
              key="payTime"
              value="payTime"
              label="支付时间"
            ></el-option>
            <el-option
              key="receiptTime"
              value="receiptTime"
              label="收货时间"
            ></el-option>
          </el-select>
          <el-date-picker
            v-model="detailFilter.dateTime"
            :disabled-date="disabledDate"
            type="datetimerange"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            style="width: 350px"
          />
        </div>
      </div>
      <div class="detail-table-header">
        <div>仅展示近90天支付/确认收货订单，支持查看5千条数据</div>
        <div>右滑查看更多</div>
      </div>
      <div class="defail-table-wrapper">
        <el-table
          :data="tableData"
          style="width: 100%"
          v-loading="detailTableLoading"
        >
          <el-table-column
            fixed
            prop="contentTitle"
            label="直播标题"
            width="150"
          />
          <el-table-column
            fixed
            prop="liveStartTime"
            label="开播时间"
            width="120"
          />
          <el-table-column prop="orderId" label="场次ID" width="120" />
          <el-table-column prop="daiboName" label="代播主播名称" width="150" />
          <el-table-column prop="address" label="会员名" />
          <el-table-column prop="fansType" label="直播粉丝层级" width="150" />
          <el-table-column prop="contentId" label="商品ID" />
          <el-table-column prop="itemTitle" label="商品标题" width="260" />
          <el-table-column
            prop="cateLevel1Name"
            label="商品一级类目"
            width="150"
          />
          <el-table-column prop="cateLevel1Id" label="父订单" />
          <el-table-column prop="itemId" label="子订单" />
          <el-table-column prop="createTime" label="下单时间" />
          <el-table-column prop="payTime" label="支付时间" />
          <el-table-column prop="divPayAmt" label="支付金额" />
          <el-table-column
            prop="confirmPaidTime"
            label="确认收货时间"
            width="150"
          />
          <el-table-column prop="refundAmt" label="确认收货金额" width="150" />
          <el-table-column prop="daiboId" label="代播ID" />
        </el-table>
        <div class="pagination-box">
          <el-pagination
            v-model:current-page="detailFilter.curPage"
            :small="small"
            layout="prev, pager, next, jumper"
            :total="621"
          />
        </div>
      </div>
    </div>
    <div class="preorder-section">
      <div class="detail-header">
        <div class="detail-title">直播间预售数据</div>
        <div style="display: flex; align-items: center">
          <div class="mr10 font12" style="color: #999">统计日期</div>
          <el-date-picker
            class="ml10"
            v-model="preorderDate"
            :disabled-date="disabledDate"
            type="daterange"
            range-separator="-"
            style="width: 260px"
          />
        </div>
      </div>
      <div class="detail-table-header">
        <div>仅展示近90天数据</div>
        <div>右滑查看更多</div>
      </div>
      <div class="defail-table-wrapper">
        <el-table
          :data="orderFrontTable"
          style="width: 100%"
          v-loading="preorderTableLoading"
        >
          <el-table-column
            fixed
            prop="statisticsTime"
            label="统计日期"
            width="150"
          />
          <el-table-column
            prop="payPersonCount"
            label="当日预售支付定金人数"
            width="120"
          />
          <el-table-column prop="payFrontCount" label="当日预售支付定金笔数" width="120" />
          <el-table-column prop="payFrontMonry" label="当日预售支付定金金额" width="150" />
          <el-table-column prop="payTailPerson" label="当日预售支付尾款人数（不含定金）" width="150" />
          <el-table-column prop="payTailCount" label="当日预售支付尾款笔数（不含定金）" width="150" />
          <el-table-column prop="payTailMoney" label="当日预售支付尾款金额（不含定金）"  width="150"/>
          <el-table-column
            prop="confirmReceiptPerson"
            label="当日预售确认收货人数"
            width="150"
          />
          <el-table-column prop="confirmReceiptCount" label="当日预售确认收货笔数" width="150" />
          <el-table-column prop="confirmReceiptMoney" label="当日预售确认收货金额" width="150" />
          <el-table-column prop="totalMoney" label="当日实际预售支付总金额（定金 + 尾款）" width="180" />
          <el-table-column prop="toatlTailMoney" label="预估最终支付尾款金额（不含定金）" width="180" />
        </el-table>
        <div class="pagination-box">
          <el-pagination
            v-model:current-page="detailFilter.curPage"
            :small="small"
            layout="prev, pager, next, jumper"
            :total="621"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import * as echarts from "echarts";
import { liveBroadcastData, orderDetails, orderFront } from "./liveStreamData";

const broadcastDate = ref(new Date());
const disabledDate = (date: Date) => {
  return date.getTime() > new Date().getTime();
};

const slickList = reactive(liveBroadcastData);
const handleSlick = (num: number) => {
  const nextSlickHtml = document.getElementsByClassName("next-slick-track")[0];
  const curPos = Number(
    /(\-?\d+)/.exec(nextSlickHtml.style.transform)?.[0] ?? 0
  );
  if (
    (num === 1 && curPos >= 0) ||
    (num === -1 && curPos <= slickList.length * -240)
  ) {
    return;
  }
  nextSlickHtml.style.transform = `translateX(${curPos + num * 240}px)`;
};
const selectSlickKey = ref("viewCount");
const selectSlick = (slickItem: { key: string }) => {
  selectSlickKey.value = slickItem.key;
  initSlickCharts();
};

const chartData = computed(() =>
  liveBroadcastData.find((item) => item.key === selectSlickKey.value)
);

const getPreDay = (date: Date, days: number) => {
  const curDay = date.getDate();
  return new Date(date.setDate(curDay - days));
};
const dayCounts = ref(7);
const changeDayCounts = () => {
  slickDate.value = [
    getPreDay(new Date(slickDate.value[1].getTime()), dayCounts.value),
    slickDate.value[1],
  ];
  initSlickCharts();
};
const slickDate = ref([getPreDay(new Date(), 7), new Date()]);
const getXAiasLabel = () => {
  const endDate = slickDate.value[1];
  const result = new Array(Number(dayCounts.value)).fill(0);
  const day = endDate.getDate();
  return result
    .map((item, index) => {
      return new Date(
        new Date(endDate.getTime()).setDate(day - index - 1)
      ).toLocaleDateString();
    })
    .reverse();
};
let chartIns = null;
const initSlickCharts = (isRandom: boolean = false) => {
  const chartData =
    liveBroadcastData.find((item) => item.key === selectSlickKey.value)?.data ??
    [];
  chartIns.setOption({
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: getXAiasLabel(),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "我的",
        type: "line",
        stack: "Total",
        data: chartData.slice(0, dayCounts.value),
        smooth: true,
        symbol: "none",
      },
    ],
  });
};

const detailTableLoading = ref(false);
const detailFilter = reactive({
  search: "",
  select: "payTime",
  dateTime: [new Date().setDate(new Date().getDate() - 1), new Date()],
  curPage: 1,
});
watch(
  detailFilter,
  () => {
    detailTableLoading.value = true;
    setTimeout(() => {
      detailTableLoading.value = false;
    }, 1000);
  },
  { deep: true }
);
const tableData = reactive(orderDetails);

const orderFrontTable  = reactive(orderFront)

const preorderTableLoading = ref(false);
const preorderDate = ref([
  new Date().setDate(new Date().getDate() - 1),
  new Date(),
]);
watch(
  preorderDate,
  () => {
    preorderTableLoading.value = true;
    setTimeout(() => {
      preorderTableLoading.value = false;
    }, 1000);
  },
  { deep: true }
);

onMounted(() => {
  document.getElementsByClassName("next-slick-track")[0].style.width = `${
    slickList.length * 242
  }px`;
  chartIns = echarts.init(document.getElementById("slickChart"));
  initSlickCharts();
});
</script>
<style scoped>
.live-performance-section {
  background-color: #fff;
}
.header {
  padding: 20px 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}
.next-slick {
  padding: 0 24px;
  position: relative;
  user-select: none;
}
.next-slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
}
.next-slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  transition: transform 600ms ease 0s;
}
.next-slick-slide {
  width: 240px;
  float: left;
  height: 100%;
  min-height: 1px;
  outline: 0;
  transition: all 0.1s linear;
}
.series-field-wrapper {
  background-color: #f9f9f9;
  cursor: pointer;
  padding: 15px 20px;
  margin: 0 5px;
  height: 95px;
  border: 1px solid #f9f9f9;
}
.series-field-selected {
  border-color: rgba(32, 98, 230, 1);
}
.series-field-top {
  display: flex;
  align-items: center;
}
.series-field-title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  text-align: left;
  line-height: 14px;
  margin-right: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 15px;
}
.series-field-data {
  margin-top: 10px;
  font-family: DINCondensed-Bold;
  font-size: 26px;
  color: rgba(51, 51, 51, 1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.next-slick-arrow {
  position: absolute;
  top: calc(50% - 28px);
  color: #fff;
  background: transparent;
  opacity: 0.32;
  padding: 0;
  border: none;
  border-radius: 0;
  height: 56px;
  width: 28px;
  line-height: 56px;
}
.pre-btn {
  left: 3px;
}
.post-btn {
  right: 3px;
}
.next-icon-arrow-right {
  color: rgba(51, 51, 51, 1) !important;
  border-radius: 50px;
  font-weight: bolder !important;
  transform: scale(0.75) !important;
  font-size: 24px;
  cursor: pointer;
}
.chart-header {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-header .title {
  font-size: 14px;
  color: rgba(102, 102, 102, 1);
}
.chart-wrapper {
  margin-top: 10px;
  min-height: 100px;
}
.live-order-detail-section {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  margin: 20px 0;
  border-radius: 6px;
}
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 10px;
}
.detail-title {
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}
.detail-table-header {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999;
  line-height: 12px;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
}
.defail-table-wrapper {
  margin: 0 30px 30px;
}
.defail-table-wrapper :deep(.el-table__header .cell) {
  text-align: left;
  color: #333333;
  font-size: 12px;
  font-weight: 500;
}
.defail-table-wrapper :deep(.el-table__body .cell) {
  text-align: left;
  color: #333333;
  font-size: 12px;
  font-weight: 500;
}
.pagination-box {
  padding: 10px 0 20px 0;
}
.pagination-box :deep(.el-pagination) {
  justify-content: end;
}
.preorder-section {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  margin: -10px 0 20px;
  border-radius: 6px;
}
</style>