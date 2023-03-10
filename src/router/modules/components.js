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
      component: () => import('@/views/components-demo/loading.vue'),
      name: 'LoadingDemo',
      meta: { title: 'Loading' }
    },
  ]
}
export default componentsRouter