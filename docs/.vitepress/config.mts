/*
 * @Author: AsinGrio
 * @Date: 2024-07-05 10:34:56
 * @LastEditors: AsinGrio
 * @LastEditTime: 2024-07-05 11:26:54
 * @FilePath: \zxd-blog\docs\.vitepress\config.mts
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一个博客",
  description: "知识的记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "GIS", link: "/gis/01", activeMatch: "/gis/" },
      { text: "WebGL", link: "/webgl/1-1", activeMatch: "/webgl/" },
      { text: "Cesium", link: "/cesium/cesium", activeMatch: "/cesium/" },
      { text: "Examples", link: "/examples/markdown-examples" },
    ],
    sidebar: {
      "/gis/": {
        base: "/gis/",
        items: [
          {
            text: "01 chapter GIS",
            collapsed: false,
            items: [{ text: "gis01", link: "/01" }],
          },
        ],
      },
      "/webgl/": {
        base: "/webgl/",
        items: [
          {
            text: "01 chapter WebGL",
            collapsed: false,
            items: [
              { text: "1-1 WebGL", link: "/1-1" },
              { text: "1-2 WebGL", link: "/1-2" },
            ],
          },
          {
            text: "02 chapter WebGL",
            collapsed: false,
            items: [
              { text: "2-1 WebGL", link: "/2-1" },
              { text: "2-2 WebGL", link: "/2-2" },
            ],
          },
        ],
      },
      "/cesium/": {
        base: "/cesium/",
        items: [
          {
            text: "01 chapter Cesium",
            collapsed: false,
            items: [{ text: "cesiumjs-sandcastle分类", link: "/cesium" }],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
