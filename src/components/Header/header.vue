<template>
	<div class="header">
		<div class="logo">
			<img src="https://img.alicdn.com/imgextra/i1/O1CN01pNPz0o1YXBwCkcG3R_!!6000000003068-2-tps-106-106.png">
		</div>
		<div class="use">
			<div>常用</div>
		</div>
		<div class="search">
			<div class="input-wapper">
				<input placeholder="搜索功能/头条/帮助" autocomplete="off" value="">
			</div>
		</div>
		<div class="news">
			<span class="t">公告</span>
			<span class="s">|</span>
			<span class="c">中小商家利好规则与成长层级解读</span>
		</div>
		<div class="icons">
			<p class="icon-download">
				<el-icon :size="18">
					<Memo />
				</el-icon>
				下载
			</p>
			<p class="icon-role">
				<el-icon :size="18">
					<DocumentCopy />
				</el-icon>
				规则
			</p>
			<p class="icon-learn">
				<el-icon :size="18">
					<Document />
				</el-icon>
				学习
			</p>
			<p class="icon-msg">
				<el-icon :size="18">
					<MostlyCloudy />
				</el-icon>
				消息
			</p>
			<p class="icon-service">
				<el-icon :size="18">
					<Odometer />
				</el-icon>
				官方客服
			</p>
			<p class="icon-feedback">
				<el-icon :size="18">
					<Edit />
				</el-icon>
				反馈
			</p>
		</div>
		<div class="user">
			<el-icon :size="10">
				<ArrowDownBold />
			</el-icon>
			<div class="userinfo">
				<img src="https://img.alicdn.com/imgextra/i2/1115350887/O1CN01B2LRQR1IQIBDVMEob_!!1115350887-0-shopmanager.jpg">
				<p class="name">惠水琥珀蜜蜡</p>
				<p class="type">晶玺一品</p>
			</div>
			<div class="drop-wapper">
				<div class="accinfo">
					<img src="https://gw.alicdn.com/imgextra/i2/O1CN01WRS8ZL1X1l0PVG0P1_!!6000000002864-2-tps-66-66.png">
					<span>账号信息</span>
				</div>
				<div class="shopinfo">
					<img src="https://gw.alicdn.com/imgextra/i3/O1CN019FQDih27vvkaV396b_!!6000000007860-2-tps-63-60.png">
					<span>店铺信息</span>
				</div>
				<div class="setting">
					<img src="https://gw.alicdn.com/imgextra/i2/O1CN016IoKrO1zpxpIcMbjU_!!6000000006764-2-tps-33-33.png"
						style="height: 18px;">
					<span>页面设置</span>
				</div>
				<div class="line"></div>
				<div class="logout">退出当前账号</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.header {
	position: relative;
	width: 100%;
	min-width: 1600px;
	height: 76px;
	font-size: 22px;
	color: #333;
}

.header>div {
	height: 100%;
	display: inline-block;
	text-align: center;
	position: absolute;
	top: 0;
}

.header .logo {
	width: 108px;
	left: 0;
	padding-top: 20px;
}

.logo>img {
	width: 53px;
	height: 53px;
}

.header .use {
	width: 60px;
	left: 108px;
	display: flex;
	align-items: center;
}

.use>div {
	cursor: pointer;
	height: 36px;
	width: 60px;
	background-color: #e5eaf8;
	border-radius: 18px;
	font-weight: 400;
	font-size: 14px;
	color: #3d7fff;
	line-height: 34px;
}

.header .search {
	width: 250px;
	left: 168px;
	padding-left: 10px;
	display: flex;
	align-items: center;
}

.search .input-wapper {
	width: 240px;
	height: 34px;
	margin-top: -6px;
}

.search .input-wapper>input {
	height: 100%;
	width: 100%;
	border: 0 none;
	border-radius: 20px;
	padding-left: 19px;
	font-size: 12px;
	color: #111;
	outline: 0 none;
}

.search .input-wapper>input:hover {
	border-color: #3d7fff;
}

.header .news {
	width: 400px;
	left: 438px;
	cursor: pointer;
	line-height: 70px;
	text-align: left;
}

.news span.t {
	color: #3d7fff;
	font-weight: 700;
	font-size: 14px;
}

.news span.s {
	color: #3d7fff;
	font-weight: 700;
	font-size: 14px;
	opacity: .3;
	margin-left: 8px;
	margin-right: 8px;
}

.news span.c {
	color: #333;
	font-size: 14px;
}

.header .icons {
	width: 325px;
	right: 218px;
	display: flex;
	align-items: center;
	padding-right: 10px;
}

.icons>p {
	width: 24px;
	height: 39px;
	flex: 1;
	font-size: 12px;
	color: #666;
	position: relative;
	padding-top: 24px;
	cursor: pointer;
}

.icons>p.icon-service {
	flex: 2;
}

.icons>p>i {
	position: absolute;
	left: 12px;
	top: 0;
}

.icons>p.icon-download>i {}

.icons>p.icon-role>i {}

.icons>p.icon-learn>i {}

.icons>p.icon-msg>i {}

.icons>p.icon-service>i {
	left: 32px;
}

.icons>p.icon-feedback>i {}

.header .user {
	width: 218px;
	right: 0;
	display: flex;
	align-items: center;
	padding-left: 9px;
	cursor: pointer;
}

.user>i {
	position: absolute;
	right: 30px;
	top: 30px;
	z-index: 9;
	font-size: 10px;
}

.header .user:hover .drop-wapper {
	display: block;
}

.userinfo {
	position: relative;
	padding-left: 35px;
	text-align: left;
}

.userinfo>img {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	position: absolute;
	left: 0;
	top: 2px;
}

.userinfo>.name {
	font-size: 13px;
	color: #333;
}

.userinfo>.type {
	color: #333;
	opacity: .6;
	font-size: 12px;
}

.drop-wapper {
	display: none;
	width: 170px;
	background-color: #fff;
	border-radius: 8px;
	position: absolute;
	left: 20px;
	top: 72px;
	z-index: 9;
	cursor: pointer;
	padding-top: 13px;
	padding-bottom: 13px;
	padding-left: 3px;
	box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
}

.drop-wapper>div {
	width: 100%;
	padding-left: 23px;
	font-size: 14px;
	text-align: left;
	line-height: 40px;
}

.drop-wapper>div img {
	width: 20px;
	height: 20px;
	vertical-align: middle;
	margin-right: 10px;
}

.drop-wapper>.line {
	height: 0px;
	width: 100%;
	border-top: 1px solid #e6e8ed;
	margin-top: 10px;
}

.drop-wapper>.logout {
	line-height: 46px;
	padding-left: 35px;
	padding-top: 10px;
	color: #777;
}
</style>
