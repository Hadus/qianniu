<template>
	<div class="serverReport-container">
		<div class="fix download">
			<i class="homeFonts1-download"></i>
			下载中心
		</div>
		<el-tabs v-model="activeName" class="server-tabs">
			<el-tab-pane label="新灯塔考核" name="first">
				<div class="fix date">
					{{ getDateString() }}
					<i class="homeFonts1-calendar"></i>
				</div>
				<el-tabs v-model="activeName_inner" class="server-tabs-inner">
					<el-tab-pane label="店铺考核" name="one">
						<div class="inner-wrapper">
							<div class="block-wrapper notice-wrapper">
								<p>
									【公告】2023年新版综合体验分指标体系1月12日正式生效，指标定义、详细解读&常见FAQ<a href="https://www.yuque.com/gm9dum/qq35z0/ght6wd"
										target="_blank">点此查看</a>
								</p>
								<p>【公告】新灯塔考核物流指标将根据疫情影响地区自动作数据剔除<a href="https://www.yuque.com/gm9dum/thyzgp/kqbiw6"
										target="_blank">点此查看</a></p>
								<p>【提醒】报名物流信息接入<a href="https://axqn.taobao.com/page/AXQN/kpoms_logistics_info_intro_kunpeng"
										target="_blank">点击链接</a>，提升店铺物流体验，获取更多权益加持，常见FAQ<a
										href="https://www.yuque.com/docs/share/cd7cebd9-9ddd-499e-bb66-045880d2dec7?#"
										target="_blank">点此查看</a></p>
							</div>
							<div class="scope-wrapper">
								<h3>
									<span>店铺概况</span>
									<p>考核类目：饰品/流行首饰/时尚饰品新</p>
								</h3>
								<div class="item-wrapper">
									<div class="item">
										<div class="left">
											<p>店铺综合体验分</p>
											<p>{{ mock_shop.shop_overall.tiyan.total }}</p>
											<p style="visibility: hidden;">上期考核结果：未达标
												<el-icon>
													<QuestionFilled />
												</el-icon>
											</p>
										</div>
										<div class="right">
											<p>
												<img
													src="https://img.alicdn.com/imgextra/i2/O1CN014B0zCS1qLtDojM0IW_!!6000000005480-2-tps-210-48.png">
											</p>
											<div>
												<p><span>较昨日</span><span>{{ mock_shop.shop_overall.tiyan.toPrevDay }}</span></p>
												<p><span>行业均值</span><span>{{ mock_shop.shop_overall.tiyan.average }}</span></p>
												<p><span>行业优秀</span><span>{{ mock_shop.shop_overall.tiyan.excellent }}</span></p>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="left">
											<p>金牌卖家今日考核</p>
											<p>{{ mock_shop.shop_overall.seller_kaohe.total }}</p>
											<p>上期考核结果：未达标
												<el-icon>
													<QuestionFilled />
												</el-icon>
											</p>
										</div>
										<div class="right">
											<p>
												<img
													src="https://img.alicdn.com/imgextra/i4/O1CN013NsIo71DFglkqfbdk_!!6000000000187-2-tps-140-32.png">
											</p>
											<div>
												<p><span>服务能力</span><span>
														<el-icon color="rgb(29, 193, 29)">
															<CircleCheckFilled />
														</el-icon>
													</span></p>
												<p><span>经营能力</span><span>
														<el-icon color="rgb(29, 193, 29)">
															<CircleCheckFilled />
														</el-icon>
													</span></p>
												<p><span>合规能力</span><span>
														<el-icon color="rgb(29, 193, 29)">
															<CircleCheckFilled />
														</el-icon>
													</span></p>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="left">
											<p>金牌客服今日考核</p>
											<p>{{ mock_shop.shop_overall.buyer_kaohe.total }}</p>
											<p>上期考核结果：未达标
												<el-icon>
													<QuestionFilled />
												</el-icon>
											</p>
										</div>
										<div class="right">
											<p>
												<img
													src="https://img.alicdn.com/imgextra/i4/O1CN01uFNmly1vK7jHAn20x_!!6000000006153-2-tps-212-32.png">
											</p>
											<div>
												<p><span>店铺综合体验分≥3.6</span><span>
														<el-icon color="rgb(29, 193, 29)">
															<CircleCheckFilled />
														</el-icon>
													</span></p>
												<p><span>有效评价量{{ '<100' }}</span><span>
																<el-icon color="rgb(29, 193, 29)">
																	<CircleCheckFilled />
																</el-icon>
															</span></p>
												<p><span>旺旺满意度{{ '<95%' }}</span><span>
																<el-icon color="rgb(29, 193, 29)">
																	<CircleCheckFilled />
																</el-icon>
															</span></p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="examine-wrapper">
								<h3>
									<span>考核指标</span>
									<p>
										<el-icon>
											<Upload />
										</el-icon>
										导出
									</p>
								</h3>
								<el-table :data="tableData" style="width: 100%" class="examine-table" border
									:span-method="objectSpanMethod">
									<el-table-column prop="one" label="考核维度" width="180" />
									<el-table-column label="考核得分" width="180" class-name="two">
										<template #default="{ row }">
											<p>{{ row.two.score }}</p>
											<p>较昨日{{ row.two.toPrevDay }}%</p>
											<p><a href="javascript">诊断提升</a></p>
										</template>
									</el-table-column>
									<el-table-column label="考核指标" width="300" class-name="three">
										<template #default="{ row }">
											{{ row.three }}
											<i class="homeFonts1-prompt"> </i>
											<el-icon color="rgb(148, 148, 148)" class="icon-video">
												<VideoPlay />
											</el-icon>
										</template>
									</el-table-column>
									<el-table-column prop="four" label="指标得分" width="180" />
									<el-table-column prop="five" label="指标表现" width="320" class-name="five">
										<template #default="{ row }">
											<div class="chart">
												<div>{{ row.five.performance }}</div>
												<div class="server-chart" id="serverReporter_chart">
												</div>
											</div>
										</template>
									</el-table-column>
									<el-table-column prop="six" label="考核标准" width="320" class-name="six">
										<template #default="{ row }">
											<div class="process">
												<div class="bot">
													<p></p>
													<p></p>
													<p></p>
													<p></p>
													<p></p>
												</div>
												<div class="top" :class="{ top4: row.six !== 5 }">
													<p></p>
													<p></p>
													<p></p>
													<p></p>
													<p></p>
												</div>
											</div>
										</template>
									</el-table-column>
									<el-table-column prop="seven" label="下一档目标值" width="180" class-name="seven">
										<template #default="{ row }">
											<span :class="{ ok: row.six === 5 }">
												{{ row.seven }}
											</span>
										</template>
									</el-table-column>
								</el-table>
								<div class="notice">
									<p>1、综合体验分(原基础服务分)=商品体验得分*<span style="color:red">25%</span>+物流体验得分*<span
											style="color:red">25%</span>+咨询体验得分*<span style="color:red">10%</span>+售后体验得分*<span
											style="color:red">20%</span>+纠纷体验得分*<span style="color:red">20%</span>。 </p>
									<p>2、恶意行为导致指标异常，可以在<a href="https://tousu.taobao.com/#/" target="_blank"
											color="#5584ff">恶意行为投诉中心</a>投诉。成功后均可剔除相关订单的指标考核影响。</p>
								</div>
							</div>
							<div class="right-wrapper">
								<h3>
									<span>店铺权益</span>
								</h3>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="商品体验" name="two">暂无</el-tab-pane>
					<el-tab-pane label="物流体验" name="three">暂无</el-tab-pane>
					<el-tab-pane label="咨询体验" name="three">暂无</el-tab-pane>
					<el-tab-pane label="售后体验" name="three">暂无</el-tab-pane>
					<el-tab-pane label="纠纷体验" name="three">暂无</el-tab-pane>
				</el-tabs>
			</el-tab-pane>
			<el-tab-pane label="服务报告" name="second">暂无</el-tab-pane>
			<el-tab-pane label="原声洞察" name="third">暂无</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts" name="serverReport">
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
import mock_shop from '@/mock/current/shop';
import { getDateString } from '@/utils/utils';

