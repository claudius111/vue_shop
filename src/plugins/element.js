import Vue from 'vue'
// 局部要挂载的就在单独导入，同一个包，放在一个{}，逗号隔开
import { Button, Message } from 'element-ui'
// 这里是导入全部elemnt-ui
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use()声明加入全局
Vue.use(Element)
Vue.use(Button)
Vue.prototype.$message = Message
