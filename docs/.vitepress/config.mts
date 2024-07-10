/*
 * @Author: AsinGrio
 * @Date: 2024-07-05 10:34:56
 * @LastEditors: AsinGrio
 * @LastEditTime: 2024-07-10 09:22:08
 * @FilePath: \zxd-blog\docs\.vitepress\config.mts
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一个博客",
  description: "知识的记录",
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "GIS", link: "/gis/01", activeMatch: "/gis/" },
      { text: "WebGL", link: "/webgl/1-1", activeMatch: "/webgl/" },
      { text: "Cesium", link: "/cesium/Cesium知识点", activeMatch: "/cesium/" },
      { text: "Examples", link: "/examples/markdown-examples" },
    ],
    sidebar: {
      "/gis/": {
        base: "/gis/",
        items: [
          {
            text: "GIS常用定义",
            collapsed: false,
            items: [{ text: "gis01", link: "/01" }],
          },
          {
            text: "PostGIS杂记",
            collapsed: false,
            items: [{ text: "01-基础", link: "/postgis/PostGIS基础.md" }],
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
              {
                text: "2-2 WebGL",
                link: "/2-2",
                items: [
                  { text: "2-1 WebGL", link: "/2-1" },
                  {
                    text: "2-2 WebGL",
                    link: "/2-2",
                    items: [
                      { text: "2-1 WebGL", link: "/2-1" },
                      { text: "2-2 WebGL", link: "/2-2" },
                    ],
                  },
                ],
              },
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
            items: [
              { text: "cesium知识点", link: "/Cesium知识点" },
              { text: "cesiumjs杂记", link: "/cesium" },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/AisinGioroZhang" },
    ],
    footer: {
      message: "这是一个博客，多数内容来自网络，如有侵权请联系我删除",
    },
  },
});