let activeName = ref('first');
let activeName_inner = ref('one');
// table
const objectSpanMethod = ({
	rowIndex,
	columnIndex,
}) => {
	if (columnIndex < 2) {
		if (rowIndex % 2 === 0) {
			return {
				rowspan: 2,
				colspan: 1,
			}
		} else {
			return {
				rowspan: 0,
				colspan: 0,
			}
		}
	}
}
const tableData = mock_shop.examine_tableData;
// chart
const initServerChart = (fn) => {
	const domList_server_chart = document.querySelectorAll('#serverReporter_chart');
	domList_server_chart.forEach((dom) => {
		const serverReporter_chart = echarts.init(dom);
		const dataList = fn();
		const option = {
			color: ['rgba(50, 229, 255, 1)', 'rgba(250, 207, 18, 1)'],
			tooltip: {
				show: false,
				position: {
					left: 0, bottom: 0
				}
			},
			xAxis: [
				{
					type: 'category',
					data: ['2017', '2018', '2019', '2020', '2021', '2022', '2017', '2018', '2019', '2020', '2021', '2022'],
					show: false
				}
			],
			yAxis: [
				{
					type: 'value',
					show: false,
					// scale: true,
					minInterval: 100,
				},
				{
					type: 'value',
					show: false,
					// scale: true,
					minInterval: 100,
				}
			],
			series: [
				{
					name: '柱状图',
					type: 'bar',
					itemStyle: {
						color: 'rgb(226,234,253)'
					},
					barGap: '0%',
					barWidth: '100%',
					data: dataList,
				},
				{
					name: '折线图',
					type: 'line',
					yAxisIndex: 1,
					itemStyle: {
						color: 'rgb(32,98,230)'
					},
					showSymbol: false,
					data: dataList,
				},
			]
		};
		serverReporter_chart.setOption(option);
	});
}

