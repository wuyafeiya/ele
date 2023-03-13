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
      path: "LargeFileUpload",
      component: () => import('@/components/LargeFileUpload'),
      name: 'LargeFileUpload',
      meta: { title: 'LargeFileUpload' }
    },
    {
      path: "DragAndDrop",
      component: () => import('@/components/dragAndDrop'),
      name: 'DragAndDrop',
      meta: { title: 'DragAndDrop' }
    }
  ]
}

export default Uploadfile