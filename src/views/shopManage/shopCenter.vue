<template>
	<div class="container">
		<div class="left">
			<div class="block-wrapper introduce-wrapper">
				<div class="wrapper-left">
					<img src="https://img.alicdn.com/imgextra/i2/1115350887/O1CN01B2LRQR1IQIBDVMEob_!!1115350887-0-shopmanager.jpg">
				</div>
				<div class="wrapper-right">
					<v-h3-block :hasArrow="false">
						<template #default>惠水琥珀蜜蜡</template>
						<template #left>
							<span class="year">8年老店</span>
						</template>
						<template #right>
							<v-btn-empty imgSrc="//img.alicdn.com/imgextra/i1/O1CN01jkApnt1oddLPdWsQl_!!6000000005248-2-tps-24-24.png">
								修改信息
							</v-btn-empty>
						</template>
					</v-h3-block>
					<div class="info">
						<p><span class="key">淘宝账号名:</span><span class="value">晶玺一品</span></p>
						<p><span class="key">绑定支付宝:</span><span class="value">177******51</span></p>
						<p><span class="key">首次开店时间:</span><span class="value">2013.01.09 (已开店 2974 天）</span></p>
						<p><span class="key">联系地址:</span><span class="value">江苏省连云港市东海县牛山街道天光墟玉器广场</span></p>
						<p><span class="key">店铺类型:</span><span class="value">个人</span></p>
						<p>
							<span class="key">店铺ID:</span><span class="value">101883495</span>
							<el-icon :size="12">
								<Edit />
							</el-icon>
						</p>
					</div>
				</div>
			</div>
			<div class="block-wrapper confirm-wrapper">
				<v-h3-block :hasArrow="false">
					店铺认证
				</v-h3-block>
				<div class="info">
					<v-h3-block :hasArrow="false">
						<template #default>角色类</template>
						<template #left>
							<span class="desc">认证专属身份，获取更多专属权益</span>
						</template>
						<template #right>
							<span class="more">
								查看更多
								<el-icon :size="14">
									<ArrowRight />
								</el-icon>
							</span>
						</template>
					</v-h3-block>
					<div class="info-content">
						<v-confirm-item v-for="(item, index) in confirmItemList" :item="item" :index="index">
							<v-btn-fill>去完成</v-btn-fill>
						</v-confirm-item>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="block-wrapper evaluate-wrapper">
				<v-h3-block :hasArrow="false">
					<template #default>店铺评分</template>
					<template #right>
						<span class="more">
							查看详情
							<el-icon :size="14">
								<ArrowRight />
							</el-icon>
						</span>
					</template>
				</v-h3-block>
				<div class="desc">
					<p><span class="key">好评率</span><span class="value">99.78%</span></p>
					<p>
						<span class="key">店铺信用等级</span>
						<span class="value">
							<img src="//gtms01.alicdn.com/tps/i1/TB1D9j.HpXXXXbNXpXX97kJ_XXX-105-24.png" class="item-icon">
						</span>
					</p>
				</div>
				<div class="info block-wrapper">
					<div class="info-1">
						<p class="top">描述相符</p>
						<p class="bot">5.0</p>
					</div>
					<div class="info-2">
						<p class="top">服务态度</p>
						<p class="bot">5.0</p>
					</div>
					<div class="info-3">
						<p class="top">物流服务</p>
						<p class="bot">4.9</p>
					</div>
				</div>
				<div class="line"></div>
				<div class="bot">
					<v-h3-block>
						<template #left>
							<v-btn-sign type="blue">
								常见问题
							</v-btn-sign>
							<span class="desc">店铺动态评分(DSR)如何计算？</span>
						</template>
					</v-h3-block>
				</div>
			</div>
			<div class="block-wrapper tool-wrapper">
				<v-h3-block :hasArrow="false">
					店铺工具
				</v-h3-block>
				<div class="info">
					<div v-for="(item, index) in toolItemList" :index="index" @click="handelClickToolItem(item)">
						<p>
							<img :src="item.img" />
						</p>
						<p>
							<span>{{ item.desc }}</span>
						</p>
					</div>
				</div>
			</div>
			<div class="block-wrapper advise-wrapper">
				<v-h3-block :hasArrow="false">
					店铺经营建议
				</v-h3-block>
				<div class="info">
					<v-h3-block :hasArrow="false">
						推荐任务
					</v-h3-block>
					<div class="info-content">
						<v-confirm-item v-for="(item, index) in adviseItemList" :item="item" :index="index">
							<v-btn-empty>{{ item.btnTitle }}</v-btn-empty>
						</v-confirm-item>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="shopCenter">
import { useRouter } from 'vue-router';
const $router = useRouter();

import vConfirmItem from './confirmItem.vue';
import vH3Block from '@/components/H3Header/index.vue';
import vBtnEmpty from '@/components/BtnEmpty/index.vue';
import vBtnFill from '@/components/BtnFill/index.vue';
import vBtnSign from '@/components/BtnSign/index.vue';
// 左侧：店铺店铺认证
const confirmItemList = [
	{
		title: '红人认证',
		msg: '由明星、艺人或在社交媒体及短视频、直播平台拥有一定粉丝量的红人（或合伙人/股东）开设的淘宝店铺',
		img: 'https://gw.alicdn.com/imgextra/i1/O1CN01zoIX991dKQvuXR7Uc_!!6000000003717-2-tps-96-96.png'
	},
	{
		title: '品牌直营',
		msg: '由品牌方自营或持有独占品牌授权的淘宝店铺',
		img: 'https://gw.alicdn.com/imgextra/i4/O1CN01M2Bgcl1Z0xdJnm0p6_!!6000000003133-2-tps-96-96.png'
	},
	{
		title: '工厂认证',
		msg: '自有工厂或持有工厂授权开设的淘宝店铺',
		img: 'https://gw.alicdn.com/imgextra/i2/O1CN01tzP4IB1Rweb254X3W_!!6000000002176-2-tps-96-96.png'
	},
	{
		title: '设计师认证',
		msg: '由持证或获奖的专业设计师（或合伙人/股东）开设的，销售其设计作品（以服饰、珠宝、家具和文创用品为主）的淘宝店铺',
		img: 'https://gw.alicdn.com/imgextra/i1/O1CN01zoIX991dKQvuXR7Uc_!!6000000003717-2-tps-96-96.png'
	},
];


// 右侧：店铺工具
const toolItemList = [
	{ desc: '营业时间', img: 'https://gw.alicdn.com/imgextra/i1/O1CN01WNKORU22e0EFyvVgo_!!6000000007144-2-tps-72-72.png' },
	{ desc: '域名设置', img: 'https://gw.alicdn.com/imgextra/i1/O1CN01djGKBi1yrxpxIkeZt_!!6000000006633-2-tps-74-72.png' },
	{ desc: '登记声明', img: 'https://img.alicdn.com/imgextra/i3/O1CN01ycusYU1IXcNjeYRBp_!!6000000000903-2-tps-72-72.png' },
	{ desc: '店铺年检', img: 'https://img.alicdn.com/imgextra/i1/O1CN01BMQx5a22jUz0cTQP3_!!6000000007156-2-tps-72-72.png' },
	{ desc: '店铺过户', img: 'https://img.alicdn.com/imgextra/i3/O1CN01adaBM31QrKLyiPjb0_!!6000000002029-2-tps-72-72.png' },
	{ desc: '经营许可', img: 'https://img.alicdn.com/imgextra/i4/O1CN01vuSMHm1cYLKAOrYMp_!!6000000003612-2-tps-72-72.png' },
	{ desc: '创业档案', img: 'https://img.alicdn.com/imgextra/i3/O1CN01VdIoXq1Eh024nJcHS_!!6000000000382-2-tps-72-72.png' },
	{ desc: '我要关店', img: 'https://gw.alicdn.com/imgextra/i2/O1CN01R6zjQi1dxMZtjwJeY_!!6000000003802-2-tps-72-72.png' },
];

// 右侧：店铺经营建议
const adviseItemList = [
	{
		title: '获取【高回头客】店铺标签',
		msg: '获得店铺标签可在主搜商品卡片、猜你喜欢卡片等地透出实现流量加持，具体效果如下图',
		btnTitle: '去管理',
		img: 'https://img.alicdn.com/imgextra/i4/O1CN01eiBGDE1yJ9joiXB7P_!!6000000006557-2-tps-104-104.png'
	},
	{
		title: '优化商品素材',
		msg: '发现您店铺内有商品素材需要优化，及时优化可帮助您的商品更快被消费者找到哦',
		btnTitle: '去优化',
		img: 'https://gw.alicdn.com/imgextra/i4/O1CN01cFEFGE1DoUtlJtH06_!!6000000000263-2-tps-106-104.png'
	},
];
const handelClickToolItem = function (item) {
	if (item.desc == '经营许可') {
		$router.push('/shop-manage/shop-qa');
	}
}
</script>

<style scoped>
.container {
	background-color: #f7f8fa;
}

.left {
	width: 100%;
	padding: 20px 395px 20px 25px;
}

.introduce-wrapper {
	display: flex;
}

.introduce-wrapper .wrapper-left {
	width: 66px;
	height: 66px;
	line-height: 66px;
	font-size: 18px;
	margin-right: 20px;
}

.introduce-wrapper .wrapper-left img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
}

