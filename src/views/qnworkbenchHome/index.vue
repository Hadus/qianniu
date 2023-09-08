<template>
	<div class="container">
		<div class="left">
			<div class="banner-wrapper">
				<div>
					<p class="num">{{ mock_home.left_banner.fukuan }}</p>
					<p class="desc">待付款</p>
				</div>
				<div>
					<p class="num">{{ mock_home.left_banner.fahuo }}</p>
					<p class="desc">待发货</p>
				</div>
				<div>
					<p class="num">{{ mock_home.left_banner.shouhou }}</p>
					<p class="desc">待售后</p>
				</div>
				<div>
					<p class="num">{{ mock_home.left_banner.pingjia }}</p>
					<p class="desc">待评价</p>
				</div>
				<div>
					<p class="num">{{ mock_home.left_banner.tousu }}</p>
					<p class="desc">待处理投诉</p>
				</div>
				<div>
					<p class="num">{{ mock_home.left_banner.weigui }}</p>
					<p class="desc">违规</p>
				</div>
				<img class="img-1"
					src="https://gw.alicdn.com/imgextra/i1/O1CN01TtgwcH1EAwLuNdLsx_!!6000000000312-2-tps-386-130.png" alt=""
					style="width: 192px; top: 0px; left: 0px;">
				<img class="img-2"
					src="https://gw.alicdn.com/imgextra/i2/O1CN01XaAdTL1UvgdAPGOwu_!!6000000002580-2-tps-120-80.png" alt=""
					style="bottom: 0px; right: 0px; width: 120px;">
			</div>
			<div class="needDo-wrapper">
				<span>待处理</span>
				<div class="h-right">
					<span>暂无待处理任务，查看全部</span>
					<el-icon :size="14">
						<ArrowRight />
					</el-icon>
				</div>
			</div>
			<div class="shopData-wrapper">
				<h3>
					<span>店铺数据</span>
					<span class="date">数据更新时间：2023-08-30 20:06:20</span>
					<div class="h-right">
						<span class="icon-wrapper">
							<el-icon>
								<Plus />
							</el-icon>
						</span>
						<span>指标</span>
						<el-icon :size="14">
							<ArrowRight />
						</el-icon>
					</div>
				</h3>
				<div class="info">
					<template v-for="(item, index) in shopDataItemList">
						<v-shop-data-item class="shop-data-item" :index="index" :item="item"
							:class="(index + 1) % 4 == 0 ? 'isright' : ''" />
					</template>
				</div>
			</div>
			<div class="advise-wrapper">
				<h3>
					<span>经营建议</span>
					<span class="desc">根据店铺不同环节表现，提供适合本店发展的相关建议，建议了解并评估，提高效率。</span>
				</h3>
				<div class="info">
					<div class="process">
						<v-process :dataList="processList" :active="0" />
					</div>
					<div class="status">
						<h3>
							<span>店铺基础状态识别</span>
							<span class="desc">请关注店铺该环节变化，如有相关平台推荐建议，请精准优化。</span>
						</h3>
						<div class="info">
							<div class="info-1">
								<p class="p-1">
									店铺质量分<span>{{ mock_home.shop_advise.quality }}</span>分，<span>优于{{
										mock_home.shop_advise.per }}%</span>同行水平
								</p>
								<p class="p-2">质量分越高，越有机会获得搜索和免费推荐流量</p>
								<p class="p-3">推荐建议</p>
								<p class="p-4">商品整体质量一般，请尽快诊断优化</p>
								<p class="p-5">
									<span class="green">重要通知</span>
									<span>掌柜须知</span>
								</p>
								<p class="p-6">去优化</p>
							</div>
							<div class="info-2 hidden">2</div>
							<div class="info-3 hidden">3</div>
						</div>
					</div>
				</div>
			</div>
			<div class="app-wrapper">
				<h3>
					<span>我的应用</span>
					<span class="desc">
						<svg width="12px" color="white" height="12px" viewBox="0 0 12 12" version="1.1"
							xmlns="http://www.w3.org/2000/svg">
							<g id="工作台各状态" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="工作台" transform="translate(-1131.000000, -473.000000)" fill="#000000" fill-rule="nonzero">
									<g id="Group-41" transform="translate(1028.000000, 469.000000)">
										<g id="Group-14" transform="translate(103.000000, 1.000000)">
											<g id="Icon-info_circle" transform="translate(0.000000, 3.000000)">
												<path
													d="M6,11.8333333 C9.21666667,11.8333333 11.8333333,9.21666667 11.8333333,6 C11.8333333,2.78333333 9.21666667,0.166666667 6,0.166666667 C2.78333333,0.166666667 0.166666667,2.78333333 0.166666667,6 C0.166666667,9.21666667 2.78333333,11.8333333 6,11.8333333 Z M6,10.9963889 C3.245,10.9963889 1.00388889,8.755 1.00388889,6 C1.00388889,3.24555556 3.245,1.00388889 6,1.00388889 C8.75444444,1.00388889 10.9961111,3.24555556 10.9961111,6 C10.9961111,8.755 8.75444444,10.9961111 6,10.9961111 L6,10.9963889 Z M6,3.35638889 C6.34517797,3.35638889 6.625,3.07656686 6.625,2.73138889 C6.625,2.38621092 6.34517797,2.10638889 6,2.10638889 C5.65482203,2.10638889 5.375,2.38621092 5.375,2.73138889 C5.375,3.07656686 5.65482203,3.35638889 6,3.35638889 Z M6,9.61111111 C6.23011865,9.61111111 6.41666667,9.42456309 6.41666667,9.19444444 L6.41666667,4.75 C6.41666667,4.51988135 6.23011865,4.33333333 6,4.33333333 C5.76988135,4.33333333 5.58333333,4.51988135 5.58333333,4.75 L5.58333333,9.19444444 C5.58333333,9.42456309 5.76988135,9.61111111 6,9.61111111 Z"
													id="Shape"></path>
											</g>
										</g>
									</g>
								</g>
							</g>
						</svg>
						需下载千牛客户端使用</span>
					<div class="h-right">
						<el-icon :size="14">
							<ArrowRight />
						</el-icon>
					</div>
				</h3>
				<div class="info">
					<div class="info-1">
						<p>
							<img src="https://img.alicdn.com/bao/uploaded/i1/TB1whUoKFXXXXaAXpXXXXXXXXXX-240-240.png" />
						</p>
						<p>
							<span>服务市场</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="info-wapper">
				<h3>
					<span>惠水琥珀蜜蜡</span>
					<div class="h-right">
						<i>
							<img src="https://gw.alicdn.com/imgextra/i1/O1CN01ZijcyM1ZdtJmxinmq_!!6000000003218-2-tps-36-36.png" alt="">
						</i>
						<i>
							<img src="https://gw.alicdn.com/imgextra/i4/O1CN01376Uha1buUucoyQWf_!!6000000003525-2-tps-42-28.png" alt="">
						</i>
					</div>
				</h3>
				<div class="info">
					<div class="type-1 info-1">
						<p class="top">描述</p>
						<p class="bot">{{ mock_home.right_info.desc }}
							<svg width="7" height="8" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M.787 6.173L2.993 1.05a.5.5 0 0 1 .916-.006l2.283 5.138a.678.678 0 0 1-.942.872l-1.274-.69a1 1 0 0 0-.952 0l-1.274.69a.69.69 0 0 1-.963-.881z"
									fill="#FF585E" fill-rule="evenodd"></path>
							</svg>
						</p>
					</div>
					<div class="type-1 info-2">
						<p class="top">服务</p>
						<p class="bot">{{ mock_home.right_info.server }}
							<svg width="7" height="8" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M.787 6.173L2.993 1.05a.5.5 0 0 1 .916-.006l2.283 5.138a.678.678 0 0 1-.942.872l-1.274-.69a1 1 0 0 0-.952 0l-1.274.69a.69.69 0 0 1-.963-.881z"
									fill="#FF585E" fill-rule="evenodd"></path>
							</svg>
						</p>
					</div>
					<div class="type-1 info-3">
						<p class="top">物流</p>
						<p class="bot">{{ mock_home.right_info.wuliu }}
							<svg width="7" height="8" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M.787 6.173L2.993 1.05a.5.5 0 0 1 .916-.006l2.283 5.138a.678.678 0 0 1-.942.872l-1.274-.69a1 1 0 0 0-.952 0l-1.274.69a.69.69 0 0 1-.963-.881z"
									fill="#FF585E" fill-rule="evenodd"></path>
							</svg>
						</p>
					</div>
					<div class="info-4">
						<p class="top">信用等级</p>
						<p class="bot">
							<img src="//gtms03.alicdn.com/tps/i3/TB1c9z_HpXXXXcQXpXXCBGNFFXX-24-24.png" alt="" width="14" height="14">
						</p>
					</div>
					<div class="type-2 info-5">
						<p class="top">店铺成长等级</p>
						<p class="bot">Lv.{{ mock_home.right_info.level }}</p>
					</div>
					<div class="type-2 info-6">
						<p class="top">综合体验分</p>
						<p class="bot">{{ mock_home.right_info.tiyanfen }}</p>
					</div>
					<div class="type-2 info-7">
						<p class="top">店铺保证金</p>
						<p class="bot">已足额缴纳</p>
					</div>
				</div>
			</div>
			<div class="follow-wapper">
				<h3>
					<span>首页关注运营</span>
					<div class="h-right">
						<el-icon :size="18">
							<ArrowRight />
						</el-icon>
					</div>
				</h3>
				<div class="info">
					<p class="info-1">最近有 <i>{{ mock_home.follow.fans }}</i> 个活跃店铺粉丝，正在期待您发布优质内容</p>
					<div class="info-2">
						<div>
							<img src="http://img.alicdn.com/sns_logo/i2/0/TB2U_Grj3vD8KJjSsplXXaIEFXa_!!0-mytaobao.jpg">
							<br />
							<span>婆娑月光</span>
						</div>
						<div>
							<div>
								<img src="http://img.alicdn.com/sns_logo/i2/0/TB2U_Grj3vD8KJjSsplXXaIEFXa_!!0-mytaobao.jpg">
								<br />
								<span>婆娑月光</span>
							</div>
						</div>
						<div>
							<div>
								<img src="http://img.alicdn.com/sns_logo/i2/0/TB2U_Grj3vD8KJjSsplXXaIEFXa_!!0-mytaobao.jpg">
								<br />
								<span>婆娑月光</span>
							</div>
						</div>
						<div class="post">
							<p>
								<img src="https://img.alicdn.com/imgextra/i1/O1CN01mE6jYR1JqECDVyG3l_!!6000000001079-2-tps-28-28.png">
								<span>去发布</span>
							</p>
						</div>
					</div>
					<p class="info-3">
						<i class="homeFonts1-help"></i>
						<span class="type-1">常见问题</span>
						<span class="type-2">关注运营升级新手速览</span>
					</p>
				</div>
			</div>
			<div class="news-wrapper">
				<h3>
					<span>千牛头条</span>
					<div class="h-right">
						<el-icon :size="18">
							<ArrowRight />
						</el-icon>
					</div>
				</h3>
				<div class="info">
					<div class="slider">
						<el-carousel :interval="5000" arrow="always" height="100px">
							<el-carousel-item v-for="item in sliderImgs" :key="item">
								<el-image style="width: 100%; height: 100%" :src="item" fit="cover" />
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="news">
						<ul>
							<li><span class="type">短视频</span><span class="txt">收纳礼品：新赛道层出不穷，超500个类目爆发</span></li>
							<li><span class="type">短视频</span><span class="txt">「引力魔方提效」如何屏蔽优质资源位的流量</span></li>
							<li><span class="type">咨询</span><span class="txt">店铺转化想翻倍？教你两步圈住精准用户 ！</span></li>
							<li><span class="type">咨询</span><span class="txt">2022淘宝珠宝饰品文玩双12招商帖！</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="date-wrapper">
				<h3>
					<span>商家日历</span>
					<div class="h-right">
						<p class="today">今日</p>
						<p class="icon">
							<el-icon :size="12">
								<ArrowLeft />
							</el-icon>
						</p>
						<p class="icon">
							<el-icon :size="12">
								<ArrowRight />
							</el-icon>
						</p>
						<p class="month">
							{{ getDateString({ text: true, type: "YM" }) }}
						</p>
					</div>
				</h3>
			</div>
			<div class="ad-wrapper">
				<a class="Banner_bannerImg__RUSAO" target="_blank"
					href="https://qn.taobao.com/headline/video/10702006?spm=a211vu.12026430.0.0.76053929pTJHN5"
					style="height: 108px; background-image: url(&quot;https://qnworkbench.alibaba.com/workbench/oss_4fb67559-4de1-456b-9432-6b22187e2eae.png&quot;);"></a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="qnworkbenchHome">
