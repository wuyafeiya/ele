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
      component: () => import('@/components/audioDance/index.vue'),
      name: 'AudioDemo',
      meta: { title: 'Audio' }
    },
    {
        path: 'audio1',
        component: () => import('@/views/Vue/index.vue'),
        name: 'VueDemo',
        meta: { title: 'Vue' }
    }
  ]
}
export default componentsRouter