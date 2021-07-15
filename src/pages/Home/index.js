/*
 * @Author: WangJiaCheng
 * @Date: 2021-07-15 09:27:37
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 10:17:55
 * @Description:
 */
import React from 'react'

import logo from '@/assets/logo.svg'

import './index.less'

function Home() {
  return (
    <div className="home">
      <div>
        Home
      </div>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Home