import vShopDataItem from './shopDataItem.vue';
import vProcess from './process.vue';
// data
import mock_home from '@/mock/current/home';
import { getDateString } from '@/utils/utils';
const shopDataItemList = [
	{ desc: '支付金额', num: mock_home.shop_data.zhifu, stat: mock_home.shop_data.zhifu_prev },
	{ desc: '访客数', num: mock_home.shop_data.fangke, stat: mock_home.shop_data.fangke_prev },
	{ desc: '支付子订单数', num: mock_home.shop_data.zhidingdan, stat: mock_home.shop_data.zhidingdan_perv },
	{ desc: '支付转化率', num: mock_home.shop_data.zhuanhualv, stat: mock_home.shop_data.zhuanhualv_perv, type: 'per' },
	{ desc: '浏览量', num: mock_home.shop_data.liulaniang, stat: mock_home.shop_data.liulaniang_perv },
	{ desc: '加购人数', num: mock_home.shop_data.jiagou, stat: mock_home.shop_data.jiagou_perv },
	{ desc: '客单价', num: mock_home.shop_data.kedan, stat: mock_home.shop_data.kedan_perv },
	{ desc: '支付买家数', num: mock_home.shop_data.maijiashu, stat: mock_home.shop_data.maijiashu_perv },
];
const processList = [
	{ desc: '店铺基础', num: 0 },
	{ desc: '选品与筹备', num: 0 },
	{ desc: '测款与优化', num: 0 },
	{ desc: '成交加速', num: 0 },
	{ desc: '商品保障', num: 0 },
];

