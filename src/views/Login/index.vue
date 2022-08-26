<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from "/@/api/app";
import { setItem } from "/@/utils/storage";
const router = useRouter();
const form = reactive({
  userName: "username",
  passWord: "password",
});
const loginAction = async () => {
  const data = await login(form);
  setItem("token", data.token);
  router.push("/");
};
</script>

<template>
  <div class="wrapper">
    <h1>Login</h1>
    <ElForm :model="form">
      <ElFormItem label="Username">
        <ElInput placeholder="Please input Username" v-model="form.userName"></ElInput>
      </ElFormItem>
      <ElFormItem label="Password">
        <ElInput
          v-model="form.passWord"
          type="password"
          show-password
          placeholder="Please input Password"
        ></ElInput>
      </ElFormItem>
    </ElForm>
    <ElButton @click="loginAction">登录</ElButton>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid;
  width: 500px;
  margin: 50vh auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transform: translateY(-50%);
}
</style>
