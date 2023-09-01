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
        <el-icon>
          <CircleCheck />
        </el-icon>
        有效证件
      </div>
      <div class="info">
        <p><span class="key">工商营业执照注册号/统一社会信用代码:</span><span class="value">92610725MA70248379</span></p>
        <p><span class="key">企业名称:</span><span class="value">勉县辉洁菁百货店</span></p>
        <p><span class="key">法定代表人:</span><span class="value">于桂芝</span></p>
        <p><span class="key">工商营业执照有效期截止时间:</span><span class="value">长期</span></p>
        <p><span class="key">营业执照照片:</span>
          <span class="value">
            <a href="https://pm.alicdn.com/quali/62365aebca1c4efa6e711be309d54c49.jpg?auth_key=1693577851-0-0-5744a899210e17e7971aacf1d25b96ae"
              target="_blank">
              <img
                src="//pm.alicdn.com/quali/62365aebca1c4efa6e711be309d54c49.jpg?auth_key=1693573757-0-0-08f5ff28a16bc468aa09bd670f0f663b"
                style="width: 100px; height: 100px; margin-right: 15px;">
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="shopQAInfo">
// const { item } = defineProps({
//   item: Object,
//   test: {
//     type: String,
//     default: '1'
//   }
// })

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
