export default {
  path: "/about",
  redirect: "/about/index",
  meta: {
    icon: "ix:about",
    title: "关于页面",
    rank: 99
  },
  children: [
    {
      path: "/about/index",
      name: "about",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: "关于"
      }
    }
  ]
} satisfies RouteConfigsTable;
