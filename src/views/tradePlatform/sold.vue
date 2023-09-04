<template>
	<div class="container">
		<div class="note block-wrapper">
			<div class="wrapper-left">
				<img src="https://img.alicdn.com/imgextra/i2/1115350887/O1CN01B2LRQR1IQIBDVMEob_!!1115350887-0-shopmanager.jpg">
			</div>
			<div class="wrapper-right">
				<p>为更好的保护消费者隐私，买家淘宝会员名字段作为敏感字段，平台不再明文展示，卖家中心将对商家订单中的买家会员名字段脱敏展示，已卖出的宝贝页面将不再提供明文解密开关（逐步灰度中）
				</p>
				<p>【短信服务】号码保护订单也可以给消费者发订单履约短信哦，快给贵店铺的亲们更好的关怀吧！<a target="_blank"
						href="https://myseller.taobao.com/home.htm/bc-templates?appId=249">立即去设置&gt;&gt;</a>
				</p>
			</div>
		</div>
		<div class="note block-wrapper">
			<div class="wrapper-left">
				<img src="https://img.alicdn.com/imgextra/i1/O1CN01Tqodfp1W9iJUFhdCa_!!6000000002746-2-tps-254-200.png">
			</div>
			<div class="wrapper-right">
				<p>【不设置会很亏】顺手买一件【全面】开放跨店活动，一键设置后【免费】获取更多新客流量，带成交！
					<a target="_blank" href="https://shell.mkt.taobao.com/taobaoTied/index">立即去设置&gt;&gt;</a>
				</p>
			</div>
		</div>
		<div class="unusual-order block-wrapper">
			<div class="item">
				<p class="key">待发货单量
					<img src="https://gw.alicdn.com/imgextra/i4/O1CN01t0RZ7O1vAVR93depk_!!6000000006132-2-tps-36-36.png">
				</p>
				<p class="value">1</p>
			</div>
			<i>|</i>
			<div class="item">
				<p class="key">发货即将超时单量
					<img src="https://gw.alicdn.com/imgextra/i4/O1CN01t0RZ7O1vAVR93depk_!!6000000006132-2-tps-36-36.png">
				</p>
				<p class="value">0</p>
			</div>
		</div>
		<div class="info-wrapper">
			<el-tabs v-model="activeNameAll" class="tabs-order tabs-order-all">
				<el-tab-pane label="近三个月订单" name="firstAll">
					<v-filter-block />
				</el-tab-pane>
				<el-tab-pane label="三个月前订单" name="secondALL">
					暂无
				</el-tab-pane>
			</el-tabs>
			<div class="operate">
				<v-btn-fill size="normal">搜索订单</v-btn-fill>
				<v-btn-fill size="normal" type="blank">批量导出</v-btn-fill>
				<p class="link">
					<img src="https://img.alicdn.com/imgextra/i4/O1CN01pR8pqG20cyBSyIvBU_!!6000000006871-2-tps-48-45.png">
					<span>清除条件</span>
				</p>
				<p class="link">
					<el-icon>
						<ArrowUpBold />
					</el-icon>
					<span>收起筛选项</span>
				</p>
			</div>
			<el-tabs v-model="activeNameDetails" class="tabs-order tabs-order-details">
				<div class="filter-condition">
					<p class="condition-item">
						快捷筛选：
						<v-filter-input type="select" label="卖家备注" class="condition-select" />
					</p>
					<el-checkbox label="不显示已关闭的订单" size="large" class="condition-item" />
				</div>
				<div class="filter-result">
					<p>共查询到<i> 91 </i>个订单</p>
					<v-btn-fill class="btn-result" size="normal" type="blank">批量发货</v-btn-fill>
					<v-btn-fill class="btn-result" size="normal" type="blank">批量标记</v-btn-fill>
					<v-btn-fill class="btn-result" size="normal" type="blank">批量免运费</v-btn-fill>
				</div>
				<el-tab-pane label="近三个月订单" name="firstDetails" class="first-details">
					<!-- 表头 -->
					<el-table style="width: 100%" header-row-class-name="order-th" class="order-table order-thead-table">
						<el-table-column label="宝贝">
							<template #header>
								<el-checkbox></el-checkbox>&nbsp;&nbsp;宝贝
							</template>
						</el-table-column>
						<el-table-column align="center" label="数量" width="165" />
						<el-table-column align="center" label="售后" width="165" />
						<el-table-column align="center" label="交易状态" width="165" />
						<el-table-column align="center" label="实收款" width="165" />
						<el-table-column align="center" label="评价" width="165" />
					</el-table>
					<!-- 内容 -->
					<el-table style="width: 100%" header-row-class-name="order-item-th" class="order-table order-tbody-table"
						:data="tableData">
						<el-table-column>
							<template #header>
								<div class="item-title">
									<el-checkbox></el-checkbox>
									<p><span class="key">&nbsp;&nbsp;订单号：</span><span class="value">3503107335644061564</span></p>
									<p class="create-time"><span class="key">创建时间：</span><span class="value">2023-09-02 13:32:50</span></p>
									<p class="nickname">
										<a href="javascript: void(0);" target="_blank" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"></a>
										爱**
									</p>
									<el-icon>
										<ArrowDownBold />
									</el-icon>
								</div>
							</template>
							<template #default>
								<v-order-item />
							</template>
						</el-table-column>
						<el-table-column label="" width="165" align="center">
							<template #default>
								<p class="main">1</p>
							</template>
						</el-table-column>/>
						<el-table-column label="" width="165" align="center">
							<template #default>
								<p class="main"><a href="javascript:;">退款成功</a></p>
							</template>
						</el-table-column>
						<el-table-column label="" width="165" align="center">
							<template #default>
								<p class="main">交易关闭</p>
								<p class="desc">
									<a href="javascript:;" @click="handleClickOrder">详情</a>
								</p>
							</template>
						</el-table-column>
						<el-table-column label="" width="165" align="center">
							<template #default>
								<p class="main">¥50.00</p>
								<p class="desc">（含快递：¥0.00）</p>
							</template>
						</el-table-column>
						<el-table-column width="165" align="center">
							<template #header>
								<el-icon>
									<ArrowDownBold />
								</el-icon>
							</template>
							<template #default>
								<p class="main">
									<a href="javascript:;">我已评价</a>
								</p>
							</template>
						</el-table-column>/>
					</el-table>
					<!-- 表格end -->
					<el-pagination layout="prev, pager, next, jumper" :total="50" class="order-pagination" prev-text="上一页"
						next-text="下一页" />
				</el-tab-pane>
				<el-tab-pane label="等待买家付款" name="secondDetails">
					暂无
				</el-tab-pane>
				<el-tab-pane label="等待发货" name="thirdDetails">
					暂无
				</el-tab-pane>
				<el-tab-pane label="已发货" name="forthDetails">
					暂无
				</el-tab-pane>
				<el-tab-pane label="退款中" name="fivethDetails">
					暂无
				</el-tab-pane>
				<el-tab-pane label="需要评价" name="sixthDetails">
					暂无
				</el-tab-pane>
				<el-tab-pane label="成功的订单" name="seventhDetails">
					暂无
				</el-tab-pane>
				<el-tab-pane label="关闭的订单" name="eightDetails">
					暂无
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup lang="ts" name="sold">
import { useRouter } from 'vue-router';
const $router = useRouter();
import vFilterBlock from './filterBlock.vue';
import vBtnFill from '@/components/BtnFill/index.vue';
import vFilterInput from './filterInput.vue';
import vOrderItem from './orderItem.vue';

