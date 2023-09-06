<template>
  <div class="top-tab-container">
    <el-row justify="space-between">
      <el-tabs v-model="activeTab">
        <el-tab-pane name="1">
          <template #label>
            <i class="niceFonts-recipt"></i>
            层级诊断
          </template>
        </el-tab-pane>
        <el-tab-pane name="overview">
          <template #label>
            <i class="niceFonts-operation"></i>
            运营视窗
          </template>
        </el-tab-pane>
        <el-tab-pane name="2">
          <template #label>
            <i class="niceFonts-service"></i>
            服务视窗
          </template>
        </el-tab-pane>
        <el-tab-pane name="3">
          <template #label>
            <i class="niceFonts-manage"></i>
            管理视窗
          </template>
        </el-tab-pane>
        <el-tab-pane name="4">
          <template #label>
            <i class="niceFonts-app"></i>
            应用视窗
          </template>
        </el-tab-pane>
      </el-tabs>
      <div class="date-select mr20">
        <div>
          <span class="pr10">统计时间</span>
          <el-date-picker
            ref="datePickRef"
            v-model="selectDate"
            :type="dateType"
            :format="dateType === 'week' ? '[第]ww[周]' : 'YYYY-MM-DD'"
            :disabled-date="disabledDate"
            size="small"
            style="width: 150px; margin-right: 10px"
          ></el-date-picker>
        </div>
        <div>
          <el-radio-group
            v-model="dateType"
            size="small"
            @change="changeDateType"
          >
            <el-radio-button label="date">日</el-radio-button>
            <el-radio-button label="week">周</el-radio-button>
            <el-radio-button label="month">月</el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </el-row>
  </div>
  <div class="operation-win-container">
    <div class="header">
      <div class="title">
        <i class="niceFonts-whole" style="padding-right: 10px"></i>整体看板
      </div>
      <div class="header-right-box">
        <el-checkbox size="small" v-model="showActiveInfo" >显示活动信息</el-checkbox>
        <el-checkbox size="small"  v-model="compareOther" >同行对比</el-checkbox>
        <span style="color: #2062e6">图表</span>
        <span style="margin: 0 5px">|</span>
        <span>表格</span>
      </div>
    </div>
    <div class="show-card-group">
      <div class="turn-btn" @click="changeCard(-1)">
        <i class="niceFonts-front-btn"></i>
      </div>
      <div class="card-box">
        <div
          v-for="(cardItem, index) in cardDatas"
          :key="index"
          class="card-item"
          :class="{ 'card-item-active': selectCardItem === cardItem.key }"
          @click="clickCardItem(cardItem.key)"
        >
          <div>
            <div>
              <div class="card-title">{{ cardItem.desc }}</div>
              <div class="data-label">{{ cardItem.cur }}</div>
            </div>
            <div class="change-level">
              <div class="label">{{ changeLevelOneLabel }}</div>
              <div class="trend-value">
                <span
                  :style="{
                    color: parseCardTrend(cardItem.pre).isTextColorRender
                      ? parseCardTrend(cardItem.pre).color
                      : '',
                  }"
                  style="padding-right: 10px"
                  >{{ parseCardTrend(cardItem.pre).value }}</span
                >
                <i
                  class="niceFonts-trend-up"
                  v-if="parseCardTrend(cardItem.pre).trend === 'up'"
                  :style="{ color: parseCardTrend(cardItem.pre).color }"
                ></i>
                <i
                  class="niceFonts-trend-down"
                  v-if="parseCardTrend(cardItem.pre).trend === 'down'"
                  :style="{ color: parseCardTrend(cardItem.pre).color }"
                ></i>
              </div>
            </div>
            <div class="change-level">
              <div class="label">{{ changeLevelTwoLabel }}</div>
              <div class="trend-value">
                <span
                  :style="{
                    color: parseCardTrend(cardItem.compareLast)
                      .isTextColorRender
                      ? parseCardTrend(cardItem.compareLast).color
                      : '',
                  }"
                  style="padding-right: 10px"
                  >{{ parseCardTrend(cardItem.compareLast).value }}</span
                >
                <i
                  class="niceFonts-trend-up"
                  v-if="parseCardTrend(cardItem.compareLast).trend === 'up'"
                  :style="{ color: parseCardTrend(cardItem.compareLast).color }"
                ></i>
                <i
                  class="niceFonts-trend-down"
                  v-if="parseCardTrend(cardItem.compareLast).trend === 'down'"
                  :style="{ color: parseCardTrend(cardItem.compareLast).color }"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="turn-btn"
        @click="changeCard(1)"
        style="right: -10px; left: unset"
      >
        <i class="niceFonts-end-btn"></i>
      </div>
    </div>
    <div id="view-board-chart" style="width: 100%; height: 350px"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { ref, computed, watch, reactive, onMounted } from "vue";
