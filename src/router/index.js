export const constantRouterMap = [
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      type: "user",
      icon: 'el-icon-edit-outline',
      title: '博客列表'
    },
  },
  {
    path: '/social',
    name: 'Social',
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    }
  }
]