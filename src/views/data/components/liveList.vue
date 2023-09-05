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
								<label><input type="checkbox">观看次数</label>
								<label><input type="checkbox">观看人数</label>
								<label><input type="checkbox">封面图点击率</label>
								<label><input type="checkbox">流量券消耗</label>
							</p>
						</div>
						<div class="item">
							<h4>观看</h4>
							<p>
								<label><input type="checkbox">平均观看时长（秒）</label>
							</p>
						</div>
						<div class="item">
							<h4>转粉</h4>
							<p>
								<label><input type="checkbox">新增粉丝数</label>
							</p>
						</div>
						<div class="item">
							<h4>引导</h4>
							<p>
								<label><input type="checkbox">商品点击人数</label>
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox">商品点击率</label>
							</p>
						</div>
						<div class="item">
							<h4>成交</h4>
							<p>
								<label><input type="checkbox">引导成交转化率</label>
								<label><input type="checkbox">引导成交人数</label>
								<label><input type="checkbox">引导成交件数</label>
								<label><input type="checkbox">引导成交笔数</label>
								<label><input type="checkbox">引导成交金额</label>
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
						<el-table :data="tableData" style="width: 100%" class="live-table">
							<el-table-column width="120" fixed prop="date" label="直播标题">
								<template #default="scope">
									<a href="javascript:;">{{ scope.row.date }}</a>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="name" label="场次ID" />
							<el-table-column width="120" prop="name" label="开播时间" />
							<el-table-column width="120" prop="address">
								<template #header>
									观看次数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									观看人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									封面点击率#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									流量券消耗#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									平均观看时长（秒）#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									新增粉丝数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击率#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交转化率#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交人数#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<el-pagination layout="prev, pager, next" :total="2" class="order-pagination" prev-text="上一页"
								next-text="下一页" />
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
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox">商品点击人数</label>
								<label><input type="checkbox">引导成交件数</label>
								<label><input type="checkbox">引导成交金额</label>
								<label><input type="checkbox">预售下定金金额</label>
								<label><input type="checkbox">预售预估总金额</label>
								<label><input type="checkbox">退款件数</label>
								<label><input type="checkbox">退款人数</label>
								<label><input type="checkbox">退款金额</label>
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
						<el-table :data="tableData" style="width: 100%" class="live-table">
							<el-table-column width="300" prop="date" label="商品主图/标题" fixed>
								<template #default="scope">
									<div class="table-content">
										<p>
											<img src="https://img.alicdn.com/imgextra/i3/2559988253/O1CN01z2Cvah2Apvb3JYp7Z_!!2559988253.jpg"
												alt="天然保山南红手链磨山款老型保山南红玛瑙手串云南保山南红手链">
										</p>
										<p>
											<a href="javascript:;">
												天然保山南红手链磨山款老型保山南红玛瑙手串云南保山南红手链
											</a>
										</p>
									</div>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="name" label="商品ID" fixed />
							<el-table-column width="120" prop="name" label="直播标题" />
							<el-table-column width="120" prop="name" label="场次ID" />
							<el-table-column width="120" prop="name" label="开播时间" />
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击次数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交件数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									预售下定金金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									预售预估总金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									退款件数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									退款人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									退款金额#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<el-pagination layout="prev, pager, next" :total="2" class="order-pagination" prev-text="上一页"
								next-text="下一页" />
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
								<label><input type="checkbox">观看次数</label>
								<label><input type="checkbox">观看人数</label>
								<label><input type="checkbox">封面图点击率</label>
								<label><input type="checkbox">流量券消耗</label>
							</p>
						</div>
						<div class="item">
							<h4>观看</h4>
							<p>
								<label><input type="checkbox">平均观看时长（秒）</label>
							</p>
						</div>
						<div class="item">
							<h4>转粉</h4>
							<p>
								<label><input type="checkbox">新增粉丝数</label>
							</p>
						</div>
						<div class="item">
							<h4>引导</h4>
							<p>
								<label><input type="checkbox">商品点击人数</label>
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox">商品点击率</label>
							</p>
						</div>
						<div class="item">
							<h4>成交</h4>
							<p>
								<label><input type="checkbox">引导成交转化率</label>
								<label><input type="checkbox">引导成交人数</label>
								<label><input type="checkbox">引导成交件数</label>
								<label><input type="checkbox">引导成交笔数</label>
								<label><input type="checkbox">引导成交金额</label>
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
						<el-table :data="tableData" style="width: 100%" class="live-table">
							<el-table-column width="120" fixed prop="date" label="直播标题">
								<template #default="scope">
									<a href="javascript:;" @click="handleClickLiveTitle">{{ scope.row.date }}</a>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="name" label="场次ID" />
							<el-table-column width="120" prop="name" label="开播时间" />
							<el-table-column width="120" prop="address">
								<template #header>
									观看次数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									观看人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									封面点击率#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									流量券消耗#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									平均观看时长（秒）#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									新增粉丝数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击率#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交转化率#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交人数#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<el-pagination layout="prev, pager, next" :total="2" class="order-pagination" prev-text="上一页"
								next-text="下一页" />
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
								<label><input type="checkbox">商品点击次数</label>
								<label><input type="checkbox">商品点击人数</label>
								<label><input type="checkbox">引导成交件数</label>
								<label><input type="checkbox">引导成交金额</label>
								<label><input type="checkbox">预售下定金金额</label>
								<label><input type="checkbox">预售预估总金额</label>
								<label><input type="checkbox">退款件数</label>
								<label><input type="checkbox">退款人数</label>
								<label><input type="checkbox">退款金额</label>
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
						<el-table :data="tableData" style="width: 100%" class="live-table">
							<el-table-column width="300" prop="date" label="商品主图/标题" fixed>
								<template #default="scope">
									<div class="table-content">
										<p>
											<img src="https://img.alicdn.com/imgextra/i3/2559988253/O1CN01z2Cvah2Apvb3JYp7Z_!!2559988253.jpg"
												alt="天然保山南红手链磨山款老型保山南红玛瑙手串云南保山南红手链">
										</p>
										<p>
											<a href="javascript:;">
												天然保山南红手链磨山款老型保山南红玛瑙手串云南保山南红手链
											</a>
										</p>
									</div>
								</template>
							</el-table-column>
							<el-table-column width="120" prop="name" label="商品ID" fixed />
							<el-table-column width="120" prop="name" label="直播标题" />
							<el-table-column width="120" prop="name" label="场次ID" />
							<el-table-column width="120" prop="name" label="开播时间" />
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击次数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									商品点击人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交件数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									引导成交金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									预售下定金金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									预售预估总金额#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									退款件数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									退款人数#
								</template>
							</el-table-column>
							<el-table-column width="120" prop="address">
								<template #header>
									退款金额#
								</template>
							</el-table-column>
						</el-table>
						<div class="live-paganation">
							<el-pagination layout="prev, pager, next" :total="2" class="order-pagination" prev-text="上一页"
								next-text="下一页" />
						</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts" name="liveList">
import vH3Header from '@/components/H3Header/index.vue';

const activeName = 'first';
// table
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No.',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No.',
	},
]
// 点击table中直播标题
const handleClickLiveTitle = function () {
	window.open('#/dataScreen');
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
	margin-right: 10px;
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