const sliderImgs = [
	'https://qnworkbench.alibaba.com/workbench/oss_c4f6f9d4-0c6d-4f33-8dca-8417bb05d32c.png',
	'https://qnworkbench.alibaba.com/workbench/oss_630dffba-968c-4315-8d30-701c5eb520ba.png',
	'https://qnworkbench.alibaba.com/workbench/oss_65beb7f3-98bf-4351-b782-b55552051c48.jpg',
	'https://qnworkbench.alibaba.com/workbench/oss_9bc6e869-a3bc-4da6-9118-0c7e32a147ab.png',
];
</script>

<style scoped>
.container {
	position: relative;
}

.left {
	width: 100%;
	padding-right: 407px;
}

div.banner-wrapper {
	width: 100%;
	height: 96px;
	margin-bottom: 40px;
	border-radius: 16px;
	background-color: #3977f3;
	display: flex;
	position: relative;
	cursor: pointer;
}

div.banner-wrapper img {
	position: absolute;
	z-index: 1;
	object-fit: contain;
}

.banner-wrapper>div {
	flex: 1;
	text-align: center;
	color: #fff;
	font-family: PingFang SC, Microsoft YaHei, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial !important;
	transition: all .2s ease-out;
	position: relative;
	z-index: 2;
	border-radius: 16px;
}

