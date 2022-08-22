<script setup lang="ts" name="SideBar"></script>
<template>
  <div class="sidebar-content">
    <RouterLink to="/"> 首页 </RouterLink>
    <RouterLink to="/bar"> bar </RouterLink>
    <RouterLink to="/ccc"> ccc </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar-content {
    background-color: #fff;
    padding: 20px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
</style>
