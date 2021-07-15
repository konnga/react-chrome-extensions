/*
 * @Author: WangJiaCheng
 * @Date: 2021-05-16 11:24:35
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:20:50
 * @Description:  fund store
 */
import { makeAutoObservable } from 'mobx'

class DemoStore {
  list = []

  constructor() {
    makeAutoObservable(this)
  }

  setList(list) {
    this.list = list
  }
}

export default DemoStore
