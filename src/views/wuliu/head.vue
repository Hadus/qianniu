<template>
  <div class="head-wrapper">
    <div class="head">
      <div class="left">
        <p>卖家手机端</p>
        <p>晓峰珠宝, <a>退出</a></p>
      </div>
      <div class="right">
        <p><a>淘宝网首页</a></p>
        <p>我的淘宝
          <el-icon class="icon-head">
            <ArrowDownBold />
          </el-icon>
        </p>
        <p>牵牛卖家中心
          <el-icon class="icon-head">
            <ArrowDownBold />
          </el-icon>
        </p>
        <p>卖家服务
          <el-icon class="icon-head">
            <ArrowDownBold />
          </el-icon>
        </p>
        <p><a>联系客服</a></p>
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <img src="https://img.alicdn.com/tfs/TB1m.NSoET1gK0jSZFrXXcNCXXa-180-60.png">
      </div>
      <div class="right">
        <input type="search" name="" id="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="head">
</script>

<style scoped>
.head {
  height: 35px;
  position: relative;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  padding: 0 15px;
  z-index: 10000;
  color: #8b8b8b;
  background-color: #f6f6f6;
  border: 1px solid #f0f0f0;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.head>div>p {
  display: inline-block;
  height: 100%;
  position: relative;
  padding: 0 10px;

}

.head>div>p:not(:first-child)::before {
  content: '|';
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 22px;
}

.banner {
  height: 60px;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  padding: 0 15px;
}

.banner div {
  height: 100%;
}

.banner .left img {
  width: 90px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}
</style>
