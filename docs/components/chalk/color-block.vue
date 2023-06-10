<script setup lang="ts">
const colorBlock = [
  {
    title: '品牌色',
    color: [
      { param: '--ys-primary-light', value: '#f0f4ff', textColor: '--ys-black' },
      { param: '--ys-primary', value: '#4177ff', textColor: '--ys-white' },
      { param: '--ys-primary-dark', value: '#1040ab', textColor: '--ys-white' },
    ],
  },
  {
    title: '辅助色',
    color: [
      { param: '--ys-secondary-light', value: '#f3fffc', textColor: '--ys-black' },
      { param: '--ys-secondary', value: '#1fbf86', textColor: '--ys-white' },
      { param: '--ys-secondary-dark', value: '#05a86b', textColor: '--ys-white' },
    ],
  },
  {
    title: '强调色',
    color: [
      { param: '--ys-strong-light', value: '#fff8f1', textColor: '--ys-black' },
      { param: '--ys-strong', value: '#fb5800', textColor: '--ys-white' },
      { param: '--ys-strong-dark', value: '#ed6502', textColor: '--ys-white' },
    ],
  },
  {
    title: '交互色',
    color: [
      { param: '--ys-success', value: '#41cc8b', textColor: '--ys-white' },
      { param: '--ys-warning', value: '#f4934b', textColor: '--ys-white' },
      { param: '--ys-error', value: '#d94b3e', textColor: '--ys-white' },
      { param: '--ys-info', value: '#4f94e6', textColor: '--ys-white' },
      { param: '--ys-success-bg', value: '#41cc8b', textColor: '--ys-black' },
      { param: '--ys-warning-bg', value: '#f4934b', textColor: '--ys-black' },
      { param: '--ys-error-bg', value: '#d94b3e', textColor: '--ys-black' },
      { param: '--ys-info-bg', value: '#4f94e6', textColor: '--ys-black' },
    ],
  },
  {
    title: '中性色',
    color: [
      { param: '--ys-white', value: '#ffffff', textColor: '--ys-black' },
      { param: '--ys-black', value: '#000000', textColor: '--ys-white' },
      { param: '--ys-gray', value: '#333333', textColor: '--ys-white' },
      { param: '--ys-gray-100', value: '#666666', textColor: '--ys-white' },
      { param: '--ys-gray-200', value: '#999999', textColor: '--ys-white' },
      { param: '--ys-gray-300', value: '#dddddd', textColor: '--ys-black' },
      { param: '--ys-gray-400', value: '#eeeeee', textColor: '--ys-black' },
      { param: '--ys-gray-500', value: '#f5f5f5', textColor: '--ys-black' },
      { param: '--ys-gray-600', value: '#fafafa', textColor: '--ys-black' },
    ],
  },
]
</script>

<template>
  <div class="ys-chalk__color-block">
    <div v-for="list in colorBlock" :key="list.title" class="ys-chalk__list">
      <h3 class="ys-chalk__list-title">{{ list.title }}</h3>
      <div class="ys-chalk__list-content">
        <div
          v-for="color in list.color"
          :key="color.value"
          :style="{
            '--bg-color': `var(${color.param})`,
            '--text-color': `var(${color.textColor})`,
          }"
          class="ys-chalk__color"
        >
          <p class="ys-chalk__color-param">{{ color.param }}</p>
          <p class="ys-chalk__color-value">{{ color.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ys-chalk__color-block {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}
.ys-chalk__list {
  margin-bottom: 30px;
}
.ys-chalk__list-title {
  border-bottom: var(--ys-border);
}
.ys-chalk__list-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
.ys-chalk__color {
  --bg-color: #eee;
  --text-color: #eee;
  box-sizing: border-box;
  height: 130px;
  padding: 10px;
  background-color: var(--bg-color);
  border-radius: 10px;
  margin-top: 10px;
}
.ys-chalk__color-param,
.ys-chalk__color-value {
  color: var(--text-color) !important;
  margin-top: 0 !important;
}
</style>