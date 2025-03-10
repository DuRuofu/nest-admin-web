export default {
  path: "/example",
  meta: {
    icon: "tdesign:play-demo",
    title: "示例页面",
    rank: 30
  },
  children: [
    {
      path: "/example/mqtt",
      name: "mqtt",
      component: () => import("@/views/example/mqtt/index.vue"),
      meta: {
        title: "mqtt客户端"
      }
    },
    {
      path: "/example/echarts",
      name: "echarts",
      component: () => import("@/views/example/echarts/index.vue"),
      meta: {
        title: "echarts图表"
      }
    }
  ]
} satisfies RouteConfigsTable;
