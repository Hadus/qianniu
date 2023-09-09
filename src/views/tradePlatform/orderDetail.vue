<template>
  <div class="wrapper-order-detail">
    <div class="title">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item>我是卖家</el-breadcrumb-item>
        <el-breadcrumb-item>交易管理</el-breadcrumb-item>
        <el-breadcrumb-item>已卖出的宝贝</el-breadcrumb-item>
        <el-breadcrumb-item>查看详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="tips">
        <span>该页面涉及用户隐私信息，请注意数据安全，如需显示全部用户信息请点击右侧按钮</span>
        <el-switch v-model="flag_switch" inline-prompt
          style="margin-left: 8px; --el-switch-on-color: #3d7fff; --el-switch-off-color: #ebecf0" active-text="显示"
          inactive-text="隐藏" size="large" />
      </div>
    </div>
    <div class="status">
      <div class="head">
        <span>订单状态:</span><span> 交易成功</span>
        <div class="step">
          <ul>
            <li class="finished">
              <span>
                <img src="https://img.alicdn.com/imgextra/i3/O1CN01FrmgJK1Pkd1UVIKQ1_!!6000000001879-2-tps-48-48.png">
              </span>
              <span>买家下单</span><span class="last"></span>
            </li>
            <li class="finished"><span>
                <img src="https://img.alicdn.com/imgextra/i3/O1CN01FrmgJK1Pkd1UVIKQ1_!!6000000001879-2-tps-48-48.png">

              </span><span>买家付款</span><span class="last"></span></li>
            <li class="finished"><span>
                <img src="https://img.alicdn.com/imgextra/i3/O1CN01FrmgJK1Pkd1UVIKQ1_!!6000000001879-2-tps-48-48.png">

              </span><span>发货</span><span class="last"></span></li>
            <li><span>
                <img src="https://img.alicdn.com/imgextra/i3/O1CN01FrmgJK1Pkd1UVIKQ1_!!6000000001879-2-tps-48-48.png">
              </span><span>买家收到商品</span><span class="last"></span></li>
            <li><span class="not-img">5</span><span>评价</span></li>
          </ul>
        </div>
      </div>
      <div class="mark">
        <v-btn-fill type="blank" size="normal">标记</v-btn-fill>
        <v-btn-fill type="blank" size="normal">订单优惠详情</v-btn-fill>
        <v-btn-fill type="blank" size="normal">补发货</v-btn-fill>
      </div>
      <div class="note" v-if="false">
        <p>
          <span>经审核您的商品［紫水晶手链紫罗兰深紫单圈手串乌拉圭饰品女款乌拉圭紫紫色］存在交易风险。交易款项将在买家确认收货后的45天内进行交易账期延长，以用于买家可能提起的交易维权保障。交易账期将在2023年10月06日
            22:46:36自动解除，在此期间若消费者发起售后维权，交易账期会持续延长至维权结束，并依维权结果确定归属。</span>
          <a href="//rule.taobao.com/detail-1503.htm?spm=a21dvs.23742412.0.0.309a3606ksXY8U&amp;tag=self&amp;cId=87"
            target="_blank" style="font-size: 12px;">交易账期延长解析
          </a>
          <a href="//lab.alipay.com/user/balance/frozen.htm" target="_blank" style="font-size: 12px;">查看资金明细
          </a>
        </p>
      </div>
    </div>
    <div class="info">
      <h3>订单信息</h3>
      <div class="info-detail">
        <div class="col">
          <h4 class="head">交易信息</h4>
          <p><span class="key">订单编号:</span><span class="value">{{ order_detail.id }}</span><a>复制</a></p>
          <p><span class="key">支付宝交易号:</span><span class="value">{{ order_detail__plus.tbTradeId }}</span><a>复制</a></p>
          <p><span class="key">创建时间:</span><span class="value">{{ order_detail__plus.createTime }}</span></p>
          <p><span class="key">付款时间:</span><span class="value">{{ order_detail__plus.payTime }}</span></p>
        </div>
        <div class="col">
          <h4 class="head head-icon">买家信息
            <a @click="handelClicklookInfo">
              <i class="homeFonts2-hide" v-if="!flag_look"></i>
              <i class="homeFonts2-look" v-else></i>
            </a>
          </h4>
          <p>
            <span class="key">昵称:</span>
            <span class="value nickname-wrapper">
              <a href="javascript: void(0);" target="_blank" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"></a>
              {{ order_detail.buyer.nick }}
            </span>
          </p>
          <p><span class="key">联系电话:</span><span class="value">{{ order_detail.buyer.phoneNum }}</span></p>
          <p><span class="key">邮件:</span><span class="value">***</span></p>
          <p>
            <span class="key">支付宝:</span><span class="value">1***</span><a>付款给买家</a>
          <p class="tips"><span>该功能为支付宝<a herf="javascript:;">即时到帐</a>，用于退运费等小额退款，请谨慎操作</span></p>
          </p>
        </div>
        <div class="col">
          <h4 class="head head-icon">物流信息
            <a @click="handelClicklookInfo">
              <i class="homeFonts2-hide" v-if="!flag_look"></i>
              <i class="homeFonts2-look" v-else></i>
            </a>
          </h4>
          <p><span class="key">收货地址：:</span>
            <span class="value">
              {{ flag_look ?
                order_detail__plus.orderDetailList[orderDetailIndex].content.address :
                order_detail__plus.orderDetailList[orderDetailIndex].content.address_ }}
            </span>
            <a>复制</a>
          </p>
          <p><span class="key">运送方式:</span><span class="value">快递</span></p>
          <p><span class="key">物流公司名称:</span><span class="value">{{
            order_detail__plus.orderDetailList[orderDetailIndex].content.logisticsName
          }}</span></p>
          <p>
            <span class="key">运单号:</span><span class="value">{{
              order_detail__plus.orderDetailList[orderDetailIndex].content.logisticsNum
            }}</span>
            <a @click="handleLookWuliu">查看物流信息</a>
          </p>
        </div>
      </div>
    </div>
    <div class="table">
      <el-table :data="order_detail.subOrders" style="width: 100%" header-row-class-name="order-item-th"
        class="order-table order-tbody-table"
        :span-method="(val) => order_detail_span_method(val, order_detail.subOrders.length)">
        <el-table-column class="td-format" label="宝贝" align="center">
          <template #default="{ row }">
            <v-order-item :itemData="row" />
          </template>
        </el-table-column>
        <el-table-column class="td-format" label="宝贝属性" width="150" align="center">
          <template #default="{ row }">
            <p class="main">{{ row.itemInfo.skuText[0].name }}{{ row.itemInfo.skuText[0].value }}</p>
          </template>
        </el-table-column>/>
        <el-table-column class="td-format" label="状态" width="150" align="center">
          <template #default>
            <p class="main"><a href="javascript:;">退款成功</a></p>
          </template>
        </el-table-column>
        <el-table-column class="td-format" label="服务" width="150" align="center">
          <template #default>
            <p class="main">{{ }}</p>
            <p class="desc">
            </p>
          </template>
        </el-table-column>
        <el-table-column class="td-format" label="单价" width="150" align="center">
          <template #default="{ row }">
            {{ row.priceInfo.realTotal }}
          </template>
        </el-table-column>
        <el-table-column class="td-format" label="数量" width="150" align="center">
          <template #default="{ row }">
            <p class="main">
              {{ row.quantity }}
            </p>
          </template>
        </el-table-column>/>
        <el-table-column class="td-format" label="优惠" width="150" align="center">
          <template #default>
            <p class="main">
              <a href="javascript:;">{{ }}</a>
            </p>
          </template>
        </el-table-column>/>
        <el-table-column class="td-format" label="商品总价" width="150" align="center">
          <template #default>
            <p class="main">
            <p class="main">¥{{ order_detail.payInfo.actualFee }}</p>
            <p class="desc">{{ order_detail.payInfo.postType }}</p>
            </p>
          </template>
        </el-table-column>/>
      </el-table>
      <div class="money"><span>实收款：</span><span>{{ order_detail.payInfo.actualFee }}</span></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="orderDetail">
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

