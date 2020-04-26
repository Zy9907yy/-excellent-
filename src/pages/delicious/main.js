import Vue from 'vue'
import App from './delicious'

// import cuCustom from '../../colorui/components/cu-custom'

const app = new Vue(App)
app.$mount()
// Vue.component('cu-custom', cuCustom)

export default {
  config: {
    // 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
    backgroundTextStyle: 'light', // 下拉背景字体、loading 图的样式，仅支持dark和light
    navigationBarBackgroundColor: '#fff', // 导航栏背景颜色
    navigationBarTitleText: '美食', // 导航栏标题文字内容
    navigationBarTextStyle: 'black' // 导航栏标题颜色，仅支持black和white

  }
}
