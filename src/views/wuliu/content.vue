

<template>
  <div class="content-wrapper">
    <div class="beard">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item>发货</el-breadcrumb-item>
        <el-breadcrumb-item>物流详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item">
      <div class="order-info">
        <div class="left">
          <div>
            <p>
              <span class="key">交易订单编号：</span><span class="value">{{ tradeId }}</span>
            </p>
            <p>
              <span class="key">支付时间：</span><span class="value">{{ order_detail__plus.payTime }}</span>
            </p>
          </div>
          <div>
            <p>
              <span>买家收货信息：</span><span> {{ order_derail_plus_address.content.address_ }}</span>
              <el-icon>
                <ArrowDownBold />
              </el-icon>
              <a href="javascript:;" style="color: #5584ff; font-size: 12px;">
                <i class="wuliuFonts3-show" style="color: #5584ff;"></i>
                显示</a>
            </p>
          </div>
        </div>
        <div class="right">
          <a href="javascript:;">查看发货/退货信息</a>
          <a href="javascript:;">
            <i class="wuliuFonts2-back" style="margin-right: 4px; font-size: 12px;"></i>
            回到旧版</a>
        </div>
      </div>
      <div class="wuliu-info">
        <div class="left">
          <div class="baoguo-msg">
            <h3>包裹明细</h3>
            <p><span>物流单号：</span><span>{{ order_derail_plus_address.content.logisticsNum
            }}</span></p>
            <p><span>物流公司：</span><span>{{ order_derail_plus_address.content.logisticsName
            }}</span></p>
            <p><span>发货时间：</span><span>{{ order_detail__plus.payTime }}</span></p>
            <p><span>履约单号：</span><span>LP00592625500430</span></p>
            <p><span>发货方式：</span><span>自己联系</span></p>
          </div>
          <div class="baoguo-shop">
            <h3>包裹中的商品：</h3>
            <div class="shop">
              <div class="item" v-for="(itemData, index) in order_detail_subOrders">
                <div>
                  <a :href="itemData.itemInfo.itemUrl" target="_blank" class="bdrad12"><img :src="itemData.itemInfo.pic"
                      alt="product-img" width="48" height="48"
                      style="border-radius: 8px; overflow: hidden; flex-shrink: 0;"></a>
                </div>
                <div>
                  <p>
                    <a :href="itemData.itemInfo.itemUrl" target="_blank">{{ itemData.itemInfo.title }}</a>
                  </p>
                  <span
                    style="background: rgb(239, 244, 255); border-radius: 3px; font-size: 12px; color: rgb(17, 17, 17); padding: 0 7px">
                    {{ itemData.itemInfo.subId || '737489372355' }}
                  </span>
                </div>
                <div>x {{ itemData.quantity }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h3>物流动态</h3>
          <div class="activities-wrapper">
            <el-timeline>
              <el-timeline-item v-for="(activity, index) in activities" :key="index" hide-timestamp
                :class="index == 0 ? 'current' : ''">
                <template #default>
                  <p class="desc">
                    {{ activity.desc }}
                  </p>
                  <p class="time">
                    <span>操作时间：{{ activity.time }}</span>
                    <span>回传时间：{{ activity.syncTime }}</span>
                  </p>
                </template>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="content">
import { useRoute } from 'vue-router';
const route = useRoute();
import mock_trade, { getTrade_orderList, getOrder_detail_plus } from '@/mock/current/trade';
// data
const { page, index, orderDetailIndex, createTimeStr, tradeId } = route.query;

const order_detail_subOrders = getTrade_orderList(page)[index].subOrders;
const order_detail__plus = getOrder_detail_plus(createTimeStr);
const order_derail_plus_address = order_detail__plus.orderDetailList[orderDetailIndex];

const activities = order_derail_plus_address.post;

</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
}

.beard {
  height: 50px;
  border: 1px solid #f0f0f0;
  line-height: 50px;
  padding: 0 20px;
}

.item {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: auto;
  margin-bottom: 10px;
}

