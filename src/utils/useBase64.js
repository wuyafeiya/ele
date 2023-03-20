export function useBase64(target, options) {
  let base64 = ''
  try {
    let _target
    target.value?_target=target.value:_target=target
    if (_target == null) {
      return ''
    } else if (typeof _target === 'string') {
      return (base64 = blobToBase64(new Blob([_target], { type: 'text/plain' })))
    } else if (_target instanceof Blob) {
      console.log(123123123)
      return base64 = blobToBase64(_target)
    } else if (_target instanceof ArrayBuffer) {
      return base64 = window.btoa(String.fromCharCode(...new Uint8Array(_target)))
    } else if (_target instanceof HTMLCanvasElement) {
      return base64 =_target.toDataURL()
    } else if (_target instanceof HTMLImageElement) {
      const img = _target.cloneNode(false) 
      img.crossOrigin = 'Anonymous'
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      return base64 = canvas.toDataURL()
    } else if (typeof _target === 'object') {
    } else {
    }
  } catch (err) { }
  return base64
}

// 加载图片
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve()
      }
      img.onerror = reject
    } else {
      resolve()
    }
  })
}
function blobToBase64(Blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = (e) => {
      resolve(e.target.result)
    }
    fr.onerror = reject
    fr.readAsDataURL(Blob)
  })
}
