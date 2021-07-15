/*
 * @Author: WangJiaCheng
 * @Date: 2021-05-16 11:13:15
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:18:42
 * @Description: mobx store
 */
import DemoStore from './DemoStore'

const demoStore = new DemoStore()

const Store = {
  demoStore
}

// window.appStore = Store

export default Store
