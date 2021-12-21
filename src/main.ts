import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/es/style/index.less";

import router from "./router/index";

createApp(App).use(router).mount("#app");