.introduce-wrapper .wrapper-right {
	flex: 1;
}

.introduce-wrapper .wrapper-right h3 {
	font-weight: normal;
}

.introduce-wrapper .wrapper-right h3 span.year {
	width: 57px;
	display: inline-block;
	border: 1px solid rgb(255, 128, 0);
	color: rgb(255, 128, 0);
	border-radius: 4px;
	background: rgb(255, 255, 255);
	font-family: PingFangSC-Regular;
	font-size: 12px;
	letter-spacing: 0;
	text-align: center;
	border-radius: 3px;
	text-align: center;
	margin-left: 8px;
	line-height: 20px;
}

.introduce-wrapper .wrapper-right .info {
	height: auto;
}

.introduce-wrapper .wrapper-right .info>p {
	width: 50%;
	display: inline-block;
	font-size: 14px;
	letter-spacing: 0;
	line-height: 28px;
}

.introduce-wrapper .wrapper-right .info>p span.key {
	color: #666;
	margin-right: 6px;
}

.introduce-wrapper .wrapper-right .info>p span.value {
	color: #111;
}

.introduce-wrapper .wrapper-right .info>p i {
	margin-left: 5px;
}

.confirm-wrapper>h3 {}

.confirm-wrapper>.info {}

.confirm-wrapper>.info>h3 {
	font-size: 16px;
	color: #111;
}

