import vue from 'vue'

import Toast from './index.vue'
const ToastConstructor = vue.extend(Toast)

function showToast(text, duration = 2000) {

  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text,
        showWrap: true,
        showContent: true//在隐藏组件时，显示隐藏动画
      }
    }
  })
  console.log(toastDom);
  document.body.appendChild(toastDom.$el)
  setTimeout(() => {
    toastDom.showContent = false
  }, duration - 1750)
  setTimeout(() => {
    toastDom.showWrap = false
  }, duration)
}

export default function registryToast() {
  vue.prototype.$toast = showToast
}
