<script setup lang="ts">
defineOptions({
  name: "About"
});

const Test = () => {
  // 弹窗(浏览器默认)
  window.open("https://www.baidu.com");
};
</script>

<template>
  <el-card shadow="never" :body-style="{ padding: '20px' }">
    <div>测试</div>
    <el-button type="primary" @click="Test">测试</el-button>
  </el-card>
</template>
