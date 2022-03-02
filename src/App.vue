<template>
  <!-- <HelloWorld msg="Vue3+Vute2+Ts" /> -->
  <n-menu :options="MenuOptions"></n-menu>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { h, Component } from "vue"
import { NIcon, NMenu } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { Router, RouterLink } from "vue-router"
import { HomeOutline, LogInOutline } from "@vicons/ionicons5"

const MenuOptions: MenuOption[] = [
  {
    label: () =>
      h(RouterLink, { to: { name: "home" } }, { default: () => "首页" }),
    key: "home",
    icon: () => h(NIcon, null, { default: () => h(HomeOutline) })
  },
  {
    label: () =>
      h(RouterLink, { to: { name: "login" } }, { default: () => "登录" }),
    key: "login",
    icon: () => h(NIcon, null, { default: () => h(LogInOutline) })
  }
]
</script>

<style></style>
