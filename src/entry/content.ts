import { createApp } from "vue";
import App from "../view/content.vue";

const fontLink = document.createElement("link");
fontLink.type = "text/css";
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=latin-ext&display=swap";
document.head.appendChild(fontLink);

const contentRoot = document.createElement("div");
document.documentElement.prepend(contentRoot);

createApp(App).mount(contentRoot);