const activeNameAll = 'firstAll';
const activeNameDetails = 'firstDetails'
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
];

const handleClickOrder = function () {
	$router.push('/trade-platform/tp/orderDetail');
};
</script>

<style scoped>
.container>div {
	padding-left: 20px;
	margin-bottom: 20px;
}

.note {
	background-color: rgb(241 245 255);
	display: flex;
	padding: 12px;
}

.note .wrapper-left {
	width: 24px;
	height: 24px;
	margin-right: 8px;
}

.note .wrapper-left img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
}

.note .wrapper-right {
	height: auto;
}

.note .wrapper-right p {
	font-size: 12px;
	letter-spacing: 0;
	line-height: 18px;
	color: #666;
	font-family: PingFangSC-Regular;
}

.note .wrapper-right p>a {
	color: #4178ff;
}

.unusual-order {
	background-color: rgb(241 245 255);
	height: 40px;
}

.unusual-order {
	background-color: #f7f8fa;
	height: 64px;
	display: flex;
}

.unusual-order>div {
	min-width: 144px;
	height: 100%;
	line-height: 24px;
	color: #111;
}

.unusual-order i {
	color: #d5d9de;
	width: 2px;
	height: 16px;
	line-height: 36px;
	margin-right: 20px;
}

.unusual-order>div p {
	display: inline-block;
	font-size: 14px;
}

