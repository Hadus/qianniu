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
				<p class="key">待发货单量</p>
				<p class="value">1</p>
			</div>
			<div class="item">
				<p class="key">发货即将超时单量</p>
				<p class="value">0</p>
			</div>
		</div>
		<div class="info-wrapper">
			<el-tabs v-model="activeName" class="tabs-order tabs-order-all">
				<el-tab-pane label="有效证照" name="first">
					<div class="card-type-warpper">
						<div class="title block-wrapper">
							营业执照
						</div>
						<div class="cards">
							<div class="card block-wrapper">
								<div class="top">
									<div class="wrapper-left">
										<img
											src="https://img.alicdn.com/imgextra/i3/O1CN01421ct423WVKYFBZYo_!!6000000007263-2-tps-108-126.png">
									</div>
									<div class="wrapper-right">
										<p class="head">《营业执照》</p>
										<p><span class="key">公司名称：</span><span class="value">勉县辉洁菁百货店</span></p>
										<p><span class="key">有效期截止日期：</span><span class="value">长期</span></p>
									</div>
								</div>
								<div class="bot">
									<p class="look" @click="handleClickCard">查看详情</p>
									<p class="btn">
										<v-btn-empty>下 载</v-btn-empty>
										<v-btn-empty>更 新</v-btn-empty>
									</p>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="审核中证照" name="second">
					暂无
				</el-tab-pane>
			</el-tabs>
			<el-tabs v-model="activeName" class="tabs-order tabs-order-details">
				<el-tab-pane label="有效证照" name="first">
					<div class="card-type-warpper">
						<div class="title block-wrapper">
							营业执照
						</div>
						<div class="cards">
							<div class="card block-wrapper">
								<div class="top">
									<div class="wrapper-left">
										<img
											src="https://img.alicdn.com/imgextra/i3/O1CN01421ct423WVKYFBZYo_!!6000000007263-2-tps-108-126.png">
									</div>
									<div class="wrapper-right">
										<p class="head">《营业执照》</p>
										<p><span class="key">公司名称：</span><span class="value">勉县辉洁菁百货店</span></p>
										<p><span class="key">有效期截止日期：</span><span class="value">长期</span></p>
									</div>
								</div>
								<div class="bot">
									<p class="look" @click="handleClickOrder">查看详情</p>
									<p class="btn">
										<v-btn-empty>下 载</v-btn-empty>
										<v-btn-empty>更 新</v-btn-empty>
									</p>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="审核中证照" name="second">
					暂无
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup lang="ts" name="sold">
import { useRouter } from 'vue-router';
const $router = useRouter();
import vBtnEmpty from '@/components/BtnEmpty/index.vue';

// const { item } = defineProps({
//   item: Object,
//   test: {
//     type: String,
//     default: '1'
//   }
// })
const activeName = 'first';
const handleClickOrder = function () {
	$router.push('/trade-platform/tp/orderDetail');
}
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
	width: 144px;
	height: 100%;
}

.unusual-order>div p {
	display: inline-block;
}

.info-wrapper {
	position: relative;
}

.info-wrapper .card-type-warpper {
	width: 100%;
}

.info-wrapper .card-type-warpper>.title {
	width: 100%;
	height: 42px;
	background-color: #f2f5fc;
	line-height: 42px;
	padding: 0;
	padding-left: 12px;
	color: #111;
	font-family: PingFangSC-Semibold;
	font-size: 14px;
}

.info-wrapper .card-type-warpper .cards {
	width: 100%;
	height: auto;
}

.info-wrapper .card-type-warpper .card {
	background-color: #fff;
	width: 387px;
	height: 188px;
	border: 1px solid #cdd2d8;
	padding: 30px 10px 0px 26px;
	transition: .5s;
}

.info-wrapper .card-type-warpper .card:hover {
	border: 1px solid #3d7fff;
	box-shadow: 0 0 0 3px #e0ebff;
}

.info-wrapper .card-type-warpper .card .top {
	display: flex;
	border-bottom: 1px solid #e6e9ed;
	padding-bottom: 36px;
}

.info-wrapper .card-type-warpper .card .wrapper-left {
	width: 36px;
	height: 42px;
	margin-right: 12px;
}

.info-wrapper .card-type-warpper .card .wrapper-left img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
}

.info-wrapper .card-type-warpper .card .wrapper-right {
	height: auto;
}

.info-wrapper .card-type-warpper .card .wrapper-right p {
	font-size: 12px;
	letter-spacing: 0;
	line-height: 20px;
	color: #999;
	font-family: PingFangSC-Regular;
}

.info-wrapper .card-type-warpper .card .wrapper-right p.head {
	color: #111;
	font-family: PingFangSC-Medium;
	font-size: 16px;
	letter-spacing: 0;
	line-height: 22px;
	margin-bottom: 12px
}

.info-wrapper .card-type-warpper .card .wrapper-right p>span.value {
	color: #111;
}


.info-wrapper .card-type-warpper .card .bot {
	height: 46px;
	line-height: 46px;
}

.info-wrapper .card-type-warpper .card .bot .look {
	float: left;
	color: #4178ff;
	font-family: PingFangSC-Regular;
	font-size: 12px;
	letter-spacing: 0;
	padding-left: 50px;
	cursor: pointer;
}

.info-wrapper .card-type-warpper .card .bot .btn {
	float: right;
}

.info-wrapper .card-type-warpper .card .bot .btn>p {
	width: 60px;
	height: 30px;
	background-color: #ebf3ff;
	display: inline-block;
	cursor: pointer;
}

.info-wrapper .card-type-warpper .card .bot .btn>p+p {
	margin-left: 8px;
}
</style>
<style>
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
</style>