import vBtnFill from '@/components/BtnFill/index.vue'
import vOrderItem from './orderItem.vue';
import mock_trade, { getTrade_orderList, getOrder_detail_plus } from '@/mock/current/trade';
// data
const { page, index, orderDetailIndex, createTimeStr } = route.query;
const order_detail = getTrade_orderList(page)[index];

const order_detail__plus = getOrder_detail_plus(createTimeStr);
const order_detail_span_method = function ({ rowIndex, columnIndex }, length) {
  if (columnIndex >= 6) {
    if (rowIndex == 1) {
      return {
        rowspan: length,
        colspan: 1
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
  }
}

let flag_switch = ref(false);
let flag_look = ref(false);
const handelClicklookInfo = function () {
  flag_look.value = !flag_look.value;
};

const handleLookWuliu = function () {
  window.open(`#/wuliu?page=${page}&index=${index}&orderDetailIndex=${orderDetailIndex}&createTimeStr=${createTimeStr}&tradeId=${order_detail.id}`, '_blank');

};

</script>

<style scoped>
.wrapper-order-detail {
  width: 100%;
}

.wrapper-order-detail>.title {
  font-family: PingFang SC, Microsoft YaHei, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial !important;
  line-height: 49px;
  font-size: 14px;
  color: #666;
}

.wrapper-order-detail>.title>.tips {
  color: rgb(17, 17, 17);
  font-size: 14px;
  margin: 10px 0;
}

.wrapper-order-detail>.status {
  color: #111;
  font-weight: 700;
  font-size: 22px;
  padding: 20px;
  background: #f7f8fa;
  border: 1px solid #f7f8fa;
  border-radius: 10px;
  margin-bottom: 20px;
}

.wrapper-order-detail>.status .head {
  position: relative;
}

.wrapper-order-detail>.status .head>.step {
  position: absolute;
  top: 0;
  margin-left: 350px;
}

.wrapper-order-detail>.status .head>.step ul {
  display: flex;
}

.wrapper-order-detail>.status .head>.step ul li {
  font-size: 14px;
  color: #111;
  opacity: .8;
}

.wrapper-order-detail>.status .head>.step ul li span {
  display: inline-block;
}

.wrapper-order-detail>.status .head>.step ul li.finished {
  color: #999;
}

.wrapper-order-detail>.status .head>.step ul li span:first-child {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

.wrapper-order-detail>.status .head>.step ul li span:first-child.not-img {
  border-radius: 50%;
  background-color: #3d7fff;
  text-align: center;
  line-height: 16px;
  color: #fff;
  font-size: 10px;
}

.wrapper-order-detail>.status .head>.step ul li span img {
  width: 16px;
  height: 16px;
  vertical-align: sub;
}

.wrapper-order-detail>.status .head>.step ul li span.last {
  width: 36px;
  height: 2px;
  border: 1px solid #999;
  transform: translateY(-4px);
  margin-left: 3px;
  margin-right: 4px;
  opacity: .3;
}

.wrapper-order-detail>.status>div {
  margin-bottom: 15px;
}

.wrapper-order-detail>.status>div:last-of-type {
  margin-bottom: 0;
}

.wrapper-order-detail>.status .mark p {
  margin-right: 20px;
}

.wrapper-order-detail>.status .note {
  padding-top: 20px;
  color: #111;
  font-size: 14px;
  border-top: 1px solid #e6e8ed;
  font-weight: normal;
}

.wrapper-order-detail>.status .note>p {
  margin-bottom: 5px;
  line-height: 25px;
}

.wrapper-order-detail>.stauts .note>p>a {
  color: #5584ff;
}

.wrapper-order-detail>.info {}

.wrapper-order-detail>.info h3 {
  color: rgb(17, 17, 17);
  font-size: 18px;
  position: relative;
  font-weight: 500;
  width: 92px;
  line-height: 48px;
}

.wrapper-order-detail>.info h3::after {
  content: ' ';
  width: 40%;
  font-size: 14px;
  position: absolute;
  bottom: 0px;
  left: 20%;
  border-bottom: 2px solid #3d7fff;
}

.wrapper-order-detail>.info>.info-detail {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 20px 0;
  background: #f7f8fa;
  border: 1px solid #f7f8fa;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 5px;
}

.wrapper-order-detail>.info>.info-detail .col {
  flex: 1;
  font-size: 12px;
  line-height: 28px;
  margin-bottom: 15px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
}

.wrapper-order-detail>.info>.info-detail .col .head-icon>.icon-head {
  cursor: pointer;
}

.wrapper-order-detail>.info>.info-detail .col>h4 {
  font-weight: 700;
  font-size: 14px;
  color: #111;
  letter-spacing: 0;
  line-height: 15px;
  margin-bottom: 15px;
  font-weight: normal;
}

.wrapper-order-detail>.info>.info-detail .col>a>i {
  font-weight: normal;
  cursor: pointer;
  margin-left: 8px;
}

.wrapper-order-detail>.info>.info-detail .col>p span:first-child {
  margin-right: 5px;
}

.wrapper-order-detail>.info>.info-detail .col>p span.key {
  color: #848689;
}

.wrapper-order-detail>.info>.info-detail .col>p span.value {
  color: #111;
}

.wrapper-order-detail>.info>.info-detail .col>p a {
  color: rgb(61, 127, 255);
  margin-left: 5px;
}

.wrapper-order-detail>.info>.info-detail .col>p span.value .nickname-wrapper {
  display: inline;
  color: rgb(61, 127, 255);
  margin-right: 2px;
}

.wrapper-order-detail>.info>.info-detail .col .nickname-wrapper>a {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif");
  background-position: 50px 0px;
  vertical-align: sub;
}

.wrapper-order-detail>.info>.info-detail .col p.tips {
  background: url(https://img.alicdn.com/imgextra/i3/O1CN014k7WnK1s2lpgqT1eJ_!!6000000005709-2-tps-30-30.png?getAvatar=avatar) no-repeat;
  background-position: 7px 13px;
  background-size: 20px;
  background-color: rgba(0, 87, 255, .06);
  border-radius: 9px;
  margin-bottom: 10px;
  width: 390px;
  line-height: 44px;
  padding: 2px 10px 2px 32px;
}

.wrapper-order-detail p.main,
.wrapper-order-detail p.desc {
  font-size: 12px;
  text-align: center;
}

.wrapper-order-detail p.desc {
  color: #999;
  background-color: #fff;
}

.wrapper-order-detail p>a {
  color: #5584ff;
}

.wrapper-order-detail .table>.money {
  line-height: 60px;
  text-align: right;
  font-weight: 500;
}

.wrapper-order-detail .table>.money>span:first-child {
  color: #111;
  font-size: 14px;
}

.wrapper-order-detail .table>.money>span:last-child {
  color: #ff5000;
  font-size: 18px;
  margin-left: 100px;
  margin-right: 15px;
}
</style>
<style>
.el-breadcrumb__item>.el-breadcrumb__inner {
  font-weight: normal;
  font-size: 14px;
  color: rgb(102, 102, 102);
  cursor: pointer;
}

.el-breadcrumb__item:last-child>.el-breadcrumb__inner {
  color: rgb(51, 51, 51);
  cursor: pointer;
}

.el-breadcrumb__item>.el-breadcrumb__inner:hover {
  color: #3d7fff;
}

.el-breadcrumb__item:last-child>.el-breadcrumb__inner:hover {
  color: #3d7fff;
}

/* table */
.wrapper-order-detail .el-table.order-table tr th {
  color: #111;
  font-weight: normal;
}

.wrapper-order-detail .el-table.order-table .el-table__body tr td {
  border: none;
}

.wrapper-order-detail .el-table.order-table tr th {
  background-color: #fff !important;
  font-size: 14px;
  color: #111;
  font-weight: normal;
  height: 45px;
}

.wrapper-order-detail .el-table.order-table tr.order-item-th th {
  background-color: #f0f2fa !important;
  padding: 0;
  font-size: 12px;
}

.wrapper-order-detail .el-table.order-table tr.order-item-th th:first-of-type {
  border-radius: 10px 0 0 10px;
}

.wrapper-order-detail .el-table.order-table tr.order-item-th th:last-of-type {
  border-radius: 0 10px 10px 0;
}

.wrapper-order-detail .el-table.order-table tr:hover,
.wrapper-order-detail .el-table.order-table tr:hover>td {
  background: #fff !important;
}

.wrapper-order-detail .el-switch {}

.wrapper-order-detail .el-switch .el-switch__core {
  width: 68px;
  height: 28px;
}

.wrapper-order-detail .el-switch .el-switch__inner {
  padding-top: 3px;
}

.wrapper-order-detail .el-switch .el-switch__inner>span:first-child {
  padding-top: 3px;
  color: #fff;
}

.wrapper-order-detail .el-switch .el-switch__inner>span:last-child {
  padding-top: 3px;
  color: rgb(153, 153, 153);
}

.wrapper-order-detail .el-switch .el-switch__action {
  width: 24px;
  height: 24px;
  margin-left: 0;
}
</style>