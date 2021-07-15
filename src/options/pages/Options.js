/*
 * @Author: WangJiaCheng
 * @Date: 2020-12-18 12:52:03
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:39:34
 * @Description:
 */
import React from 'react'
import { Tabs } from 'antd'

import './index.less'

 function Options () {
   return (
     <div className="options">
      <Tabs tabPosition="left" type="card">
        <Tabs.TabPane tab="系统" key="1">
          系统配置
        </Tabs.TabPane>
        <Tabs.TabPane tab="帮助" key="3">
          帮助联系
        </Tabs.TabPane>
      </Tabs>
     </div>
   )
 }

export default Options
