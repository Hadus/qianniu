<template>
  <div class="data-container">
    <el-container>
      <el-header>
        <div class="header-top" v-show="showHeaderTop">
          <div class="header--top-inner">
            <div style="display: flex">
              <h1 class="header-logo">
                <svg
                  fill="white"
                  width="30"
                  height="30"
                  viewBox="0 0 29 29"
                  xmlns="http://www.w3.org/svg/2000"
                >
                  <path
                    d="M14.2237241,0.355862069 C6.36877241,0.355862069 0,6.78846395 0,14.7232602 L0,29.0906583 L14.2237241,29.0906583 C22.079669,29.0901567 28.4469517,22.6575549 28.4469517,14.7232602 C28.4469517,6.78846395 22.079669,0.355862069 14.2237241,0.355862069 M14.2237241,2.4122884 C20.9440552,2.4122884 26.4115862,7.93504702 26.4115862,14.7232602 C26.4115862,21.5119749 20.9440552,27.0337304 14.2237241,27.0337304 L2.03586207,27.0337304 L2.03586207,14.7232602 C2.03586207,7.93504702 7.50289655,2.4122884 14.2237241,2.4122884"
                    id="Fill-9"
                  ></path>
                  <path
                    d="M15.8217766,16.28479 L20.0245903,9.50510345 L13.3539145,13.7378307 C12.7431559,13.9645392 12.2783834,14.4881755 12.1338869,15.13921 L8.29802483,21.3285517 L14.3390731,17.4935674 C15.0183559,17.3802132 15.5749903,16.9142571 15.8217766,16.28479 M14.3182179,25.9745705 L14.3182179,25.9745705 L3.25752828,25.9745705 L3.25752828,14.8036614 C3.25752828,8.63388088 8.21063172,3.63225078 14.3182179,3.63225078 C20.4253076,3.63225078 25.3779145,8.63388088 25.3779145,14.8036614 C25.3779145,20.973442 20.4253076,25.9745705 14.3182179,25.9745705"
                    id="Fill-10"
                  ></path>
                  <path
                    d="M14.8899972,14.7766771 C15.3507972,15.2541693 15.3423559,16.0235737 14.8666593,16.4905329 C14.392949,16.9584953 13.6337214,16.9464577 13.1719283,16.4694671 C12.7091421,15.9884639 12.7170869,15.222069 13.1912938,14.7546082 C13.6650041,14.2871473 14.427211,14.2966771 14.8899972,14.7766771"
                    id="Fill-11"
                  ></path>
                </svg>
                <span class="logo-text">生意参谋</span>
              </h1>
              <div class="split-line"></div>
              <div class="change-shop-wrap">
                <span class="shop-name">{{ user.name }}</span>
                <span class="shop-name-extra">主店</span>
                <el-icon color="#fff">
                  <ArrowDown />
                </el-icon>
                <i class="drop-down-icon"></i>
              </div>
            </div>
            <div class="header-top-right-box">
              <div class="ebase-frame-search">
                <div class="sycm-base-search">
                  <span
                    class="ant-input-search ant-input-search-enter-button ant-input-affix-wrapper"
                  >
                    <input
                      placeholder="找数据，搜索一下"
                      class="ant-input"
                      type="text"
                      value=""
                    /><span class="ant-input-suffix">
                      <el-icon
                        class="ant-input-search-button"
                        :size="14"
                        color="#fff"
                      >
                        <Search />
                      </el-icon>
                    </span>
                  </span>
                </div>
              </div>
              <div class="user-top-bar">
                <div>
                  <span class="user-link">
                    <i class="niceFonts-message"></i>
                    消息
                  </span>
                  <div class="notification-remind"></div>
                </div>
                <div>
                  <span class="user-link">订购</span>
                  <span class="user-link">个人中心</span>
                  <span class="user-link">帮助</span>
                  <div class="notification-remind"></div>
                  <span class="user-link">退出</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="el-menu-container">
          <el-menu
            :default-active="activeMenu"
            :ellipsis="false"
            mode="horizontal"
            @select="handleSelect"
            class="top-menu"
          >
            <el-menu-item index="homePage">首页</el-menu-item>
            <el-menu-item index="1">实时</el-menu-item>
            <el-menu-item index="2"
              ><template #title>作战室<span class="gap"></span></template
            ></el-menu-item>
            <el-menu-item index="3"
              >客户
              <div class="notification-remind"></div>
            </el-menu-item>
            <el-menu-item index="4">流量</el-menu-item>
            <el-menu-item index="5">品类</el-menu-item>
            <el-menu-item index="6">交易</el-menu-item>
            <el-menu-item index="liveStream">直播</el-menu-item>
            <el-menu-item index="7"
              >内容
              <div class="notification-remind"></div>
            </el-menu-item>
            <el-menu-item index="8">服务</el-menu-item>
            <el-menu-item index="9">营销</el-menu-item>
            <el-menu-item index="10"
              ><template #title>物流<span class="gap"></span></template
            ></el-menu-item>
            <el-menu-item index="11">市场</el-menu-item>
            <el-menu-item index="12"
              ><template #title>竞争<span class="gap"></span></template
            ></el-menu-item>
            <el-menu-item index="13"
              ><template #title>业务专区<span class="gap"></span></template
            ></el-menu-item>
            <el-menu-item index="14">自助分析</el-menu-item>
            <el-menu-item index="15">人群</el-menu-item>
            <el-menu-item index="16">学堂</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <div class="main-container">
        <el-main class="outer-main">
          <div v-if="isHomePage">
            <Overview />
            <AdvertView />
            <div>
              <img style="width: 100%" src="@/assets/img/data/middle.png" />
            </div>
            <OperationWin />
          </div>
          <div v-else>
            <LiveStream />
          </div>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="tradePlatform">
