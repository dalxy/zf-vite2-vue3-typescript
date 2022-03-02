<template>
  <h2>less</h2>
  <h3>sass</h3>
  <img src="@/assets/1.png" alt="" />
  <div class="postcss"></div>
  <div>
    <p>name: {{ mainStore.name }}</p>
  </div>
  <div>
    <p>count: {{ mainStore.count }}</p>
    <button @click="mainStore.count++">mainStore.count++</button>
    <button @click="add()">add()</button>
    <button @click="mainStore.addAmount(2)">addAmount</button>
  </div>
</template>
<script setup lang="ts">
import { useMainStore } from "@/store"
const mainStore = useMainStore()

defineProps<{ msg: string }>()
const add = () => {
  mainStore.$patch({
    firstName: "zhang",
    lastName: "san",
    count: mainStore.count + 1
  })
}
</script>
<style lang="less">
h2 {
  color: @themecolor;
}
</style>
<style lang="scss">
h3 {
  color: $themecolor;
}
</style>
<style>
.postcss {
  height: 30px;
  width: 60px;
  background-color: orange;
  transform: rotate(30deg);
}
</style>
