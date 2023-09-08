<template>
	<div class="dataScreen-container">
		<div class="header">
			<div class="left">
				<div class="homeLogo"></div>
				<div>
					<div class="screen-switch"><button type="button" class="entry">普通版</button>

					</div>
				</div>
			</div>
			<div class="right">
				<img alt="头像" class="peopleImg"
					src="https://wwc.alicdn.com/avatar/getAvatar.do?userId=2559988253&amp;type=taobao">
				<!-- <span>{{ user.name }}</span> -->
			</div>
		</div>
		<div class="main">
			<div class="home-left">
				<div class="left-module-up">
					<div class="module-title">
						核心数据
						<el-tooltip class="box-item" effect="dark"
							content='<div ><b>观看次数：</b>本场直播累计观看次数;<br><b>非粉丝观看占比：</b>非粉丝观众累计观看次数/总观看次数;<br><b>观看人数：</b>本场直播累计观看人数（去重）;<br><b>非粉丝观看占比：</b>非粉丝观众累计观看人数（去重）/总观看人数（去重）;<br><b>平均观看时长（秒）：</b>本场实时直播中用户观看的人均时长，单位是"秒";<br><b>非粉丝观看时长（秒）：</b>本场实时直播中非粉丝观众观看的人均时长，单位是"秒";<br><b>新增粉丝数：</b>本场直播新增粉丝数量;<br><b>流量券消耗：</b>本场直播流量券消耗带来的流量（PV）<br><b>商品点击率：</b>本场直播中有过点击宝贝口袋商品行为的观众（去重）/本场累计观众（去重）;<br><b>非粉丝商品点击率：</b>本场直播中有过点击宝贝口袋商品行为的非粉丝观众（去重）/本场累计非粉丝观众（去重）;<br><b>成交人数：</b>本场直播中完成下单的累计观众数;<br><b>非粉丝成交人数占比：</b>本场直播中完成下单的累计非粉丝观众/完成下单的累计观众数;<br><b>成交转化率（成交UV/点击UV）：</b>本场直播中完成下单的观众（去重）/本场直播中有过点击宝贝口袋商品行为的观众（去重）;<br><b>非粉丝成交转化率：</b>本场直播中完成下单的非粉丝观众（去重）/本场直播中有过点击宝贝口袋商品行为的非粉丝观众（去重）;<br><b>成交件数：</b>本场直播累计成交件数;<br><b>非粉丝成交件数占比：</b>本场直播中由非粉丝观众完成下单的累计成交件数/本场直播累计成交件数;<br><b>活动激励流量：本场直播实时获取的平台活动激励流量，包括新人激励、实时赛马、潜力主播、严选商品和点淘短直联动激励（pv）</b></div>'
							placement="bottom" raw-content>


							<img src="https://img.alicdn.com/imgextra/i4/O1CN01WKQLU81ed2ZbubuVC_!!6000000003893-55-tps-16-16.svg"
								style="position: relative; z-index: 10; margin-left: 10px; cursor: help;">
						</el-tooltip>
					</div>

					<div class="core-data-tab">
						<div class="ant-tabs">
							<div class="ant-tabs-nav">
								<div class="tab-item" :class="isActive ? 'active' : ''" @click="tbaClick">流量互动
								</div>
								<div class="tab-item" :class="!isActive ? 'active' : ''" @click="tbaClick"> 转化成交
								</div>
								<div class="ant-tabs-ink-bar" :class="isActive ? '' : 'activetba'" style="left: 0px; width: 72px;"></div>
							</div>
						</div>

					</div>
					<div class="core-data-content">
						<div class="data-list">
							<div v-if="isActive">
								<div v-for="item in liuLiangHuDong" :key="index">
									<div class="data-item">
										<div class="large"><img :src="item.img">{{ item.name1 }}
										</div>
										<div>{{ item.zhuanhualv1 }}</div>
									</div>
									<div class="data-item" data-type="ipv_uv_rate_not_fans" v-if="item.name2">
										<div>{{ item.name2 }}</div>
										<div>{{ item.zhuanhualv2 }}</div>
									</div>
								</div>
							</div>
							<div v-else>
								<div v-for="item in zhuanHuaChengJiao" :key="index">
									<div class="data-item">
										<div class="large"><img :src="item.img">{{ item.name1 }}
										</div>
										<div>{{ item.zhuanhualv1 }}</div>
									</div>
									<div class="data-item" data-type="ipv_uv_rate_not_fans" v-if="item.name2">
										<div>{{ item.name2 }}</div>
										<div>{{ item.zhuanhualv2 }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="left-module-down">
					<div>
						<div class="live-actions"><img
								src="https://img.alicdn.com/imgextra/i4/O1CN01fkRTHI1GahpZ5cwpB_!!6000000000639-55-tps-168-168.svg"
								alt="继续加油">
							<div class="live-actions-text">开播时长太短啦！开播至少大于30分钟，解锁场次复盘～</div>
							<div class="btns-group"><button type="button" class="ant-btn ant-btn-round ant-btn-primary"
									style="width: 100%;"><span>红包核销&amp;直播域数据</span></button>
								<div style="display: flex; justify-content: space-between; margin-top: 30px;"><button type="button"
										class="ant-btn ant-btn-round ant-btn-ghost"><span>货品分析</span></button><button type="button"
										class="ant-btn ant-btn-round ant-btn-ghost"><span>粉丝数据</span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="home-middle">
				<div class="middle-top">
					<div class="middle-live">
						<div class="center-big">
							<div class="avatarName"> 正在直播中</div>
							<div class="duibi">场次对比</div>
						</div>
						<div class="liveTips">
							<div style="word-break: keep-all; white-space: nowrap;"><span>开播时间: 2023-09-02
									13:24:19</span><span style="padding-left: 20px;">直播时长: 0小时10分钟</span></div>
							<div title="若数据没有自动更新，可能是网络抖动，可刷新页面或稍等片刻。"
								style="display: flex; align-items: center; justify-content: flex-end;">
								<div>数据统计时间: 2023-09-02 13:35:17</div><img alt="刷新" title="刷新"
									src="https://img.alicdn.com/imgextra/i2/O1CN0167PKlo1aObdAWQTvU_!!6000000003320-55-tps-24-20.svg"
									style="margin-left: 10px; cursor: pointer;">
							</div>
						</div>
					</div>
					<div class="zhibotips">

						<el-tooltip class="box-item" effect="dark"
							content='<div ><b>直播成交金额：</b>本场直播累计成交金额；<br><b>在线人数：</b>本场直播当前在线观看人数,<br>根据同行业实时在线人数排名划分为高级、<br>中级和初级；<br> <b>实时流量竞争力：</b>内容指数：近30分钟直播间推荐渠道进入<br>用户的停留时长指数（从低到高1-5级）交易指数：近30分钟直<br>播间推荐渠道进入用户的商品点击及成交指数<br>（从低到高D-S级）  矩阵位置越靠近右上角，推荐流量上涨概率越大；</div>'
							placement="bottom" raw-content>
							<img src="https://img.alicdn.com/imgextra/i4/O1CN01WKQLU81ed2ZbubuVC_!!6000000003893-55-tps-16-16.svg"
								style="cursor: help;">
						</el-tooltip>


					</div>

					<div class="centerContent">
						<div class="center--left">
							<img src="https://gw.alicdn.com/imgextra/i3/O1CN01AckiJN1n2hhw5O5JB_!!6000000005032-54-tps-206-206.apng">
							<div class="firstImg">
								<div>最高在线人数</div>
								<div>{{ pageData.zuiGaoNum }}</div>
							</div>
						</div>
						<div class="center--middle">
							<div>
								<div>直播成交金额</div>
								<div>{{ pageData.zuiGaoJiner }}</div>
							</div>
							<div>
								<div style="    display: flex;
	justify-content: space-between;margin-top: 30px;">
									<div>非粉丝成交金额占比</div>
									<div>{{ pageData.fenSiZhanBi }}</div>
								</div>
							</div>
						</div>
						<div class="center--right">
							<img src="https://gw.alicdn.com/imgextra/i3/O1CN01AckiJN1n2hhw5O5JB_!!6000000005032-54-tps-206-206.apng"
								class="center--rightEye--1mseSsF">
						</div>
					</div>
				</div>
				<div class="middle-down">
					<div class="goods-table">
						<el-table :data="tableData" style="width: 100%;background-color: black;" @sort-change="sortChange">
							<el-table-column v-for="(item, index) in heardlist" :key="index" :width="item.width"
								:sortable="item.id != 'productInfo' ? true : false">
								<template #header>
									<span v-if="item.id == 'productInfo'">{{ item.name }}
										<el-tooltip class="box-item" effect="dark" content='<div >曝光次数：本场直播截止目前，用户</br>打开宝贝口袋后单商品的曝光累计次数；</br>
曝光点击率：单商品点击人数/单商品曝光人数；</br>
成交转化率：单商品成交人数/单商品点击人数；</br>
在线人数：商品上架时刻的在线人数；</br>
新增单商品的加购人数、件数、商品曝</br>光点击率和成交转化率，指标解读教学见中央公告' placement="bottom" raw-content>


											<img
												src="https://img.alicdn.com/imgextra/i4/O1CN01WKQLU81ed2ZbubuVC_!!6000000003893-55-tps-16-16.svg" />
										</el-tooltip>

									</span>
									<span v-else>{{ item.name }}</span>
								</template>
								<template #default="scope">
									<span v-if="item.id == 'productInfo'" style="display: flex;">
										<div class="imageContainer">
											<div class="tipNumImage">{{ scope.row.order }}</div>

											<img :alt="scope.row.productInfo" :src="scope.row.img">
										</div>
										<div class="imageTipsLong">{{
											scope.row.productInfo }}</div>
									</span>
									<span v-else class="goods-table-column"> {{ scope.row[item.id] }} </span>
								</template>

							</el-table-column>
						</el-table>
					</div>

				</div>
			</div>
			<div class="home-right">
				<div class="right-module">
					<div style="padding: 0px 20px;"><span style="margin-right: 10px;"> 预售</span> <el-switch v-model="value2"
							class="ml-2" style="--el-switch-on-color: #ff0040; --el-switch-off-color: #535353" /></div>
					<div> <span style="background: black;display: inline-flex;">
							<span class="switch-item" :class="active == 'guanzong' ? 'activeclass' : ''"
								@click="dealClick('guanzong')">观众</span>
							<span class="switch-item" :class="active == 'huiyuan' ? 'activeclass' : ''"
								@click="dealClick('huiyuan')">会员</span>
							<span class="switch-item" :class="active == 'xinke' ? 'activeclass' : ''"
								@click="dealClick('xinke')">新客</span></span>
					</div>
					<div>
						<div class="ant-spin-container">
							<div class="controls--captureBtn" title="导出 Excel"><img alt="导出 Excel"
									src="https://gw.alicdn.com/imgextra/i4/O1CN01DtB4BT1z2xMkdY9Q0_!!6000000006657-55-tps-64-64.svg">
							</div>
						</div>
					</div>

				</div>
				<div class="right-module">
					<div class="module-title" style="display: flex;
	justify-content: space-between;">
						<div>流量来源
							<el-tooltip class="box-item" effect="dark"
								content='<div data-spm-anchor-id="a21aqw.livedsc.0.i5.564e7f33gENxrc">为了您更好的进行直播运营，数据大屏将流量来源分别统计为直播域，店铺域，和广告域三个渠道。<br><br><b>直播域包括：</b>直播关注、推荐、主播主页、淘金币、搜索、分享回流、视频、群、订阅、其他；<br><b>店铺域包含：</b>店铺、宝贝详情页；<br><b>广告域包含</b>：广告。<br><br>广告域的统计数据您可在流量来源明细中查看。</div>'
								placement="bottom" raw-content>


								<img src="https://img.alicdn.com/imgextra/i4/O1CN01WKQLU81ed2ZbubuVC_!!6000000003893-55-tps-16-16.svg"
									style="position: relative; z-index: 10; margin-left: 10px; cursor: help;">
							</el-tooltip>
						</div>
						<div class="lookAll"><button title="查看全部">查看全部</button></div>

					</div>
					<div style="height: 10px;"></div>
					<div>
						<div class="card"
							style="background-image: linear-gradient(-23deg, rgb(91, 39, 39) 0%, rgba(21, 19, 19, 0.6) 88%);">
							<div class="card-title">直播域</div>
							<div class="card-content">
								<div class="field" style="padding-right: 5px;" v-for="(item, index) in zhiBoYu" :key="index">
									<div class="title">{{ item.name }}</div>
									<div class="value">{{ item.Number }}</div>
								</div>

							</div>
						</div>
						<div class="card"
							style="background-image: linear-gradient(-23deg, rgb(59, 39, 91) 0%, rgba(21, 19, 19, 0.6) 88%);">
							<div class="card-title">店铺域</div>
							<div class="card-content">
								<div class="field" style="padding-right: 5px;" v-for="(item, index) in dianpuyu" :key="index">
									<div class="title">{{ item.name }}</div>
									<div class="value">{{ item.Number }}</div>
								</div>

							</div>
						</div>
					</div>

				</div>
				<div class="right-module">
					<div class="module-title" style="display: flex;
	justify-content: space-between;">
						<div>实时趋势
						</div>
						<div class="lookAll"><button title="查看全部">查看全部</button></div>

					</div>
					<div style="height: 10px;"></div>
					<div style="height: 440px;">
						<div class="chart-wrap">
							<div class="chart-title">在线人数
								<el-tooltip class="box-item" effect="dark"
									content='<div data-spm-anchor-id="a21aqw.livedsc.0.i1.564e7f33D1dlx3"><b>在线人数：</b>本场直播当前在线观看人数； <br> <b>活跃度：</b>本场直播当前一分钟内有过点赞、关注、评论、转发四种行为pv/当前一分钟在线观看人数uv ； <br> <b>小图：</b>小图只显示最新30分钟的趋势； <br> <b>大图：</b>大图显示全场直播数据（直播时长超出16小时的部分数据不展示哦）</div>'
									placement="bottom" raw-content>
									<img src="https://img.alicdn.com/imgextra/i4/O1CN01WKQLU81ed2ZbubuVC_!!6000000003893-55-tps-16-16.svg"
										style="position: relative; z-index: 10; margin-left: 10px; cursor: help;">
								</el-tooltip>
								<div style="height: 200px;">
									<onlinePeople></onlinePeople>
								</div>
							</div>
						</div>
						<div class="chart-wrap">
							<div class="chart-title">流量来源
								<el-tooltip class="box-item" effect="dark" content='每5分钟之内的实时成交金额趋势' placement="bottom" raw-content>
									<img src="https://img.alicdn.com/imgextra/i4/O1CN01WKQLU81ed2ZbubuVC_!!6000000003893-55-tps-16-16.svg"
										style="position: relative; z-index: 10; margin-left: 10px; cursor: help;">
								</el-tooltip>
								<div style="height: 200px;">
									<dataForm></dataForm>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script lang="ts" name="dataScreen">
import onlinePeople from "./onlinePeople.vue";
import dataForm from "./dataForm.vue";
import { dealData } from "@/mock/dataScreen/dataview.js"
import { useUserStore } from '@/store/user';
const user = useUserStore();

export default {
	components: {
		onlinePeople, dataForm
	},
	data() {
		return {
			activeName: "first",
			isActive: true,
			value2: false,
			active: "guanzong",
			pageData: {},
			liuLiangHuDong: [],
			zhuanHuaChengJiao: [],
			heardlist: [{
				name: "商品明细",
				id: "productInfo",
				width: "20%",
				prop: "productInfo",
			}, {
				name: "曝光人数",
				id: "peopleNum",
				width: "18%"
			}, {
				name: "点击次数",
				id: "clickNum",
				width: "18%"
			}, {
				name: "加购人数",
				id: "buyNum",
				width: "18%"
			}, {
				name: "成交金额",
				id: "mony",
				width: "18%"
			}],
			tableData: [
			],
			zhiBoYu: [],
			dianpuyu: []
		};
	},
	created() {
		this.pageData = dealData();
		this.liuLiangHuDong = this.pageData.liuLiangHuDong;
		this.zhuanHuaChengJiao = this.pageData.zhuanHuaChengJiao;
		this.tableData = this.pageData.tableData
		this.zhiBoYu = this.pageData.zhiBoYu;
		this.dianpuyu = this.pageData.dianpuyu
		console.log(dealData())
		setInterval(() => {
			this.pageData = dealData();
			this.liuLiangHuDong = this.pageData.liuLiangHuDong;
			this.zhuanHuaChengJiao = this.pageData.zhuanHuaChengJiao;
			this.tableData = this.pageData.tableData
			this.zhiBoYu = this.pageData.zhiBoYu;
			this.dianpuyu = this.pageData.dianpuyu
			console.log(dealData())
		}, 6000);
	},
	methods: {
		sortChange(column, prop, order) {
			console.log(column, prop, order)

		},
		dealClick(currentActive) {
			this.active = currentActive
		},
		tbaClick() {
			this.isActive = !this.isActive
		},
		changeMessage() {
			this.message = "Message changed!";
		}
	}
};
</script>
<style>
.dataScreen-container .el-table__header,
.dataScreen-container .el-scrollbar__view,
.dataScreen-container .el-table__body {
	width: 100% !important;
}

.dataScreen-container .goods-table-column {
	font-size: 15px;
	color: #fff;
}

.dataScreen-container .imageTipsLong {
	height: 50px;
	font-size: 15px;
	white-space: normal;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	flex: 1;
	color: #fff;
}

.dataScreen-container .el-table--border .el-table__inner-wrapper::after,
.dataScreen-container .el-table--border::after,
.dataScreen-container .el-table--border::before,
.dataScreen-container .el-table__inner-wrapper::before {
	display: none;
}

.dataScreen-container .goods-table .el-table th {
	background-color: #1a1a1a !important;
	font-size: 15px;
	color: #fff;

	height: 47px;
	line-height: 47px;
}

.dataScreen-container .goods-table .el-table td.el-table__cell,
.dataScreen-container .goods-table .el-table th.el-table__cell.is-leaf {
	border-bottom: none;
}

.dataScreen-container .goods-table .el-table table tr:nth-child(odd) {
	background-color: rgba(60, 60, 69, 0.5);
}

.dataScreen-container .goods-table .el-table tr {
	background-color: transparent;
}

/* 偶数行背景色 */
.dataScreen-container .goods-table .goods-table table tr:nth-child(even) {
	background-color: #1a1a1a !important;
}

.dataScreen-container .goods-table .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
	background-color: transparent;
}

