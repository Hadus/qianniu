<template>
  <div class="container">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>我的资质管理</el-breadcrumb-item>
        <el-breadcrumb-item>资质详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="info-wrapper">
      <div class="top">
        <el-icon size="16px" color="#1dc11d">
          <CircleCheck />
        </el-icon>
        有效证件
      </div>
      <div class="info">
        <p><span class="key">工商营业执照注册号/统一社会信用代码:</span><span class="value">{{ mock_shop.yyzz.code }}</span></p>
        <p><span class="key">企业名称:</span><span class="value">{{ mock_shop.yyzz.companyName }}</span></p>
        <p><span class="key">法定代表人:</span><span class="value">{{ mock_shop.yyzz.dailiren }}</span></p>
        <p><span class="key">工商营业执照有效期截止时间:</span><span class="value">{{ mock_shop.yyzz.expireDate }}</span></p>
        <p><span class="key">营业执照照片:</span>
          <span class="value">
            <a :href="mock_shop.yyzz.yyzzImg" target="_blank">
              <img :src="mock_shop.yyzz.yyzzImg" style="width: 100px; height: 100px; margin-right: 15px;">
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="shopQAInfo">
import mock_shop from '@/mock/current/shop';

</script>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
}

.title {
  line-height: 49px;
}

.top {
  height: 48px;
  padding: 12px 24px;
  margin: 20px 0;
  background-color: #E8F9E8;
  font-size: 14px;
  color: #333;
  font-family: Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei";
}

.top i {
  vertical-align: sub;
}

.info>p {
  font-size: 12px;
  display: flex;
  line-height: 28px;
  margin-bottom: 16px;
}

.info>p span {
  flex: 1
}

.info>p span.key {
  text-align: right;
  margin-right: 12px;
}

.info>p span.value {
  text-align: left;
}
</style>
<style>
.el-breadcrumb__item>.el-breadcrumb__inner {
  font-weight: normal;
  font-size: 12px;
  color: rgb(102, 102, 102);
  cursor: pointer;
}

.el-breadcrumb__item:last-child>.el-breadcrumb__inner {
  color: rgb(51, 51, 51);
  cursor: pointer;
}

.el-breadcrumb__item>.el-breadcrumb__inner:hover {
  color: rgb(255, 106, 0);
}

.el-breadcrumb__item:last-child>.el-breadcrumb__inner:hover {
  color: rgb(255, 106, 0);
}
</style>