onMounted(() => {
	const getChartData = () => {
		const list = [];
		const num = 10, n = 0, m = 120;
		for (let index = 0; index < num; index++) {
			const random = parseInt(Math.random() * (m - n) + n);
			list.push(random)
		}
		return list;
	}
	setTimeout(() => {
		initServerChart(getChartData);
	}, 0);
});
</script>

<style scoped>
.serverReport-container {
	height: auto;
	width: 100%;
	color: rgba(0, 0, 0, 0.85);
	font-size: 14px;
}

.serverReport-container .inner-wrapper {
	width: 100%;
	height: 100%;
	padding: 115px 0px 20px 20px;
}

.serverReport-container .inner-wrapper>div {
	margin-bottom: 50px;
}

.serverReport-container .inner-wrapper>.notice-wrapper {
	padding: 16px;
	background-color: rgba(0, 87, 255, 0.06);
}

.serverReport-container .inner-wrapper>.notice-wrapper a {
	color: #5584ff;
}

.serverReport-container .inner-wrapper>div>h3 {
	font-size: 16px;
	font-weight: 700;
	display: flex;
	line-height: 20px;
	margin-bottom: 30px;
	position: relative;
}

.serverReport-container .inner-wrapper>.scope-wrapper>h3>p {
	color: rgb(17, 17, 17);
	font-size: 12px;
	margin-left: 12px;
	font-weight: 500;
}

