<template>
	<div class="live-list-container">
		<div class="live-time">
			<p>
				<span>开播时间</span>
				<el-date-picker type="daterange" start-placeholder="Start Date" end-placeholder="End Date"
					:default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
			</p>
			<p>
				支持查看9月3日零点之后开播场次的实时下播数据
			</p>
		</div>
		<el-tabs v-model="activeName" type="card" class="live-content-tabs">
			<el-tab-pane label="实时下播数据" name="first">
				<template #label>
					<span>实时下播数据 </span>
					<el-icon>
						<calendar />
					</el-icon>
				</template>

				<div class="info-wrapper changci-wrapper">
					<v-h3-header :hasArrow="false">
						直播分场次效果
						<template #right>
							<p><span>全选</span><span>｜</span><span>全不选</span></p>
						</template>
					</v-h3-header>
					<div class="check-wrapper">
						<div class="item">
							<h4>流量</h4>
							<p>
								<label><input type="checkbox" checked>观看次数</label>
								<label><input type="checkbox" checked>观看人数</label>
								<label><input type="checkbox" checked>封面图点击率</label>
								<label><input type="checkbox" checked>流量券消耗</label>
							</p>
						</div>
						<div class="item">
							<h4>观看</h4>
							<p>
								<label><input type="checkbox" checked>平均观看时长（秒）</label>
							</p>
						</div>
						<div class="item">
							<h4>转粉</h4>
							<p>
								<label><input type="checkbox" checked>新增粉丝数</label>
							</p>
						</div>
						<div class="item">
							<h4>引导</h4>
							<p>
								<label><input type="checkbox" checked>商品点击人数</label>
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox" checked>商品点击率</label>
							</p>
						</div>
						<div class="item">
							<h4>成交</h4>
							<p>
								<label><input type="checkbox" checked>引导成交转化率</label>
								<label><input type="checkbox" checked>引导成交人数</label>
								<label><input type="checkbox">引导成交件数</label>
								<label><input type="checkbox">引导成交笔数</label>
								<label><input type="checkbox" checked>引导成交金额</label>
								<label><input type="checkbox">退款人数</label>
								<label><input type="checkbox">退款金额</label>
								<label><input type="checkbox">退款件数</label>
							</p>
						</div>
						<div class="item">
							<h4>预售</h4>
							<p>
								<label><input type="checkbox">预售下定金金额</label>
								<label><input type="checkbox">预售预估总金额</label>
							</p>
						</div>
					</div>
					<div class="live-table-wrapper">
						<div class="table-opeatre">
							<p class="go-right">右滑查看更多</p>
							<p class="btn">
								<el-icon>
									<ArrowUpBold />
								</el-icon>
								下载
							</p>
							<p class="btn">场次对比</p>
						</div>
						<el-table :data="table_1.model_1" style="width: 100%" class="live-table">
							<el-table-column width="140" fixed prop="date" label="直播标题">
								<template #default="{ row }">
									<a href="javascript:;" @click="handleClickLiveTitle(row.contentId)">{{ row.contentTitle }}</a>
								</template>
							</el-table-column>
							<el-table-column width="120" fixed prop="contentId" label="场次ID" />
							<el-table-column width="160" prop="liveStartTime" label="开播时间" />
							<el-table-column width="110" prop="lookPv">
								<template #header>
									观看次数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="lookUv">
								<template #header>
									观看人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="address">
								<template #header>
									封面点击率#
								</template>
								<template #default="{ row }">
									{{ (row.pctr * 100).toFixed(2) }}%
								</template>
							</el-table-column>
							<el-table-column width="110" prop="lookPvFlowcontrol">
								<template #header>
									流量券消耗#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="lookTimePu">
								<template #header>
									平均观看时长（秒）#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="atnUv">
								<template #header>
									新增粉丝数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="ipvUv">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="address">
								<template #header>
									商品点击率#
								</template>
								<template #default="{ row }">
									{{ (row.ipvUvRate * 100).toFixed(2) }}%
								</template>
							</el-table-column>
							<el-table-column width="110" prop="address">
								<template #header>
									引导成交转化率#
								</template>
								<template #default="{ row }">
									{{ (row.payByrRate * 100).toFixed(2) }}%
								</template>
							</el-table-column>
							<el-table-column width="110" prop="payBuyerCnt">
								<template #header>
									引导成交人数#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<v-paganation layout="prev, pager, next" :total="table_1.page.totalNumber"
								:page-size="table_4.page.pageSize" class="order-pagination" />
						</div>
					</div>
				</div>
				<div class="info-wrapper shop-wrapper">
					<v-h3-header :hasArrow="false">
						直播分商品效果
						<template #right>
							<p><span>全选</span><span>｜</span><span>全不选</span></p>
						</template>
					</v-h3-header>
					<div class="check-wrapper">
						<div class="item">
							<p>
								<label><input type="checkbox" checked>商品点击次数</label>
								<label><input type="checkbox" checked>商品点击人数</label>
								<label><input type="checkbox" checked>引导成交件数</label>
								<label><input type="checkbox" checked>引导成交金额</label>
								<label><input type="checkbox" checked>预售下定金金额</label>
								<label><input type="checkbox" checked>预售预估总金额</label>
								<label><input type="checkbox" checked>退款件数</label>
								<label><input type="checkbox" checked>退款人数</label>
								<label><input type="checkbox" checked>退款金额</label>
							</p>
						</div>
					</div>
					<div class="live-table-wrapper">
						<div class="table-opeatre">
							<div>
								<el-select placeholder="选择场次">
								</el-select>
								<el-input placeholder="请输入商品标题/ID" />
								<p class="btn">
									<el-icon>
										<ArrowUpBold />
									</el-icon>
									下载
								</p>
							</div>
							<p class="go-right">右滑查看更多</p>
						</div>
						<el-table :data="table_2.model_1" style="width: 100%" class="live-table">
							<el-table-column width="300" prop="date" label="商品主图/标题" fixed>
								<template #default="{ row }">
									<div class="table-content" @click="handleClickLiveTitle(row.contentId)">
										<p>
											<img :src="row.itemPictUrl">
										</p>
										<p>
											<a href="javascript:;">
												{{ row.itemTitle }}
											</a>
										</p>
									</div>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="itemId" label="商品ID" fixed />
							<el-table-column width="120" prop="contentTitle" label="直播标题" />
							<el-table-column width="120" prop="contentId" label="场次ID" />
							<el-table-column width="160" prop="liveStartTime" label="开播时间" />
							<el-table-column width="110" prop="ipv">
								<template #header>
									商品点击次数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="ipvUv">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="payItemQty">
								<template #header>
									引导成交件数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="payAmt">
								<template #header>
									引导成交金额#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="predictAmt">
								<template #header>
									预售下定金金额#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="subpayAmt">
								<template #header>
									预售预估总金额#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="refundItemQty">
								<template #header>
									退款件数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="refundUv">
								<template #header>
									退款人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="refundAmt">
								<template #header>
									退款金额#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<v-paganation layout="prev, pager, next" :total="table_2.page.totalNumber"
								:page-size="table_2.page.pageSize" class="order-pagination" />
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="含回放累计数据" name="second">
				<template #label>
					<span>含回放累计数据 </span>
					<el-icon>
						<calendar />
					</el-icon>
				</template>
				<div class="info-wrapper changci-wrapper">
					<v-h3-header :hasArrow="false">
						直播分场次效果
						<template #right>
							<p><span>全选</span><span>｜</span><span>全不选</span></p>
						</template>
					</v-h3-header>
					<div class="check-wrapper">
						<div class="item">
							<h4>流量</h4>
							<p>
								<label><input type="checkbox" checked>直播间观看次数</label>
								<label><input type="checkbox" checked>直播间观看人数</label>
								<label><input type="checkbox">互动率</label>
								<label><input type="checkbox" checked>新增粉丝数</label>
								<label><input type="checkbox" checked>转粉率</label>
							</p>
						</div>
						<div class="item">
							<h4>引导</h4>
							<p>
								<label><input type="checkbox" checked>商品点击人数</label>
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox" checked>商品点击率</label>
								<label><input type="checkbox" checked>商品加购人数</label>
								<label><input type="checkbox" checked>商品加购件数</label>
								<label><input type="checkbox" checked>商品确认收货件数</label>
							</p>
						</div>
						<div class="item">
							<h4>成交</h4>
							<p>
								<label><input type="checkbox" checked>成交转化率</label>
								<label><input type="checkbox" checked>成交人数</label>
								<label><input type="checkbox">成交件数</label>
								<label><input type="checkbox">成交笔数</label>
								<label><input type="checkbox" checked>成交金额</label>
								<label><input type="checkbox">退款人数</label>
								<label><input type="checkbox">退款金额</label>
								<label><input type="checkbox">退款件数</label>
							</p>
						</div>
						<div class="item">
							<h4>预售</h4>
							<p>
								<label><input type="checkbox">预售下定金金额</label>
								<label><input type="checkbox">预售预估总金额</label>
							</p>
						</div>
					</div>
					<div class="live-table-wrapper">
						<div class="table-opeatre">
							<p class="go-right">右滑查看更多</p>
							<p class="btn">
								<el-icon>
									<ArrowUpBold />
								</el-icon>
								下载
							</p>
							<p class="btn">场次对比</p>
						</div>
						<el-table :data="table_3.model_1" style="width: 100%" class="live-table">
							<el-table-column width="140" fixed prop="date" label="直播标题">
								<template #default="{ row }">
									<a href="javascript:;" @click="handleClickLiveTitle(row.contentId)">{{ row.contentTitle }}</a>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="contentId" label="场次ID" fixed />
							<el-table-column width="160" prop="liveStartTime" label="开播时间" />
							<el-table-column width="110" prop="pv">
								<template #header>
									直播间观看次数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="uv">
								<template #header>
									直播间观看人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="atnUv">
								<template #header>
									新增粉丝数#
								</template>
							</el-table-column>
							<el-table-column width="110">
								<template #header>
									转粉率#
								</template>
								<template #default="{ row }">
									{{ (row.atnUvRate * 100).toFixed(2) }}%
								</template>
							</el-table-column>
							<el-table-column width="110" prop="ipvUv">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="address">
								<template #header>
									商品点击率#
								</template>
								<template #default="{ row }">
									{{ (row.ipvUvRate * 100).toFixed(2) }}%
								</template>
							</el-table-column>
							<el-table-column width="110" prop="address">
								<template #header>
									商品加购人数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="cartUv">
								<template #header>
									商品加购件数#
								</template>
							</el-table-column>
							<el-table-column width="110" prop="confirmItemQty">
								<template #header>
									商品确认收货件数#
								</template>
							</el-table-column>
							<el-table-column width="110">
								<template #header>
									成交转化率#
								</template>
								<template #default="{ row }">
									{{ (row.confirmItemRate * 100).toFixed(2) }}%
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<v-paganation layout="prev, pager, next" :total="table_3.page.totalNumber"
								:page-size="table_3.page.pageSize" class="order-pagination" />
						</div>
					</div>
				</div>
				<div class="info-wrapper shop-wrapper">
					<v-h3-header :hasArrow="false">
						直播分商品效果
						<template #right>
							<p><span>全选</span><span>｜</span><span>全不选</span></p>
						</template>
					</v-h3-header>
					<div class="check-wrapper">
						<div class="item">
							<p>
								<label><input type="checkbox">商品点击人数</label>
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox">引导成交件数</label>
								<label><input type="checkbox">加购人数</label>
								<label><input type="checkbox">成交人数</label>
								<label><input type="checkbox">成交件数</label>
								<label><input type="checkbox">成交笔数</label>
								<label><input type="checkbox">成交金额</label>
								<label><input type="checkbox">商品退款人数</label>
								<label><input type="checkbox">商品退款件数</label>
								<label><input type="checkbox">商品退款金额</label>
								<label><input type="checkbox">商品确认收货件数</label>
								<label><input type="checkbox">商品确认收货率</label>
							</p>
						</div>
					</div>
					<div class="live-table-wrapper">
						<div class="table-opeatre">
							<div>
								<el-select placeholder="选择场次">
								</el-select>
								<el-input placeholder="请输入商品标题/ID" />
								<p class="btn">
									<el-icon>
										<ArrowUpBold />
									</el-icon>
									下载
								</p>
							</div>
							<p class="go-right">右滑查看更多</p>
						</div>
						<el-table :data="table_4.model_1" style="width: 100%" class="live-table">
							<el-table-column width="300" prop="date" label="商品主图/标题" fixed>
								<template #default="{ row }">
									<div class="table-content" @click="handleClickLiveTitle(row.contentId)">
										<p>
											<img :src="row.itemPictUrl">
										</p>
										<p>
											<a href="javascript:;">
												{{ row.itemTitle }}
											</a>
										</p>
									</div>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="contentId" label="商品ID" fixed />
							<el-table-column width="140" prop="contentTitle" label="直播标题" />
							<el-table-column width="120" prop="contentId" label="场次ID" />
							<el-table-column width="160" prop="liveStartTime" label="开播时间" />
							<el-table-column width="120" prop="ipvUv">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="ipv">
								<template #header>
									商品点击次数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="cartItemQty">
								<template #header>
									加购商品件数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="cartUv">
								<template #header>
									加购人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="refundItemQty">
								<template #header>
									成交人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="payItemQty">
								<template #header>
									成交件数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="payOrderCnt">
								<template #header>
									成交笔数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="payAmt">
								<template #header>
									成交金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="refundAmt">
								<template #header>
									商品退款金额#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<v-paganation layout="prev, pager, next" :total="table_4.page.totalNumber"
								:page-size="table_4.page.pageSize" class="order-pagination" />
						</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts" name="liveList">