.banner-wrapper>div:hover {
	background-color: #2f6eeb;
}


.banner-wrapper>div .num {
	height: 60px;
	line-height: 80px;
	font-size: 30px;
}

.banner-wrapper>div .desc {
	font-size: 14px;
	opacity: .6;
}

.needDo-wrapper {
	font-size: 18px;
	height: 50px;
	line-height: 50px;
	color: #333;
	font-weight: normal;
	margin-bottom: 16px;
}


.needDo-wrapper .h-right {
	float: right;
}

.needDo-wrapper .h-right span {
	color: hsla(0, 0%, 40%, .5019607843);
	font-size: 14px;
	margin-right: 10px;
}

.needDo-wrapper .h-right i {
	position: relative;
	top: 2px;
}

.shopData-wrapper {
	margin-bottom: 30px;
}

.shopData-wrapper h3 {
	font-size: 18px;
	color: #333;
	line-height: 24px;
	font-weight: normal;
	margin-bottom: 16px;
}

.shopData-wrapper h3 span.date {
	color: #999;
	font-size: 12px;
	margin-left: 15px;
}

.shopData-wrapper h3 .h-right {
	float: right;
}

.shopData-wrapper h3 .h-right i {
	position: relative;
	top: 2px;
}

.shopData-wrapper h3 .h-right span {
	color: hsla(0, 0%, 40%);
	font-size: 14px;
	margin-right: 10px;
	margin-left: 5px;
}

