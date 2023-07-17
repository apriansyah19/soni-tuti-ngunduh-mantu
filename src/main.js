import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";
import ElementPlus from "element-plus";

createApp(App).use(router).use(ElementPlus).use(VueSmoothScroll).mount("#app");