import { ref } from 'vue';
import vPaganation from '@/components/Paganation/index.vue';
import live_table_list from '@/mock/current/live';

import vH3Header from '@/components/H3Header/index.vue';

const activeName = ref('first');

// table-1
const { table_1, table_2, table_3, table_4 } = live_table_list;


// 点击table中直播标题
const handleClickLiveTitle = function (id) {
	window.open(`#/dataScreen?liveId=${id}`);
}
</script>

<style scoped>
.live-list-container {
	width: 100%;
	height: 100%;
	background-color: #fff;
	overflow-y: scroll;
	position: relative;
}

.live-time {
	position: absolute;
	right: 0;
	top: 6px;
}

.live-time p {
	font-size: 12px;
	color: #999;
	font-family: PingFangSC-Regular;
	margin-bottom: 5px;
}

.live-time p>span {
	margin-right: 12px;
}

.live-time p:last-child {
	text-align: right;
	font-size: 10px;
}

.live-list-container .info-wrapper {
	padding: 40px 0 70px 0;
	border-bottom: 1px solid #ccc;
}

.live-list-container .info-wrapper>h3 {
	font-size: 14px;
	background-color: transparent;
	color: rgb(51, 51, 51);
}

.live-list-container .info-wrapper>h3 span {
	font-size: 12px;
	color: rgb(192, 192, 192);
	cursor: pointer;
}