.shopData-wrapper h3 .h-right span.icon-wrapper {
	color: #999;
	font-size: 12px;
	border: 1px solid #999;
	display: inline-block;
	padding: 0 2px 2px 1px;
	text-align: center;
	border-radius: 5px;
	line-height: 12px;
	margin-right: 3px;
	position: relative;
	top: -1px;
}

.shopData-wrapper h3 .h-right span.icon-wrapper i {
	font-weight: 900;
}

.shopData-wrapper>.info {}

.shopData-wrapper>.info .shop-data-item {
	display: inline-block;
	width: 24%;
	margin-right: 15px;
}

.shopData-wrapper>.info .shop-data-item.isright {
	margin-right: 0px;
}

.advise-wrapper {
	margin-bottom: 30px;
}

.advise-wrapper h3 {
	font-size: 18px;
	color: #333;
	line-height: 24px;
	font-weight: normal;
	margin-bottom: 16px;
}

.advise-wrapper h3>span.desc {
	color: #999;
	font-size: 12px;
	margin-left: 15px;
}

.advise-wrapper>.info {}

.advise-wrapper>.info .process {
	height: 90px;
	padding: 24px 0;
}

.advise-wrapper>.info .status {
	height: 285px;
	background-color: #f5f9ff;
	padding: 24px;
	border-radius: 12px;

}

.advise-wrapper>.info .status>.info {
	width: 100%;
	height: 183px;
	display: flex;
	justify-content: space-around;
}

.advise-wrapper>.info .status>.info div {
	background-color: #fff;
	flex: 1;
	/* width: 32.1%; */
	height: 100%;
	border-radius: 12px;
	padding: 18px;
	min-width: 190px;
	font-family: PingFang SC, Microsoft YaHei, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial !important;
}

.advise-wrapper>.info .status>.info .info-1 {
	position: relative;
}

.advise-wrapper>.info .status>.info .info-1>p {
	line-height: 30px;
}

.advise-wrapper>.info .status>.info .info-1>p.p-1 {
	color: #111;
	font-size: 14px;
	font-weight: 900;
}

.advise-wrapper>.info .status>.info .info-1>p.p-1 span {
	font-size: 16px;
	color: #3e7fff;
}

.advise-wrapper>.info .status>.info .info-1>p.p-2 {
	color: #4d4d4d;
	font-size: 12px;
}

.advise-wrapper>.info .status>.info .info-1>p.p-3 {
	color: #4d4d4d;
	font-size: 12px;
}

.advise-wrapper>.info .status>.info .info-1>p.p-4 {
	color: #333;
	font-weight: 500;
	font-size: 14px;
}

.advise-wrapper>.info .status>.info .info-1>p.p-5 span {
	width: 54px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	font-size: 12px;
	display: inline-block;
	border-radius: 3px;
	color: rgb(144, 159, 188);
	background-color: rgb(239, 244, 255);
}