import { computed, ref, onMounted } from "vue";
import Overview from "./components/Overview.vue";
import OperationWin from "./components/OperationWin.vue";
import AdvertView from "./components/AdvertView.vue";
import LiveStream from "./components/LiveStream.vue";
import { Search } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/user";
const user = useUserStore();

const activeMenu = ref("homePage");
const handleSelect = (value: string) => {
  activeMenu.value = value;
};
const isHomePage = computed(() => activeMenu.value === "homePage");
const showHeaderTop = ref(true);
let _time: number;

onMounted(() => {
  document
    .querySelector(".data-container")
    ?.addEventListener("scroll", (e: any) => {
      if (_time) {
        return;
      }
      _time = setTimeout(() => {
        showHeaderTop.value = e.target.scrollTop < 60;
        _time = 0;
      }, 100);
    });
});
</script>

<style>
.data-container {
  overflow: scroll;
  height: 100%;
}

.content {
  padding: 0;
  background-color: #eef1f6;
}

.container {
  color: #333;
}

.outer-main.el-main {
  max-width: 1430px;
  margin: 0 auto;
  padding: 10px 0 0 0;
  margin-top: 110px;
}

.data-container .el-header {
  width: 100%;
  position: fixed;
  z-index: 10;
  height: 120px;
  padding: 0;
}

.el-menu-container {
  width: 100%;
  background: #2062e6;
}

.data-container .top-menu {
  justify-content: flex-start;
  background: #2062e6;
  height: 50px;
  width: 1430px;
  margin: 0 auto;
}

.top-menu .el-menu-item {
  color: #fff;
  border-bottom: none !important;
  font-size: 16px;
  font-weight: 200;
}

.top-menu .el-menu-item:hover {
  background-color: #2062e6 !important;
  color: #f3d024 !important;
}

.top-menu .el-menu-item.is-active {
  background-color: #2062e6 !important;
  color: #f3d024 !important;
}

.top-menu .el-menu-item.is-active:before {
  position: absolute;
  content: " ";
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: #f3d024;
}

.header-top {
  min-width: 1210px;
  position: relative;
  background: #2062e6;
  margin-bottom: 0;
}

.header--top-inner {
  display: flex;
  justify-content: space-between;
  width: 1430px;
  position: relative;
  margin: 0 auto;
}

.header-logo {
  display: flex;
  margin: 20px 0 0;
}

.logo-text {
  margin-left: 10px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 300;
  color: #fff;
}

.split-line {
  width: 1px;
  background: #fff;
  opacity: 0.3;
  height: 21px;
  margin: 25px 10px 0 14px;
}

.drop-down-icon {
  transition: transform 0.2s;
  color: #b4c8d8;
  float: left;
  display: block;
  line-height: 50px;
}

.change-shop-wrap {
  margin-top: 10px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  text-align: right;
}

.shop-name {
  color: #fff;
  font-size: 22px;
  margin-right: 10px;
  max-width: 154px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 300;
}

.shop-name-extra {
  position: relative;
  top: -2px;
  display: inline-block;
  width: 36px;
  text-align: center;
  margin-right: 8px;
  border-radius: 1px;
  background-color: #f3d024;
  color: #0040c1;
  font-weight: 600;
  line-height: 20px;
  border: none;
  font-size: 12px;
}

.header-top-right-box {
  display: flex;
  align-items: center;
  position: relative;
  top: 10px;
}

.header-top-right-box .el-input__wrapper {
  background: hsla(0, 0%, 100%, 0.27);
}

.header-top-right-box .el-input__inner {
  height: 32px;
  backdrop-filter: blur(31px);
  border: 0;
  color: #fff;
}

.user-top-bar {
  display: flex;
  justify-items: center;
}

.notification-remind {
  position: relative;
  top: -8px;
  display: inline-block;
  right: 0px;
  width: 8px;
  height: 8px;
  background-color: #f3d024;
  border-radius: 50%;
}

.user-link {
  color: #fefefe;
  opacity: 0.7;
  margin-left: 28px;
  font-size: 14px;
}

.sycm-base-search {
  width: 376px;
  height: 32px;
  position: relative;
}

.ant-input-affix-wrapper {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "SimHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 12px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: #333333;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
}

.ant-input {
  background: hsla(0, 0%, 100%, 0.27);
  backdrop-filter: blur(31px);
  border: 0;
  color: #fff;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "SimHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-variant: tabular-nums;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 2px;
  transition: all 0.3s;
}

.ant-input-search-button {
  width: 40px;
  background: hsla(0, 0%, 100%, 0.2);
  border: 0;
  font-weight: 700;
  height: 32px;
}

.ant-input-suffix {
  position: absolute;
  right: 0;
}

input::-webkit-input-placeholder {
  color: #fff9;
  font-size: 14px;
}
.gap {
  position: relative;
  left: 20px;
  top: 2px;
  display: inline-block;
  width: 1px;
  height: 16px;
  background-color: #fff;
  opacity: 0.3;
}
</style>