.serverReport-container .scope-wrapper>.item-wrapper {
	display: flex;
	height: 120px;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item {
	flex: 1;
	height: 100%;
	display: flex;
	background-color: rgb(247, 248, 250);
	padding: 12px 16px;
	border-radius: 16px;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item:nth-child(2) {
	margin: 0 35px;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>div {
	flex: 1;
	height: 100%;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.left {
	text-align: center;
	padding: 0 0px 0 40px;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.left p:first-child {
	font-size: 14px;
	font-weight: 700;
	color: rgb(17, 17, 17);
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.left p:nth-child(2) {
	font-size: 36px;
	font-weight: 500;
	padding-top: 10px;
	color: rgb(17, 17, 17);
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.left p:last-child {
	font-size: 12px;
	font-weight: normal;
	color: #999;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right {
	padding-left: 100px;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right>p {
	line-height: 30px;
	margin-bottom: 7px;
	text-align: right;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right>p img {
	width: 70px;
	height: 16px;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right>div {
	font-size: 12px;
	font-weight: normal;
	color: #999;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right>div>p {
	line-height: 20px;
	display: flex;
	justify-content: space-around;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right>div>p span:first-child {
	display: block;
	flex: 2;
}

.serverReport-container .scope-wrapper>.item-wrapper>.item>.right>div>p span:last-child {
	text-align: right;
	flex: 1;
}

.serverReport-container .examine-wrapper>h3 p {
	width: 79px;
	height: 36px;
	color: #4a87ff;
	text-align: center;
	line-height: 79px;
	font-size: 14px;
	font-weight: normal;
	position: absolute;
	right: 0;
	top: 0;
}

.serverReport-container .examine-table .two p {
	font-size: 12px;
	line-height: 17px;
	color: #999;
}

.serverReport-container .examine-table .two p:first-child {
	font-size: 28px;
	font-weight: 500;
	line-height: 28px;
	color: rgb(17, 17, 17);
	margin-bottom: 5px;
}

.serverReport-container .examine-table .two a {
	color: #3d7fff;
}

.serverReport-container .examine-table .three i.icon-video {
	transform: translateY(2px);
	margin-left: 2px;
}

.serverReport-container .examine-table .five .chart {
	width: 100%;
	height: 100%;
	display: flex;
}

.serverReport-container .examine-table .five .chart div {
	flex: 1;
	height: 50px;
	line-height: 50px;
}

.serverReport-container .examine-table .six .process {
	background-color: #fff;
	width: 296px;
	height: 8px;
	position: relative;
}

.serverReport-container .examine-table .six .process .top {
	position: absolute;
	left: 0;
	top: 0;
}

.serverReport-container .examine-table .six .process>div {
	width: 100%;
	height: 100%;
	background: transparent;
	display: flex;
}

.serverReport-container .examine-table .six .process>div p {
	height: 100%;
	background: transparent;
	width: 27%;
	margin: 0 1px;
}

.serverReport-container .examine-table .six .process>div p:first-child {
	border-radius: 4px 0 0 4px;
	width: 8%;
}

.serverReport-container .examine-table .six .process>div p:last-child {
	border-radius: 0 4px 4px 0;
	width: 10%;
}

.serverReport-container .examine-table .six .process>div.bot p {
	background: #e5e5e5;
}

.serverReport-container .examine-table .six .process>div.top p {
	background: rgb(32, 98, 230);
}

.serverReport-container .examine-table .six .process>div.top.top4 p:nth-child(5) {
	width: 0px;
}

.serverReport-container .examine-table .seven span.ok {
	color: #31b57d;
}

.serverReport-container .examine-wrapper>.notice {
	margin-top: 10px;
	line-height: 30px;
	font-size: 14px;
}

.serverReport-container .right-wrapper {
	/* height: 400px; */
}


.serverReport-container .download {
	width: 100px;
	height: 36px;
	border-radius: 4px;
	color: #111;
	text-align: center;
	line-height: 34px;
	border: 1px solid #c4c6cf;
}

.serverReport-container .date {
	width: 121px;
	height: 36px;
	border-radius: 4px;
	color: #111;
	text-align: center;
	line-height: 34px;
	background-color: #f2f4f7;
}
</style>
<style>
.serverReport-container .server-tabs .el-tabs__nav-wrap::after {
	height: 1px;
}

.serverReport-container .server-tabs .el-tabs__header {
	position: fixed;
	left: calc(120px + 120px);
	background-color: #fff;
	z-index: 9999;
	width: calc(100% - 240px - 10px);

}

.serverReport-container .server-tabs>.el-tabs__header {
	top: 76px;
	margin-bottom: 0;
	padding-bottom: 15px;
	padding-top: 28px;
}

.serverReport-container .server-tabs-inner>.el-tabs__header {
	top: calc(76px + 28px + 54px);
}

.serverReport-container .fix {
	position: fixed;
	right: 20px;
	background-color: #fff;
	z-index: 10000;
}

.serverReport-container .download {}

.serverReport-container .date {
	top: calc(76px + 28px + 54px - 2px);
}

.serverReport-container .examine-wrapper tr th,
.serverReport-container .examine-wrapper tr td {
	color: #111;
	font-size: 14px;
}

.serverReport-container .examine-wrapper tr th {
	background-color: #f2f4f7;
	font-weight: 700;
}

.serverReport-container .examine-wrapper tr .el-table__cell {
	padding: 20px 0;
}
</style>
