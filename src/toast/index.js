import vue from 'vue'

import Toast from './index.vue'
const ToastConstructor = vue.extend(Toast)

function showToast(text, duration = 200) {

  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text,
        show: true
      }
    }
  })
  document.body.appendChild(toastDom)
  setTimeout(() => {
    toastDom.show = true
  }, duration)
}

export default function registryToast() {
  vue.prototype.$toast = showToast
}