import { viewBoardData as _viewBoardData } from "./operationWinData";
import { getYearWeek } from "../utils";

const activeTab = ref('overview')
const showActiveInfo = ref(true)
const compareOther = ref(true)

const MAX_CARD_ITEM = 7;
const datePickRef = ref(null);
const dateType = ref("date");
const selectDate = ref(new Date());
const disabledDate = (date: Date) => {
  return date.getTime() > new Date().getTime();
};
const changeDateType = () => {
  initPayMoneyChart();
  datePickRef.value.click();
};

const cardPage = ref(0);
const changeCard = (value: -1 | 1) => {
  if (value === -1 && cardPage.value === 0) {
    return;
  }
  if (
    value === 1 &&
    (cardPage.value + 1) * MAX_CARD_ITEM > viewBoardData.length
  ) {
    return;
  }
  cardPage.value += value;
};
const viewBoardData = reactive(_viewBoardData);
const parseCardTrend = (value: string | null) => {
  let trend = value === null ? "" : "up";
  let color = "#F04134";
  if (value?.startsWith("-")) {
    trend = "down";
    value = value.slice(1);
    color = "#00A854";
  }

  return {
    trend,
    value,
    color,
    isTextColorRender: Number(value?.slice(-1)) > 30,
  };
};
const cardDatas = computed(() => {
  const date = selectDate.value;
  const result = viewBoardData
    .map((item) => {
      const { cur, pre, compareLast } = item[dateType.value];
      const fixedNum = Number.isInteger(cur) ? 0 : 2;
      return {
        key: item.key,
        desc: item.desc,
        cur:
          typeof cur === "number"
            ? ((Math.random() + 1) * cur).toFixed(fixedNum)
            : cur,
        pre,
        compareLast,
      };
    })
    .filter((item, index) => {
      if (cardPage.value === 0) {
        return index < MAX_CARD_ITEM;
      } else {
        return (
          index >= MAX_CARD_ITEM * cardPage.value &&
          index < MAX_CARD_ITEM * (cardPage.value + 1)
        );
      }
    });
  return result;
});
const selectCardItem = ref("money");
const clickCardItem = (type: string) => {
  selectCardItem.value = type;
  initPayMoneyChart(true);
};

const changeLevelOneLabel = computed(() => {
  const lableMap = {
    date: "较前1日",
    week: "较上周",
    month: "较上月",
  };

  return lableMap[dateType.value];
});
const changeLevelTwoLabel = computed(() => {
  const lableMap = {
    date: "较上周同期",
    week: "较去年同期",
    month: "较去年同期",
  };

  return lableMap[dateType.value];
});

