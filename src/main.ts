import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./config/RouterConfig";
// 引入重置样式
import "./theme/reset.scss";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