.live-list-container .info-wrapper>h3 span:nth-child(2) {
	margin: 0 8px;
}


.live-list-container .info-wrapper>.check-wrapper .item {
	font-family: PingFangSC-Regular;
	font-size: 12px;
}

.live-list-container .info-wrapper>.check-wrapper .item h4 {
	color: #9b9b9b;
}

.live-list-container .info-wrapper>.check-wrapper .item p {
	color: rgb(51, 51, 51);
	line-height: 42px;
}

.live-list-container .info-wrapper>.check-wrapper .item label {
	display: inline-block;
	width: 160px;
}

.live-list-container .info-wrapper>.check-wrapper .item input {
	margin-right: 3px;
	width: 16px;
}

.live-list-container .info-wrapper>.live-table-wrapper>.table-opeatre {
	float: right;
	margin-bottom: 15px;
}

.live-list-container .info-wrapper .table-opeatre p {
	display: inline-block;
	margin-left: 12px;
	font-size: 12px;
}

.live-list-container .info-wrapper .table-opeatre p.go-right {
	color: #999;
}


.live-list-container .info-wrapper .table-opeatre p.btn {
	border: 1px solid rgb(200, 200, 200);
	line-height: 32px;
	cursor: pointer;
	padding: 0 12px;
	color: rgb(51, 51, 51);
	border-radius: 4px;
}

