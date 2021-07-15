/*
 * @Author: WangJiaCheng
 * @Date: 2021-07-14 20:50:01
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:02:21
 * @Description: home
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Store from '@/store/store'

import Home from './pages/Home'

ReactDOM.render(
  <Provider store={Store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);