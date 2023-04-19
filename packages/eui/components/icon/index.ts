import type { App, Plugin } from 'vue'
import Icon from './src/icon.vue'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('EIcon', Icon)
  },
}

export const EIcon = Icon