.dataScreen-container .goods-table .el-table tr:hover {
	background-color: transparent;
}

.dataScreen-container .el-table__row {
	background-color: rgba(60, 60, 69, 0.5);
}

.dataScreen-container .goods-table .el-table .ascending .sort-caret.ascending {
	border-bottom-color: #ff033f;
}

.dataScreen-container .goods-table .el-table .descending .sort-caret.descending {
	border-top-color: #ff033f;
}

.dataScreen-container .goods-table .el-table th:first-child {
	border-top-left-radius: 20px;
	border: #1a1a1a !important;
}

.dataScreen-container .goods-table .el-table th:last-child {
	border-top-right-radius: 20px;
	border: #1a1a1a !important;
}

.dataScreen-container .imageContainer {
	width: 50px;
	height: 50px;
	border-radius: 6px;
	position: relative;
	overflow: hidden;
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	margin-right: 15px;
}

.dataScreen-container .imageContainer>img {
	width: 100%;
	height: 100%;
	display: inline-block;
}
</style>
<style scoped>
.dataScreen-container .tipNumImage {
	position: absolute;
	top: -5px;
	left: -1px;
	background-color: #353535;
	padding: 2px 5px;
	color: #fff;
	font-size: 12px;
	border-radius: 0 0 6px 0;
	font-family: DINAlternate-Bold;
}

