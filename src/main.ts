import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./config/RouterConfig";
import { setupStore } from "/@/store/index";
// 引入重置样式
import "./theme/reset.scss";
import "./theme/index.scss";
import "element-plus/dist/index.css";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";
// 全局注册`@iconify/vue`图标库
import { IconifyIconOffline, IconifyIconOnline, FontIcon } from "./components/Icon";

const app = createApp(App);
app.component("IconifyIconOffline", IconifyIconOffline);
app.component("IconifyIconOnline", IconifyIconOnline);
app.component("FontIcon", FontIcon);
setupStore(app);
app.use(router);
app.mount("#app");
