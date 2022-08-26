<script lang="ts" setup>
import { useUserStore } from "/@/store/modules/user";
const userInfo = useUserStore();
console.log("xxxx", userInfo.userName);
</script>
<template>
  <div>403</div>
</template>