.advise-wrapper>.info .status>.info .info-1>p.p-5 span+span {
	margin-left: 8px;
}

.advise-wrapper>.info .status>.info .info-1>p.p-5 span.green {
	color: rgb(2, 171, 203);
	background-color: rgb(229, 251, 254);
}

.advise-wrapper>.info .status>.info .info-1>p.p-6 {
	position: absolute;
	right: 25px;
	bottom: 15px;
}

.advise-wrapper>.info .status>.info .info-1>p.p-6 {
	width: 80px;
	height: 30px;
	border-radius: 16px;
	color: #3d7fff;
	font-size: 14px;
	font-weight: 500;
	background-color: rgba(61, 127, 255, .06);
	text-align: center;
	line-height: 30px;
	cursor: pointer;
	border: 1px solid rgba(61, 127, 255, .06);
}

.advise-wrapper>.info .status>.info .info-1>p.p-6:hover {
	border-color: #3d7fff;
}

.advise-wrapper>.info .status>.info div.hidden {
	visibility: hidden;
}

.app-wrapper {}

.app-wrapper h3 {
	font-size: 18px;
	color: #333;
	line-height: 24px;
	font-weight: normal;
	margin-bottom: 16px;
}

.app-wrapper h3>span.desc {
	font-size: 12px;
	margin-left: 15px;
	opacity: .5;
}

.app-wrapper .h-right {
	float: right;
}

.app-wrapper>.info {
	padding: 15px 0px;
}

.app-wrapper>.info div {
	cursor: pointer;
	width: 48px;
	height: 75px;
}

.app-wrapper>.info p {
	text-align: center;
	color: #666;
	font-size: 12px;
}

.app-wrapper>.info img {
	width: 45px;
	height: 45px;
	border-radius: 17px;
	object-fit: contain;
}

.app-wrapper>.info {}

/* right */
.right {
	width: 357px;
	position: absolute;
	right: 0;
	top: 0;
}

.right>div {
	min-height: 100px;
	margin-bottom: 17px;
	border-radius: 10px;
}

.right>.info-wapper {
	padding: 22px 18px 18px;
	background: #f1f6ff;
}

.info-wapper h3 {
	line-height: 54px;
	margin-bottom: 12px;
}

.info-wapper h3>span {
	color: #111;
	font-weight: 500;
	font-size: 22px;
}

.info-wapper h3>.h-right {
	float: right;
}

.info-wapper h3>.h-right i {
	display: inline-block;
	width: 30px;
	height: 30px;
	background-color: #fff;
	border: 1px solid #e6e9ed;
	border-radius: 50%;
	cursor: pointer;
	text-align: center;
	padding: 0;
	line-height: 30px;
}

.info-wapper h3>.h-right i>img {
	width: 16px;
	height: 15px;
}

.info-wapper h3>.h-right i:last-child>img {
	width: 19px;
	height: 13px;
}

.info-wapper h3>.h-right i+i {
	margin-left: 18px;
}

.info-wapper .info {
	min-height: 50px;
	height: auto;
	background-color: #fff;
	border-radius: 10px;
	padding: 27px;
	padding-bottom: 0;
}

.info-wapper .info>div {
	display: inline-block;
	margin-left: 1px;
	margin-bottom: 3px;
	text-align: center;
	height: 62px;
	vertical-align: bottom;
}

.info-wapper .info>div.type-1 {
	width: 61px;
}

.info-wapper .info>div.info-4 {
	width: 75px;
}

.info-wapper .info>div.type-2 {
	width: 87px;
}

.info-wapper .info>div p.top {
	font-size: 12px;
	color: rgba(51, 51, 51, .6);
	margin-bottom: 9px;
}

.info-wapper .info>div p.bot {
	font-weight: 500;
	font-size: 15px;
	color: rgba(17, 17, 17, .9);
}

.info-wapper .info>div.type-1 p.bot {
	/* font-size: 14px; */
}

