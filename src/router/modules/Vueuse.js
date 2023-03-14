import Layout from '@/layout'
const VueuseRouter = {
  path: '/Vueuse',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Vueuse',
  meta: {
    title: 'VueuseRouter',
    icon: 'binggun'
  },
  children: [
    {
      path: 'Mouse',
      component: () => import('@/views/Vueuse'),
      name: 'mouseDemo',
      meta: { title: 'Mouse' }
    },
    {
      path: 'Mouse-out',
      component: () => import('@/views/Vueuse'),
      name: 'mouseDemo',
      meta: { title: 'Mouse-out' }
    },
  ]
}

export default VueuseRouter