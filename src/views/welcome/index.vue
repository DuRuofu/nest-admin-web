<script setup lang="ts">
import { getUserInfo } from "@/api/user";
defineOptions({
  name: "Welcome"
});
</script>

<template>
  <h1>Pure-Admin-Thin（非国际化版本）</h1>
  <!-- 获取用户信息按钮 -->
  <el-button type="primary" @click="getUserInfo('cm83vzycz0000tdcci37vdgyy')"
    >登录</el-button
  >
</template>
