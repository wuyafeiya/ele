import layout from '@/layout'
const documetRouter = {
  path: '/document',
  component: layout,
  redirect: 'noRedirect',
  name: 'Document',
  meta: {
    title: 'Document',
    icon: 'component',
  },
  children: [
  {
    path: 'Vue',
    component: () => import('@/views/Vue/index.vue'),
    name: 'VueDemo',
    meta: { title: 'Vue' }
  },
  {
    path: 'Pinia',
    component: () => import('@/views/Pinia/index.vue'),
    name: 'PianiaDeom',
    meta: { title: 'Pinia' }
  },
  {
      path: 'VueRouter',
      component: () => import('@/views/VueRouter/index.vue'),
      name: 'VueRouterDeom',
      meta: { title: 'VueRouter' }
    },
    {
      path: 'Vite',
      component: () => import('@/views/Vite/index.vue'),
      name: 'ViteDeom',
      meta: { title: 'Vite' }
    },
    {
      path: 'Element',
      component: () => import('@/views/ElementUi/index.vue'),
      name: 'ElementUiDeom',
      meta: { title: 'ElementUi' }
  }
  ]
}

export default documetRouter