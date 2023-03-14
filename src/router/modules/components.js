import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'binggan'
  },
  children: [
    {
      path: 'audio',
      component: () => import('@/views/VideoDance'),
      name: 'AudioDemo',
      meta: { title: 'Audio' }
    },
    {
      path: 'loading',
      component: () => import('@/views/Loaders/'),
      name: 'LoadingDemo',
      meta: { title: 'Loading' }
    },
    {
      path: 'Button',
      component: () => import('@/views/Button/index.vue'),
      name: 'ButtonDemo',
      meta: { title: 'Button' }
    },
  ]
}
export default componentsRouter