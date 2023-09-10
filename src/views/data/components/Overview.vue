<template>
  <div class="data-overview">
    <el-row :gutter="10">
      <el-col :span="17">
        <el-card>
          <template #header>
            <div class="card-header">
              <div>实时概况</div>
              <div class="extra-info">
                <span>更新时间：{{ date }}</span>
                <span class="real-time-link">实时概况 > </span>
              </div>
            </div>
          </template>
          <div class="card-container">
            <el-row :gutter="30">
              <el-col :span="12">
                <div class="pay-section">
                  <div class="view-item">
                    <div class="icon-data-box">
                      <div>
                        <i class="icon-item niceFonts-money" style="color: #2062e6"></i>
                      </div>
                      <div>
                        <p class="title">支付金额(元)</p>
                        <p class="info">{{ overviewData.money.today }}</p>
                      </div>
                    </div>
                    <div class="extra-info" style="flex-direction: column">
                      <p>
                        <span class="label">行业排名</span>
                        <span>{{ overviewData.money.rank }}</span>
                      </p>
                      <p>
                        <span class="label">直播占比</span>
                        <span>{{ overviewData.money.livePercentage }}</span>
                      </p>
                      <p>
                        <span class="label">昨天全天</span>
                        <span>{{ overviewData.money.yesterday }}</span>
                      </p>
                    </div>
                  </div>
                  <div id="pay-chart" style="width: 100%; height: 150px"></div>
                </div>
              </el-col>
              <el-col :span="12">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <div class="view-item" style="flex-direction: column">
                      <div class="icon-data-box">
                        <div>
                          <i class="niceFonts-vistor icon-item" style="color: #fe7c24"></i>
                        </div>
                        <div>
                          <p class="title">访客数</p>
                          <p class="info">{{ overviewData.vistor.today }}</p>
                        </div>
                      </div>
                      <div class="extra-info">
                        <p style="width: 50%">
                          <span class="label">昨日全天</span>
                          <span>{{ overviewData.vistor.yesterday }}</span>
                        </p>
                        <p style="width: 50%">
                          <span class="label">排名</span>
                          <span>{{ overviewData.vistor.rank }}</span>
                        </p>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="view-item" style="flex-direction: column">
                      <div class="icon-data-box">
                        <div>
                          <i class="niceFonts-pay-buyers icon-item" style="color: #00ba26"></i>
                        </div>
                        <div>
                          <p class="title">支付买家数</p>
                          <p class="info">{{ overviewData.payBuyer.today }}</p>
                        </div>
                      </div>
                      <div class="extra-info">
                        <p style="width: 50%">
                          <span class="label">直播占比</span>
                          <span>{{
                            overviewData.payBuyer.livePercentage
                          }}</span>
                        </p>
                        <p style="width: 50%">
                          <span class="label">排名</span>
                          <span>{{ overviewData.payBuyer.rank }}</span>
                        </p>
                        <p style="width: 50%">
                          <span class="label">昨日全天</span>
                          <span>{{ overviewData.payBuyer.yesterday }}</span>
                        </p>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="margin-top: 30px">
                  <el-col :span="12">
                    <div class="view-item" style="flex-direction: column">
                      <div class="icon-data-box">
                        <div>
                          <i class="niceFonts-pay-view icon-item" style="color: #f3d024"></i>
                        </div>
                        <div>
                          <p class="title">浏览量</p>
                          <p class="info">{{ overviewData.view.today }}</p>
                        </div>
                      </div>
                      <div class="extra-info">
                        <p>
                          <span class="label">昨日全天</span>
                          <span>{{ overviewData.view.yesterday }}</span>
                        </p>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="view-item" style="flex-direction: column">
                      <div class="icon-data-box">
                        <div>
                          <i class="niceFonts-order-list icon-item" style="color: #00b3fe"></i>
                        </div>
                        <div>
                          <p class="title">支付子订单数</p>
                          <p class="info">
                            {{ overviewData.paySubOrder.today }}
                          </p>
                        </div>
                      </div>
                      <div class="extra-info">
                        <p style="width: 50%">
                          <span class="label">直播占比</span>
                          <span>{{
                            overviewData.paySubOrder.livePercentage
                          }}</span>
                        </p>
                        <p style="width: 50%">
                          <span class="label">昨日全天</span>
                          <span>{{ overviewData.paySubOrder.yesterday }}</span>
                        </p>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7" class="shop-info-card">
        <el-card style="height: 290px">
          <template #header>
            <div class="card-header">
              <div style="position: relative; top: -8px">
                商家成长层级<i style="padding-left: 5px" class="niceFonts-tooltip"></i>
              </div>
              <div class="extra-info" style="display: block">
                <p style="line-height: 12px">行业：珠宝/钻石/翡翠/黄金</p>
                <p style="text-align: right">每周更新</p>
              </div>
            </div>
          </template>
          <div>
            <el-row :gutter="10" class="mb10">
              <el-col :span="4">
                <div>
                  <span style="font-size: 18px; font-weight: 700">Lv.</span>
                  <span style="font-size: 36px; font-weight: 700">{{ mock_home.shopGrowLevel.level }}</span>
                </div>
                <div class="extra-info">当前层级</div>
              </el-col>
              <el-col :span="20">
                <div style="font-size: 12px; color: #333; padding-top: 15px">
                  打败<span class="sycm-level-progress-num">{{ mock_home.shopGrowLevel.per
                  }}</span>%同行同层，进步{{ mock_home.shopGrowLevel.improve }}%
                  <i class="niceFonts-fold-line-chart" style="color: #2062e6"></i>
                </div>
                <div style="display: flex">
                  <div class="font12 pt10" style="color: #b2cafb">Lv3</div>
                  <el-progress :show-text="false" :percentage="61" style="width: 100%; padding: 10px 10px 0 10px" />
                  <div class="font12 pt10" style="color: #b2cafb">Lv4</div>
                </div>
              </el-col>
            </el-row>
            <div class="more-benifit-btn">更多权益></div>
            <el-row>
              <el-col :span="4">
                <div>
                  <img class="sycm-list-item-logo" src="@/assets/img/data/equlty.png" />
                </div>
              </el-col>
              <el-col :span="20" style="display: flex; justify-content: space-between">
                <div>
                  <div style="font-size: 12px">权益：2项分层专属权益</div>
                  <div class="extra-info">市场洞察标准版</div>
                </div>
                <button type="button" class="view-more-btn">立即查看</button>
              </el-col>
            </el-row>
            <el-row class="pt10">
              <el-col :span="4">
                <div>
                  <img class="sycm-list-item-logo" src="@/assets/img/data/equlty.png" />
                </div>
              </el-col>
              <el-col :span="20" style="display: flex; justify-content: space-between">
                <div>
                  <div style="font-size: 12px">诊断：10个必做任务未完成</div>
                  <div class="extra-info">60%的商家通过必须做任务升级成功</div>
                </div>
                <button type="button" class="view-more-btn">立即查看</button>
              </el-col>
            </el-row>
            <div style="text-align: right; position: relative; top: -10px">
              <span class="slick-item" style="width: 24px; background-color: rgba(32, 98, 230, 0.3)"></span>
              <span class="slick-item"></span>
              <span class="slick-item" style="margin-right: 10px"></span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";

