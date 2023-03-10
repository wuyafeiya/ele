import layout from '@/layout'
const Uploadfile = {
  path: '/UploadFile',
  component: layout,
  redirect: 'noRedirect',
  name: 'UploadFile',
  meta: {
    title: 'UploadFile',
    icon: 'naixi',
  },
  children: [
    {
      path: "Cut-out",
      component: () => import('@/components/CutOut'),
      name: 'Cut-out',
      meta: { title: 'Cut-out' }
    },
    {
      path: "Cut-out1",
      component: () => import('@/components/CutOut'),
      name: 'Cut-out',
      meta: { title: 'Cut-out' }
    }
  ]
}

export default Uploadfile