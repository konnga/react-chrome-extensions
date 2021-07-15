/*
 * @Author: WangJiaCheng
 * @Date: 2021-07-15 09:29:49
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:30:06
 * @Description: Options 配置页面
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'

import Store from '@/store/store'
import Options from './pages/Options';

ReactDOM.render(
  <Provider store={Store}>
    <Options />
  </Provider>,
  document.getElementById('root')
)
