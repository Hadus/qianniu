<template>
	<div class="serverReport-container">
		<div class="fix download">
			<i class="homeFonts1-download"></i>
			下载中心
		</div>
		<el-tabs v-model="activeName" class="server-tabs">
			<el-tab-pane label="新灯塔考核" name="first">
				<div class="fix date">
					2023-9-7
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
											<p>4.92</p>
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
												<p><span>较昨日</span><span>0.00%</span></p>
												<p><span>行业均值</span><span>4.02分</span></p>
												<p><span>行业优秀</span><span>4.59</span></p>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="left">
											<p>金牌卖家今日考核</p>
											<p>4.92</p>
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
											<p>4.92</p>
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
								<el-table :data="tableData" style="width: 100%" class="examine-table">
									<el-table-column prop="date" label="Date" width="180" />
									<el-table-column prop="name" label="Name" width="180" />
									<el-table-column prop="address" label="Address" />
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
let activeName = 'first';
let activeName_inner = 'one';
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
];
</script>

<style scoped>
.serverReport-container {
	height: 100%;
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

.serverReport-container .examine-wrapper>.notice {
	margin-top: 10px;
	line-height: 30px;
	font-size: 14px;
}

.serverReport-container .right-wrapper {
	height: 40px;
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
</style>