.live-list-container .info-wrapper .live-table {
	margin-bottom: 15px;
}

.live-list-container .info-wrapper .live-paganation {
	float: right;
}


.live-list-container .shop-wrapper .live-table-wrapper .table-opeatre .go-right {
	float: right;
	margin-top: 8px;
}

.live-list-container .shop-wrapper .live-table .table-content {
	display: flex;
}


.live-list-container .shop-wrapper .live-table .table-content p:first-child {
	width: 45px;
	height: 45px;
	margin-right: 14px;
}

.live-list-container .shop-wrapper .live-table .table-content p:first-child img {
	height: 100%;
}
</style>
<style>
/* tabs */
.live-list-container .el-tabs--card>.el-tabs__header {
	height: 52px;
	padding: 5px;
	border: none;
}

.live-list-container .el-tabs__nav-scroll {
	display: flex;
	justify-content: center;
}

.live-list-container .el-tabs__nav {
	border: none !important;
}

.live-list-container .el-tabs__item {
	width: 150px;
	height: 38px;
	line-height: 38px;
	border: 1px solid rgb(32, 98, 230) !important;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: rgb(32, 98, 230);
}

.live-list-container .el-tabs__item:first-child {
	border-radius: 16px 0 0 16px;
}

.live-list-container .el-tabs__item:last-child {
	border-radius: 0px 16px 16px 0px;
}

.live-list-container .el-tabs__item.is-active {
	background-color: rgb(32, 98, 230);
	color: #fff;
}

/* table */
.live-list-container .el-table.live-table tr th {
	font-size: 12px;
	color: rgb(192, 192, 192);
	font-weight: normal;
	font-family: PingFangSC-Regular;
}

.live-list-container .el-table.live-table tr td {
	font-size: 12px;
}

.live-list-container .el-table.live-table tr td a {
	font-size: 12px;
	color: #2062e6;
}

.live-list-container .shop-wrapper .live-table-wrapper .table-opeatre>div .el-select {
	width: 300px;
	margin-right: 8px;
}

.live-list-container .shop-wrapper .live-table-wrapper .table-opeatre>div .el-select .el-input {
	width: 100%;
}

.live-list-container .shop-wrapper .live-table-wrapper .table-opeatre>div .el-input {
	width: 200px;
	height: 34px;
}
</style>