.info-wapper .info>div.type-2 p.bot {
	vertical-align: auto;
	font-size: 13px;
	color: rgba(17, 17, 17, .8);

}

.info-wapper .info>div.info-7 p.bot {
	color: #31cc98;
	font-size: 12px;
	padding-top: 1px;
}

.right>.follow-wapper {}

.follow-wapper h3 {
	font-size: 18px;
	color: #333;
	line-height: 24px;
	font-weight: normal;
	margin-bottom: 16px;
}

.follow-wapper h3 .h-right {
	float: right;
}

.follow-wapper>.info {
	font-size: 16px;
	color: #111;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border-radius: 24px;
	background: #f7f8fa;
	padding: 18px 12px 19px;
}

.follow-wapper>.info .info-1 {
	margin-bottom: 15px;
}

.follow-wapper>.info .info-1>i {
	color: #3c5eff;
	font-weight: 500;
	font-style: normal;
}

.follow-wapper>.info .info-2 {
	height: 60px;
	display: flex;
	margin-bottom: 13px;
}

.follow-wapper>.info .info-2 div {
	flex: 1;
	margin-right: 1px;
	text-align: center;
}

.follow-wapper>.info .info-2 img {
	width: 36px;
	height: 36px;
	border-radius: 50%;
}

.follow-wapper>.info .info-2 span {
	width: 48px;
	height: 12px;
	opacity: 1;
	font-family: Source Han Sans CN;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0;
	color: #3d3d3d;
}

.follow-wapper>.info .info-2 .post {
	flex: 1.5;
	padding: 13px 0 0 10px;
}

.follow-wapper>.info .info-2 .post>p {
	border-radius: 20px;
	width: 72px;
	height: 30px;
	background-color: #3d5eff;

}

.follow-wapper>.info .info-2 .post img {
	width: 14px;
	height: 14px;
	vertical-align: middle;
}

.follow-wapper>.info .info-2 .post span {
	color: #fff;
	font-family: PingFang SC;
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	line-height: 30px;
}

.follow-wapper>.info .info-3 {
	font-size: 12px;
}

.follow-wapper>.info .info-3 .type-1 {
	padding-left: 3px;
	margin-right: 15px;
	vertical-align: top;
}

.follow-wapper>.info .info-3 .type-2 {
	color: #5584ff;
	vertical-align: top;
}

.news-wrapper h3 {
	font-size: 18px;
	color: #333;
	line-height: 24px;
	font-weight: normal;
	margin-bottom: 16px;
}

.news-wrapper h3 .h-right {
	float: right;
}

.news-wrapper>.info .slider {
	height: 108px;
	margin-bottom: 10px;
}

.news-wrapper>.info .slider>.el-carousel {
	border-radius: 12px;
	overflow: hidden;
}

.news-wrapper>.info .news {
	font-size: 14px;
	color: #111;
}

.news-wrapper>.info .news li {
	line-height: 30px;
}

.news-wrapper>.info .news .type {
	margin-right: 6px;
	padding: 3px;
	border-radius: 3px;
	background-color: rgba(2, 171, 203, .06);
	color: #02abcb;
	text-align: center;
	font-size: 12px;
}

.date-wrapper h3 {
	font-size: 18px;
	color: #333;
	line-height: 24px;
	font-weight: normal;
	margin-bottom: 16px;
}

.date-wrapper h3 .h-right {
	float: right;
	font-family: PingFang SC, Microsoft YaHei, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial !important;
	font-size: 12px;
}

.date-wrapper h3 .h-right>p {
	display: inline-block;
	margin-right: 8px;
	height: 24px;
	text-align: center;
}

.date-wrapper h3 .h-right>p.today {
	background-color: #f7f8fa;
	border-radius: 12px;
	width: 48px;
}

.date-wrapper h3 .h-right>p.icon i {
	position: relative;
	top: 2px;
}

.date-wrapper h3 .h-right>p.month {
	margin-left: 5px;
}

.ad-wrapper a {
	display: block;
	width: 100%;
	border-radius: 12px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: cover;
}
</style>
