import layout from '@/layout'
const documetRouter = {
  path: '/document',
  component: layout,
  redirect: 'noRedirect',
  name: 'Document',
  meta: {
    title: 'Document',
    icon: 'caomei',
  },
  children: [
  {
    path: 'Vue',
    component: () => import('@/views/document/Vue/index.vue'),
    name: 'VueDemo',
    meta: { title: 'Vue' }
  },
  {
    path: 'Pinia',
    component: () => import('@/views/document/Pinia/index.vue'),
    name: 'PianiaDeom',
    meta: { title: 'Pinia' }
  },
  {
      path: 'VueRouter',
      component: () => import('@/views/document/VueRouter/index.vue'),
      name: 'VueRouterDeom',
      meta: { title: 'VueRouter' }
    },
    {
      path: 'Vite',
      component: () => import('@/views/document/Vite/index.vue'),
      name: 'ViteDeom',
      meta: { title: 'Vite' }
    },
    {
      path: 'Element',
      component: () => import('@/views/document/ElementUi/index.vue'),
      name: 'ElementUiDeom',
      meta: { title: 'ElementUi' }
    },
    {
      path: 'VueUse',
      component: () => import('@/views/document/VueUse/index.vue'),
      name: 'VueUseDeom',
      meta: { title: 'VueUse' }
    },
    {
      path: 'Webpack',
      component: () => import('@/views/document/Webpack/index.vue'),
      name: 'WebpackDeom',
      meta: { title: 'Webpack' }
    }
  ]
}

export default documetRouter