import layout from '@/layout'

const CanvasRouter = {
  path: '/Canvas',
  name: 'Canvas',
  redirect: 'noRedirect',
  component: layout,
  meta: {
    title: 'Canvas',
    icon: 'dangao'
  },
  children: [
    {
      path: "SignatureBoard",
      name: 'SignatureBoard',
      component: () => import('@/views/Canvas/SignatureBoard'),
      meta: { title: 'SignatureBoard' }
    },
    {
      path: "Blackboard",
      name: 'Blackboard',
      component: () => import('@/views/Canvas/Blackboard'),
      meta: { title: 'Blackboard' }
    }
  ]
}

export default CanvasRouter