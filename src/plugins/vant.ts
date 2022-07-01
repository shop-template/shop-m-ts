import { Toast } from 'vant'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 })
Toast.allowMultiple()

export default function (app: any) {
  app.use(Toast)
}
