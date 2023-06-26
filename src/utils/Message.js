import { createApp } from 'vue'
const MessageBox = {
  props: {
    msg: {
      type: String,
      require:true
    }
  },
  render: function (createElement, context) {
    const {$props,$emit}=context
    return <div><button>点击</button></div>
  }
}
export function ShowMsg(msg, onClick) {
  
}