.item>.order-info {
  height: 80px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  color: #111;
  font-size: 14px;
  padding-top: 10px;
}

.item>.order-info>div.left p {
  display: inline-block;
  margin-right: 50px;
}

.item>.order-info>div.left p {
  margin-bottom: 8px;
}

.item>.order-info>div.left i {
  margin: 0 8px;
}

.item>.order-info>div.right a {
  color: #5684ff;
}

.item>.order-info>div.right a:last-child {
  color: rgb(153, 153, 153);
  margin-left: 12px;
}

.item>.wuliu-info {
  padding-top: 20px;
  flex: 1;
  display: flex;
  color: #111;
  font-size: 14px;
  height: 100%;
}

.item>.wuliu-info>div {
  flex: 1;
  height: 100%;
}

.item>.wuliu-info>div.left {
  border-right: 1px solid #f0f0f0;
}

.item>.wuliu-info>div.left h3 {
  font-weight: bolder;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}

.item>.wuliu-info>div.left p {
  line-height: 21px;
  margin-bottom: 12px;
  padding-left: 40px;
}

.item>.wuliu-info>div.left>.baoguo-shop {
  display: flex;
  padding-top: 15px;
}

.item>.wuliu-info>div.left>.baoguo-shop h3 {
  font-weight: normal;
  padding-left: 15px;
  width: 118px;
  line-height: 15px;
}

.item>.wuliu-info>div.left>.baoguo-shop>.shop {
  flex: 1;
}

.item>.wuliu-info .item {
  display: flex;
  padding: 0;
  flex-direction: row;
  padding-right: 30px;
}

.item>.wuliu-info .item>div>p {
  padding-left: 5px;
  margin-bottom: 0px;
}

.item>.wuliu-info .item>div:nth-child(2) {
  flex: 3;
  height: 100%;
  padding-left: 15px;
}

.item>.wuliu-info .item>div a {
  color: #5584ff;
}

.item>.wuliu-info .item>div:first-child {
  width: 48px;
  height: 100%;

}

.item>.wuliu-info .item>div:last-child {
  height: 100%;
  flex: 1;
}

.item>.wuliu-info>.right {
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
}

.item>.wuliu-info>.right h3 {
  line-height: 50px;
  font-weight: bolder;
  font-size: 14px;
}

.item>.wuliu-info>.right .activities-wrapper {
  padding-right: 70px;
  height: 55%;
  overflow-y: scroll;
}

.item>.wuliu-info>.right .activities-wrapper .dec {}

.item>.wuliu-info>.right .activities-wrapper .time span {
  font-size: 12px;
  margin-right: 20px;
}
</style>
<style>
.content-wrapper .el-breadcrumb {
  line-height: 50px !important;
}

.content-wrapper .el-breadcrumb__item>.el-breadcrumb__inner {
  font-weight: normal;
  font-size: 14px;
  color: rgb(102, 102, 102);
  cursor: pointer;
}

.content-wrapper .el-breadcrumb__item:last-child>.el-breadcrumb__inner {
  color: rgb(51, 51, 51);
  cursor: pointer;
}

.content-wrapper .el-breadcrumb__item>.el-breadcrumb__inner:hover {
  color: #3d7fff;
}

.content-wrapper .el-breadcrumb__item:last-child>.el-breadcrumb__inner:hover {
  color: #3d7fff;
}

.content-wrapper .el-timeline-item__tail {
  height: 50%;
  top: 22px;
  border-left: 1px solid rgb(153, 153, 153);
}

.content-wrapper .el-timeline-item__node {
  background-color: rgb(153, 153, 153);
  width: 9px;
  height: 9px;
  left: 1px;
}

.content-wrapper li.el-timeline-item .el-timeline-item__content {
  color: #999;
}

.content-wrapper li.el-timeline-item.current .el-timeline-item__content {
  color: #333;
}

.content-wrapper li.el-timeline-item.current .el-timeline-item__timestamp {
  color: #333;
}

.content-wrapper li.el-timeline-item.current .el-timeline-item__node {
  background-color: rgb(17, 17, 17);
}
</style>