const initPayMoneyChart = (randomData: boolean = false) => {
  const payMoneyChart = echarts.init(
    document.getElementById("view-board-chart")
  );
  const {
    chartData: { my, rivalAvg, rivalTop },
  } = _viewBoardData.find(({ key }) => key === selectCardItem.value)?.[
    dateType.value
  ];
  payMoneyChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      left: 20,
      data: ["我的", "同行同层平均", "同行同层优秀"],
      itemWidth: 14,
      itemHeight: 14,
      icon: "rect",
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
        data: my.map((item: number) =>
          randomData ? ((Math.random() + 1) * item).toFixed(2) : item
        ),
        smooth: true,
        symbol: "none",
      },
      {
        name: "同行同层平均",
        type: "line",
        stack: "Total",
        data: rivalAvg.map((item: number) =>
          randomData ? ((Math.random() + 1) * item).toFixed(2) : item
        ),
        smooth: true,
        symbol: "none",
      },
      {
        name: "同行同层优秀",
        type: "line",
        stack: "Total",
        data: rivalTop.map((item: number) =>
          randomData ? ((Math.random() + 1) * item).toFixed(2) : item
        ),
        smooth: true,
        symbol: "none",
      },
    ],
  });
};
const getXAiasLabel = () => {
  const result: string[] = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  switch (dateType.value) {
    case "date":
      new Array(30).fill(0).forEach((item, index) => {
        const targetDate = new Date(new Date().setDate(day - index));
        result.push(
          targetDate.toLocaleDateString().replaceAll("/", "-").slice(5)
        );
      });
      break;
    case "week":
      const curWeek = getYearWeek(year, month, day);
      new Array(12).fill(0).forEach((item, index) => {
        result.push(`${year} 第 ${curWeek - index}周`);
      });
      break;
    case "month":
      new Array(12).fill(0).forEach((item, index) => {
        const targetDate = new Date(new Date().setMonth(month - index - 1));
        result.push(
          targetDate.toLocaleDateString().replaceAll("/", "-").slice(0, 6)
        );
      });
      break;
  }
  return result.reverse();
};

watch(selectDate, () => {
  initPayMoneyChart(true);
});

onMounted(() => {
  initPayMoneyChart();
});
</script>
<style lang="css" scoped>
.operation-win-container {
  margin-top: 10px;
  padding: 20px;
  font-size: 12px;
  box-shadow: var(--el-box-shadow-light);
  background: #fff;
}
.operation-win-container .title {
  font-size: 16px;
}
.top-tab-container {
  margin-top: 8px;
  padding-left: 20px;
  font-size: 12px;
  box-shadow: var(--el-box-shadow-light);
  background: #fff;
}
.top-tab-container :deep(.el-tabs__header) {
  margin-bottom: 0px;
}
.top-tab-container :deep(.el-tabs__item) {
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  color: #333;
}
.header-right-box {
  display: flex;
  align-items: center;
  color: #333 !important;
}
.header-right-box :deep(.el-checkbox) {
  margin-right: 10px;
}
.header-right-box :deep(.el-checkbox .el-checkbox__label) {
  color: #333 !important;
}
.header {
  display: flex;
  justify-content: space-between;
}
.date-select {
  display: flex;
  align-items: center;
}
.show-card-group {
  position: relative;
  width: 100%;
  margin-top: 10px;
}
.show-card-group .card-box {
  display: flex;
  width: 100%;
  border-top: 1px solid #dbe5ed;
  padding: 0 20px;
}
.card-item:last-child {
  border-right: 1px solid #dbe5ed;
}
.card-item-active:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #2062e6;
}
.card-title {
  color: #333;
  font-size: 14px;
  display: inline-block;
}
.data-label {
  color: #333;
  font-size: 24px;
  margin-bottom: 11px;
  font-weight: 700;
}
.change-level {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
  line-height: 20px;
}
.show-card-group .card-item {
  position: relative;
  width: 14.3%;
  height: 135px;
  padding: 20px 8px;
  border-left: 1px solid #dbe5ed;
  border-bottom: 1px solid #dbe5ed;
  cursor: pointer;
}
.turn-btn {
  position: absolute;
  top: 46px;
  left: -10px;
  font-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.turn-btn:hover {
  box-shadow: var(--el-box-shadow-light);
  color: #2062e6;
}
#view-board-chart {
  width: 100%;
  height: 400px;
  margin-top: 30px;
}
</style>