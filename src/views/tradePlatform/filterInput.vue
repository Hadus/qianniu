<template>
  <div class="filter-input-wrapper" v-if="type == 'select'">
    <span>
      {{ label }}
    </span>
    <input :value="holder">
    <i><el-icon>
        <ArrowDownBold />
      </el-icon></i>
  </div>
  <div class="filter-input-wrapper date" v-else-if="type == 'date'">
    <span>{{ label }}</span>
    <input />
    <span>结束日期</span>
    <input />
    <i>
      <el-icon>
        <ArrowDownBold />
      </el-icon>
    </i>
  </div>
  <div class="filter-input-wrapper" style="background-color: transparent;" v-else-if="type == 'blank'">
  </div>
  <div class="filter-input-wrapper" v-else>
    <span>{{ label }}</span>
    <input />
  </div>
</template>

<script setup lang="ts" name="filterInput">
const { type, label } = defineProps({
  type: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  holder: {
    type: String,
    default: '全部'
  }
})
</script>

<style scoped>
.filter-input-wrapper {
  width: 269px;
  height: 36px;
  position: relative;
  line-height: 36px;
  border-radius: 4px;
  background: #eff1f8;
  position: relative;
  border: 1px solid transparent;
}

div.filter-input-wrapper span {
  font-size: 12px;
  line-height: 12px;
  color: #999;
  position: absolute;
  left: 10px;
  top: 12px;
}

div.filter-input-wrapper>i {
  font-size: 12px;
  line-height: 12px;
  color: #111;
  position: absolute;
  right: 10px;
  top: 12px;
}

div.filter-input-wrapper input {
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-block;
  padding-left: 67px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #111;
}

div.filter-input-wrapper:hover {
  border: 1px solid #3d7fff;
}

div.filter-input-wrapper.date {
  width: 552px;
}

div.filter-input-wrapper.date::before {
  content: '-';
  width: 12px;
  height: 1px;
  position: absolute;
  left: calc(50% - 5px);
  top: -1px;
  color: #999;
  font-size: 10px;
  font-weight: normal;
}

div.filter-input-wrapper.date>span:nth-of-type(2) {
  left: calc(50% + 17px);
}
</style>
<style></style>