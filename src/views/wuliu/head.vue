<template>
  <div class="head-wrapper">
    <div class="head">
      <div class="left">
        <p>
          <span></span>
          卖家手机端
        </p>
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
      <div class="right search">
        <div class="input-wapper">
          <img src="https://gw.alicdn.com/imgextra/i3/O1CN01RoqUXb1YqQRWDLoK0_!!6000000003110-2-tps-28-32.png">
          <input autocomplete="off" value="">
        </div>
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

.head>.left>p>span {
  font-family: wuliuFonts;
  color: #3c81f6;
  font-size: 14px;
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

.banner .right.search {
  left: 168px;
  padding-left: 10px;
  display: flex;
}

.search .input-wapper {
  width: 320px;
  height: 34px;
  margin-top: -6px;
  position: relative;
}

.search .input-wapper img {
  position: absolute;
  left: 12px;
  top: 22px;
  width: 14px;
  height: 16px;
}

.search .input-wapper>input {
  height: 100%;
  width: 100%;
  border: 0 none;
  border-radius: 20px;
  padding-left: 30px;
  font-size: 12px;
  color: #111;
  outline: 0 none;
  background-color: #e5eaf8;
  border: 1px solid #e5eaf8;
}

.search .input-wapper>input:hover {
  border-color: #3d7fff;
}
</style>