import mock_home from '@/mock/current/sycm.js';

const date = ref(new Date().toLocaleString());
const overviewData = mock_home.overall;

const initPayMoneyChart = () => {
  const payMoneyChart = echarts.init(document.getElementById("pay-chart"));
  payMoneyChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      left: 10,
      top: 15,
      data: ["今日", "昨日"],
      itemWidth: 10,
      itemHeight: 10,
      icon: "rect",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisTick: {
        show: false
      },
      data: ["00", "03", "06", "09", "12", "15", "18", "21", "23"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value: number, index: number) {
          if (value.toString().length === 5) {
            return `${value.toString().slice(0, 1)}万`
          }
          if (value.toString().length === 4) {
            return `${value.toString().slice(0, 1)}千`
          }
          return index % 3 === 0 ? value : "";
        },
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: "今日",
        type: "line",
        data: [0, 0, 0, 0, 13978, 21001, 39013, 58612, 67912],
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: '#1d59e2'
        },
        areaStyle: {
          opacity: 0.2
        }
      },
      {
        name: "昨日",
        type: "line",
        data: [0, 0, 0, 0, 10012, 29876, 41604, 64312, 77657],
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: '#c6c6c6'
        },
        areaStyle: {
          opacity: 0.2
        }
      },
    ],
  });
};

onMounted(() => {
  initPayMoneyChart();
});
</script>
<style scoped>
.data-overview .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data-overview :deep(.el-card__header) {
  border-bottom: none;
}

.data-overview :deep(.el-card__body) {
  padding-top: 0;
}

.shop-info-card :deep(.el-card__header) {
  padding-bottom: 10px;
}

.view-item {
  display: flex;
  justify-content: space-between;
}

.icon-data-box {
  display: flex;
}

.icon-data-box .icon-item {
  width: 48px;
  height: 48px;
  font-size: 48px;
  margin-right: 10px;
}

.title {
  font-size: 14px;
}

.info {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}

.extra-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 20px;
  color: #999;
}

.extra-info .label {
  margin-right: 12px;
}

.pay-chart {
  width: 450px;
  height: 164px;
}

.sycm-list-item-logo {
  height: 46px;
  width: 46px;
  border-radius: 6px;
}

.view-more-btn {
  position: relative;
  top: 10px;
  color: #fff;
  background-color: #2062e6;
  border-color: #2062e6;
  padding: 0 7px;
  font-size: 12px;
  border-radius: 2px;
  height: 24px;
}

.more-benifit-btn {
  font-size: 12px;
  text-align: right;
  color: #2062e6;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}

.slick-item {
  display: inline-block;
  width: 16px;
  height: 3px;
  background-color: rgb(236, 236, 236);
  margin: 0 2px;
}

.real-time-link {
  color: #2062e6;
  margin-left: 20px;
}
</style>