.confirm-wrapper>.info>h3 span.desc {
	font-size: 12px;
	color: #666;
	margin-left: 6px;
}

.confirm-wrapper>.info>h3 .more {
	color: #5685ff;
	font-size: 14px;
}

.confirm-wrapper>.info>h3 .more i {
	position: relative;
	top: 2px;
}

.confirm-wrapper .info-contrent {}

.confirm-wrapper .info-content>div {
	display: inline-block;
	width: 50%;
	padding: 0 5px;
	min-height: 100px;
	margin-bottom: 10px;
}

.right {
	width: 357px;
	position: absolute;
	right: 0;
	top: 0;
	padding: 20px;
	padding-left: 0;
}

.right>div {
	min-height: 100px;
	margin-bottom: 17px;
	border-radius: 10px;
}

.evaluate-wrapper {
	padding-bottom: 8px;
}

.evaluate-wrapper>h3 .more {
	color: #5685ff;
	font-size: 14px;
}

.evaluate-wrapper>h3 .more i {
	position: relative;
	top: 2px;
}

.evaluate-wrapper .desc {
	height: 21px;
	font-size: 14px;
	color: #999;
	margin-bottom: 20px;
}

.evaluate-wrapper .desc p {
	display: inline-block;
}

.evaluate-wrapper .desc span.value {
	font-size: 16px;
	color: #111;
	font-weight: 500;
	margin-left: 6px;
	margin-right: 10px;
}

.evaluate-wrapper .desc span img {
	height: 16px;
	vertical-align: sub;
}

.evaluate-wrapper .info {
	background-color: #f4f5f8;
	margin-bottom: 20px;
	padding-bottom: 5px;
}

.evaluate-wrapper .info>div {
	display: inline-block;
	text-align: center;
	height: 62px;
	vertical-align: bottom;
	width: 33%;
}

.evaluate-wrapper .info>div p.top {
	font-size: 12px;
	color: rgba(51, 51, 51, .6);
	margin-bottom: 9px;
}

.evaluate-wrapper .info>div p.bot {
	font-weight: 500;
	font-size: 15px;
	color: rgba(17, 17, 17, .9);
}

.evaluate-wrapper .line {
	height: 1px;
	background-color: #f4f5f8;
	margin-bottom: 20px;
}

.evaluate-wrapper .bot .desc {
	color: #333;
	font-weight: normal;
	font-size: 14px;
	margin-left: 8px;
}

.tool-wrapper {}

.tool-wrapper>.info {}

.tool-wrapper>.info div {
	display: inline-block;
	cursor: pointer;
	width: 25%;
	height: 75px;
}

.tool-wrapper>.info p {
	text-align: center;
	font-weight: 500;
	font-size: 14px;
	color: #111;
	margin-top: 6px;
}

.tool-wrapper>.info img {
	width: 30px;
	height: 30px;
	object-fit: contain;
}

.advise-wrapper .block-wrapper.confirm-item-wrapper {
	background: #fff;
	background-image: none;
}
</style>
