<template>
  <div class="xxx">
    <div>bar</div>
    <el-button type="warning" round>Default</el-button>
  </div>
</template>
<script lang="ts" setup name="Bar"></script>
<style lang="scss" scoped>
  div {
    color: blue;
  }
  .xxx {
    ::v-deep(.el-button--warning) {
      background: red;
    }
  }
</style>
