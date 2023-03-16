import Layout from '@/layout'
const VueuseRouter = {
  path: '/Vueuse',
  component: Layout,
  redirect: '/Vueuse/State/createGlobalState',
  name: 'Vueuse',
  meta: {
    title: 'Vueuse',
    icon: 'binggun'
  },
  children: [
    {
      path: 'State',
      component: () => import('@/views/Vueuse/State/index'),
      name: 'StateDemo',
      meta: { title: 'State(状态)' },
      redirect: '',
      children: [
        {
          path: 'createGlobalState',
          component: () => import('@/views/Vueuse/State/createGlobalState'),
          name: 'createGlobalState',
          meta: { title: 'createGlobalState' }
        },
        {
          path: 'createInjectionState',
          component: () => import('@/views/Vueuse/State/createInjectionState'),
          name: 'createInjectionState',
          meta: { title: 'createInjectionState' }
        }
      ]
    },
  ]
}

export default VueuseRouter