.dataScreen-container .chart-title {
	font-family: PingFangSC;
	font-size: 18px;
	color: #fff;
	margin-left: 20px;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
}

.dataScreen-container .chart-wrap {
	height: 225px;
}

.dataScreen-container .lookAll {
	position: relative;
}

.dataScreen-container .card {
	margin: 15px 10px;
	background-image: -webkit-linear-gradient(113deg, rgba(59, 39, 91, .6), rgba(21, 19, 19, .6) 88%);
	background-image: linear-gradient(-23deg, rgba(59, 39, 91, .6), rgba(21, 19, 19, .6) 88%);
	border-radius: 12px;
	height: 130px;
}

.dataScreen-container .card-title {
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #fff;
	letter-spacing: 0;
	line-height: 18px;
	padding: 12px;
}

.dataScreen-container .card-content {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
}

.dataScreen-container .card-content>.field {
	width: 40%;
	padding: 6px 12px;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.dataScreen-container .card-content>.field>.title {
	font-size: 14px;
	color: #b3b3b3;
	line-height: 16px;
}

.dataScreen-container .card-content>.field>.value {
	font-family: DINAlternate-Bold;
	font-size: 18px;
	color: #fff;
	text-align: right;
	line-height: 24px;
	word-break: keep-all;
	white-space: nowrap;
	overflow: hidden;
}

.dataScreen-container .lookAll button {
	height: 28px;
	width: 86px;
	border: none;
	outline: none;
	cursor: pointer;
	background-color: #131315;
	color: #fff;
	border-radius: 10px;
	font-size: 12px;
	text-align: left;
	padding-left: 10px;
}

.dataScreen-container .lookAll button:after {
	content: "";
	position: absolute;
	z-index: 5;
	top: 8px;
	right: 9px;
	height: 12px;
	width: 13px;
	background-color: transparent;
	border: none;
	outline: none;
	background-image: url(https://img.alicdn.com/imgextra/i2/O1CN013fJn2O22S5sig1q2Q_!!6000000007118-55-tps-15-15.svg);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: contain;
	cursor: pointer;
}

.dataScreen-container .ant-spin-container {
	padding: 5px 12px;
	border-radius: 12px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 26px;
}

.dataScreen-container .ant-spin-container img {
	width: 19px;
	height: 19px;
	background: #1a1a1a;
}

.dataScreen-container .activeclass {
	background-color: #ff0040;
	;
	text-shadow: 0 0 .25px currentColor;
	color: #fff;
	border-radius: 5px;
}

.dataScreen-container .switch-item {
	width: 50px;
	height: 28px;
	font-family: Helvetica;
	font-size: 13px;
	color: #fff;
	line-height: 30px;
	text-align: center;
	cursor: pointer;
	display: inline-block;
}

.dataScreen-container .right-module {
	width: 100%;
	position: relative;
	margin: 10px 0;
	border-radius: 20px;
	overflow: hidden;
	background-color: #1a1a1a;
	border-radius: 20px;
	margin-top: 10px;
	color: #fff;
}

.dataScreen-container .right-module:first-child {
	height: 52px;
	line-height: 52px;
	box-sizing: border-box;
	background-color: #1a1a1a;
	display: flex;
	justify-content: flex-start;
}

.dataScreen-container .right-module:nth-child(2) {
	background-color: #1a1a1a;
	height: 360px;
}

.dataScreen-container .goods-table {
	font-size: 15px;
	color: #fff;
}


.dataScreen-container .el-table__header {
	width: 100%;
}

.dataScreen-container .goods-table table {
	width: 100%;
	height: 100%;
}


.dataScreen-container .middle-down {
	width: 100%;
	margin: 20px 0;
	border-radius: 20px;
	height: 500px;
	box-sizing: border-box;
	color: #a9a9a9;
	background-color: #1a1a1a;
}

.dataScreen-container .center--middle>div:first-child>div:first-child {
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #fff;
	text-align: center;
	line-height: 24px;
	margin-bottom: 15px;
}

.dataScreen-container .center--middle>div:first-child>div:last-child {
	font-size: 20px;
	color: #fff;
}

.dataScreen-container .center--middle>div:last-child>div:last-child {
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #fff;
	text-align: center;
	line-height: 24px;
	margin-bottom: 15px;
}

.dataScreen-container .firstImg {
	position: absolute;
	top: 60px;
	left: 110px;
}

.dataScreen-container .firstImg>div:first-child {
	font-size: 18px;
	color: #fff;
	text-align: center;
}

.dataScreen-container .firstImg>div:last-child {
	font-size: 42px;
	color: #fff;
}

.dataScreen-container .center--left,
.dataScreen-container .center--middle,
.dataScreen-container .center--middle {
	padding: 18px 30px;
	position: relative;
	border: 1px solid transparent;
	flex: 1;
	transition: all .35s ease-in-out;
	text-align: center;
}

.dataScreen-container .center--left {
	margin-left: -20px;
}

.dataScreen-container .center--middle {
	margin: 0 20px;
}

.dataScreen-container .centerContent {
	left: 0;
	right: 0;
	top: 155px;
	bottom: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}

.dataScreen-container .zhibotips {
	width: 100%;
	text-align: right;
	height: 40px;
	line-height: 40px;
}

.dataScreen-container .liveTips {
	display: flex;
	justify-content: space-between;
	padding: 0px 20px;
}

.dataScreen-container .duibi {
	height: 24px;
	padding: 0 7px;
	font-size: 14px;
	border-radius: 6px;
	color: #fff;
	border-color: #ff0040;
	background: #ff0040;
}

.dataScreen-container .avatarName {
	margin-left: 10px;
	font-size: 25px;
	color: #fff;
	letter-spacing: 0;
}

.dataScreen-container .center-big {
	display: flex;
	justify-content: space-between;
	padding: 13px 11px;
}

.dataScreen-container .middle-top {
	flex: 1;
	height: 430px;
}

.dataScreen-container .middle-live {
	z-index: 2;
	top: 0;
	width: 100%;
	height: 100px;
	border-radius: 20px;
	background-color: rgba(60, 60, 69, .55);
	overflow: hidden;
	margin-top: 10px;

}

.dataScreen-container .left-module-down>div {
	height: 100%;
	box-sizing: border-box;
}

.dataScreen-container .left-module-down>div .live-actions {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
}

.dataScreen-container .left-module-down>div .live-actions img {
	vertical-align: middle;
	border-style: none;
}

.dataScreen-container .live-actions .btns-group {
	margin-top: 30px;
}

.dataScreen-container .ant-btn-round {
	height: 32px;
	padding: 4px 16px;
	font-size: 14px;
	border-radius: 32px;
}

.dataScreen-container .ant-btn-primary {
	color: #fff;
	border-color: #ff0040;
	background: #ff0040;
	text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
	box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}

.dataScreen-container .live-actions .btns-group>div button:first-child {
	margin-right: 10px;
}

.dataScreen-container .ant-btn-ghost {
	color: #a9a9a9;
	border-color: #434343;
	background: transparent;
}

.dataScreen-container .live-actions-text {
	font-size: 16px;
	padding: 0 25px;
	text-align: center;
}

.dataScreen-container .core-data-content .data-item div:first-child.large {
	opacity: 1;
	font-weight: 700;
	font-family: PingFangSC-Medium;
	font-size: 17px;
	color: #fff;
}

.dataScreen-container .core-data-content .data-item div:last-child {
	font-size: 20px;
	color: #fff;
	font-family: DINAlternate-Bold;
	line-height: 22px;
}

.dataScreen-container .core-data-content .data-item div:first-child {
	opacity: .6;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #fff;
}

.dataScreen-container .core-data-content .data-item>div {
	position: relative;
	margin-left: 20px;
}

.dataScreen-container .core-data-content .data-item div:first-child.large img {
	height: 14px;
	width: 14px;
	position: absolute;
	margin-left: -20px;
	margin-top: 4px;
}

.dataScreen-container .core-data-content .data-list .data-item {
	padding: 0 20px;
	margin-top: 5px;
	margin-bottom: 5px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	box-sizing: border-box;
}

.dataScreen-container .core-data-content .data-list {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 22px;
	transition: height .3s ease-in-out;
}

.dataScreen-container .core-data-content .data-list>div {
	width: 100%;
	box-sizing: border-box;

}

.dataScreen-container .core-data-content .data-list>div>div {
	margin: 5px 0px
}

.dataScreen-container .activetba {
	left: 102px !important;
}

.dataScreen-container .ant-tabs-ink-bar {
	position: absolute;
	background: #ff0040;
	pointer-events: none;
	height: 2px;
	width: 24px !important;
	background-image: -webkit-linear-gradient(left, #f66 3%, #f33) !important;
	background-image: linear-gradient(90deg, #f66 3%, #f33) !important;
	border-radius: 2px;
	margin-left: 25px;
	top: 40px;
}

.dataScreen-container {
	width: 100%;
	background-color: #000 !important;
	overflow: scroll;
	padding: 0;
	height: 100%;
	overflow-y: scroll;
}

.dataScreen-container .header {
	height: 68px;
	margin: 0 3px;
	padding: 0 22px;
	border-bottom: 1px solid hsla(0, 0%, 100%, .25);
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	background-color: #1a1a1a;
}

.dataScreen-container .left {
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
}

.dataScreen-container .homeLogo {
	height: 30px;
	width: 230px;
	background-image: url(https://img.alicdn.com/imgextra/i2/O1CN01LjExZD1kOHbmDyfDT_!!6000000004673-55-tps-230-30.svg);
	background-position: 50%;
	background-size: cover;
	margin-top: 20px;
}

.dataScreen-container .screen-switch {
	position: relative;
	z-index: 9;
}

.dataScreen-container .entry {
	position: relative;
	width: 60px;
	margin-left: 10px;
	padding-left: 7px;
	background: #212126;
	border-radius: 6px;
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #bfbfbf;
	border: 0;
	text-align: start;
	cursor: pointer;
	margin-top: 30px;
}

.dataScreen-container .entry:after {
	content: "";
	position: absolute;
	top: 3px;
	right: 3px;
	height: 14px;
	width: 12px;
	opacity: .7;
	background-image: url(https://gw.alicdn.com/imgextra/i3/O1CN01Q0foNE1jjyl2YgNUL_!!6000000004585-55-tps-10-6.svg);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: contain;
	transform: rotate(-90deg) scale(.7);
}

.dataScreen-container .right {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	flex-wrap: nowrap;
}

.dataScreen-container .right img {
	width: 30px;
	height: 30px;
	border-radius: 15px;
	margin-right: 10px;
	vertical-align: middle;
	border-style: none;
	box-sizing: border-box;
}

.dataScreen-container .right span {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #bfbfbf;
	white-space: nowrap;
	word-break: keep-all;
}

.dataScreen-container .main {
	height: calc(100% - 50px);
	position: relative;
	z-index: 1;
	-webkit-box-align: start;
	-webkit-align-items: flex-start;
	-ms-flex-align: start;
	align-items: flex-start;
	padding-top: 5px;
	padding-left: 10px;
	padding-right: 10px;
	display: flex;
	justify-content: space-between;
}

.dataScreen-container .home-left,
.dataScreen-container .home-right {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 370px;
}

.dataScreen-container .home-middle {
	flex: 1;
	margin: 0 20px;
	min-width: 0;
	height: 100%;
	color: #a9a9a9;
}

.dataScreen-container .left-module-up,
.dataScreen-container .left-module-down {
	width: 100%;
	margin: 10px 0;
	border-radius: 20px;
	min-height: 430px;
	color: #a9a9a9;
	background-color: #1a1a1a;
}

.dataScreen-container .left-module-down {
	min-height: 500px;
}

.dataScreen-container .left-module-up:before {
	content: "";
	background-color: rgba(60, 60, 69, .55);
}

.dataScreen-container .module-title {
	font-family: PingFangSC-Semibold;
	font-size: 20px;
	color: #fff;
	padding: 10px 20px;
	background-color: #2f2f36;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
}

.dataScreen-container .core-data-tab {
	margin: 5px auto 0;
	width: 200px;
	user-select: none;
}

.dataScreen-container .ant-tabs {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color: #a9a9a9;
	font-size: 14px;
	font-variant: tabular-nums;
	line-height: 1.5715;
	list-style: none;
	font-feature-settings: tnum, "tnum";
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	overflow: hidden;
}

.dataScreen-container .ant-tabs-nav {
	position: relative;
	display: flex;
	flex: none;
	align-items: center;
}

.dataScreen-container .tab-item {
	position: relative;
	display: inline-flex;
	align-items: center;
	padding: 12px 0;
	font-size: 14px;
	background: transparent;
	border: 0;
	outline: none;
	cursor: pointer;
	font-family: PingFangSC-Medium;
	font-size: 18px;
}


.dataScreen-container .tab-item:first-child {
	margin-right: 30px;
}

.dataScreen-container .active {
	color: #ff0040;
	text-shadow: 0 0 .25px currentColor;
}
</style>