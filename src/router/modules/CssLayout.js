import Layout from '@/layout'
export default {
  path: '/CssLayout',
  component: Layout,
  redirect: 'noRedirect',
  name: 'CssLayout',
  meta: {
    title: 'CssLayout',
    icon: 'lajiao'
  },
  children: [
    {
      path: 'Flex',
      component: () => import('@/views/cssLayout/Flex'),
      name: 'FlexDemo',
      meta: { title: 'Flex' }
    },
    {
      path: 'Grid',
      component: () => import('@/views/cssLayout/Grid'),
      name: 'GridDemo',
      meta: { title: 'Grid' }
    },
    {
      path: 'WaterfallsFlow',
      component: () => import('@/views/cssLayout/WaterfallsFlow'),
      name: 'WaterfallsFlow',
      meta: { title: 'WaterfallsFlow' }
    },
  ]
}