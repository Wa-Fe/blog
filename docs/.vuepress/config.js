module.exports = {
  host: "localhost",
  title: 'Wa_Fe',  // 设置网站标题
  // dest: './dist',    // 设置输出目录
  // base: '/blog/', // 设置站点根路径
  // repo: 'https://github.com/txs1992/mt-blog' // 添加 github 链接
  home:false,
  themeConfig: {
    search: false,
    sidebar: [
      {
        title: "vue",
        // path: '/guide/vue/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          { title: "在线CDN引入", path: "/guide/vue/articleone" },
          { title: "组件的懒加载", path: "/guide/vue/article1" },
          { title: "vue快速打包发布", path: "/guide/vue/article3" },
        ],
      },
      {
        title: "js",
        // path: '/guide/vue/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          { title: "常用方法", path: "/guide/js/commonlyUsed" },
          { title: "常用正则", path: "/guide/js/commonlyRegular" },
          { title: "常用数组方法", path: "/guide/js/array1" },
          { title: "正则数组方法", path: "/guide/js/regex1" },
          { title: "获取url参数", path: "/guide/js/article1" },
        ],
      },
      {
        title: "flutter",
        // path: '/guide/vue/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          { title: "添加权限报错", path: "/guide/flutter/articleOne" },
          { title: "网络调试", path: "/guide/flutter/articleThree" },
          { title: "Android证书", path: "/guide/flutter/articleTwo" },
          { title: "替换启动的图标", path: "/guide/flutter/article4" },
          { title: "gradle慢", path: "/guide/flutter/article5" },
        ],
      },
      {
        title: "UniApp",
        // path: '/guide/vue/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          { title: "ios配置", path: "/guide/uniapp/articleone" },
          { title: "wxmltocanvas", path: "/guide/uniapp/articletwo" },
        ],
      },
    ],
  },
  head: [
    ["link", { rel: "stylesheet", href: "/styles/index.styl" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
};
