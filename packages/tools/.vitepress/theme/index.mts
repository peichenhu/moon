import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom.less";
// import "../utils/userWorker";

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        // runWorker();
    },
};