.unusual-order>div p>img {
	width: 12px;
	height: 12px;
	margin-left: 2px;
}

.unusual-order>div p.value {
	font-size: 24px;
	margin-left: 20px;
}

.info-wrapper {
	position: relative;
}

.info-wrapper .operate {
	width: 100%;
	height: 36px;
	display: flex;
	margin-bottom: 30px;
}

.info-wrapper .operate>p {
	margin-right: 12px;
}

.info-wrapper .operate>p.link {
	font-size: 14px;
	color: #3d7fff;
	line-height: 36px;
	padding: 0 15px;
}

.info-wrapper .operate>p.link>img {
	width: 14px;
	height: 14px;
}

.info-wrapper .operate>p.link>span {
	margin-left: 3px;
}


.info-wrapper .tabs-order-details .filter-condition {
	display: flex;
	line-height: 36px;
}

.info-wrapper .tabs-order-details .condition-item {
	display: flex;
}

.info-wrapper .tabs-order-details .condition-select {
	width: 180px;
}

.info-wrapper .tabs-order-details .filter-result {
	height: 80px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #e4e7ed;
}

.info-wrapper .tabs-order-details .filter-result>p>i {
	color: rgb(61, 127, 255);
	font-size: 14px;
}

.info-wrapper .tabs-order-details .filter-result .btn-result {
	margin-left: 15px;
}

.tabs-order-details .item-title {
	display: flex;
	align-items: center;
	line-height: 44px;
	font-size: 12px;
	border-radius: 12px 0 0 12px;
}

.tabs-order-details .item-title .create-time {
	margin: 0 50px;
}

.tabs-order-details .item-title .nickname {
	color: rgb(61, 127, 255);
	margin-right: 2px;
}

.tabs-order-details .item-title .nickname>a {
	display: inline-block;
	width: 20px;
	height: 20px;
	background-image: url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif");
	background-position: 50px 0px;
	vertical-align: sub;
}

.tabs-order-details p.main,
.tabs-order-details p.desc {
	font-size: 12px;
	text-align: center;
}

.tabs-order-details p.desc {
	color: #999;
	background-color: #fff;
}

.tabs-order-details p>a {
	color: #5584ff;
}

.order-pagination {
	width: 40%;
	margin: 30px auto;
}
</style>
<style>
.info-wrapper .tabs-order .el-tabs__nav-scroll {
	padding-left: 15px;
}


.info-wrapper .tabs-order .el-tabs__item {
	padding: 0 25px;
	font-size: 14px;
	font-family: PingFangSC-Regular;
}

.info-wrapper .tabs-order .el-tabs__item.is-active {
	color: #4178ff;
}

.add-wrapper {
	align-items: center;
	background: #fff;
	bottom: 0;
	box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, .06);
	display: flex;
	height: 66px;
	justify-content: center;
	right: 0;
	position: fixed;
	width: 90%
}

.add-wrapper button {
	background: #3d7fff;
	background-color: #3d7fff;
	border-radius: 24px;
	height: 42px;
	width: 200px;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
	border: 0 none;
	outline: 0 none;
}

.tabs-order-details .el-table.order-table tr th {
	color: #111;
	font-weight: normal;
}

.tabs-order-details .el-table.order-table .el-table__body tr td {
	border: none;
}

.tabs-order-details .el-table.order-table tr th {
	background-color: #fff !important;
	font-size: 14px;
	color: #111;
	font-weight: normal;
}

.tabs-order-details .el-table.order-table tr.order-item-th th {
	background-color: #f0f2fa !important;
	padding: 0;
	font-size: 12px;
}

.tabs-order-details .el-table.order-table tr.order-item-th th:first-of-type {
	border-radius: 10px 0 0 10px;
}

.tabs-order-details .el-table.order-table tr.order-item-th th:last-of-type {
	border-radius: 0 10px 10px 0;
}

.tabs-order-details .el-table.order-table tr:hover,
.tabs-order-details .el-table.order-table tr:hover>td {
	background: #fff !important;
}

.tabs-order-details .el-table.order-table.order-thead-table .el-table__body-wrapper {
	display: none !important;
}
</style>


