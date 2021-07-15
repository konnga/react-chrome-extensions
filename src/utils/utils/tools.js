/*
 * @Author: WangJiaCheng
 * @Date: 2020-07-30 14:32:59
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:26:23
 * @Description:
 */
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isYesterday from 'dayjs/plugin/isYesterday'

dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(isYesterday)

 /**
 * 生成带Get参数的URL
 * @param {String} url      原来的url
 * @param {Object} params   get 参数
 */
export function generateUrlWithGetParam(url, params) {
 let newUrl = url;
 if (params && Object.keys(params).length >= 1) {
   const newParams = params;
   if (Object.keys(newParams).length >= 1) {
     newUrl += `${url.indexOf('?') >= 0 ? '&' : '?'}${queryStringify(newParams)}`
   }
 }
 return newUrl
}

export function queryStringify(obj) {
  return Object.keys(obj).map((key) => {
    return `${key}=${obj[key]}`
  }).join('&')
}

/**
 * 判断当前日期是否是昨天
 */
export function isYest (day) {
  return dayjs(`${dayjs().year()}-${day}`).isYesterday()
}

/**
 * 判断当期日期是否是周末
 */
export function isNotWeek () {
  return dayjs().day() !== 6 && dayjs().day() !== 0
}

/**
 * 获取当前是周几
 * 周六：6，周日：0，周一：1
 */
export function currentDay () {
  return dayjs().day()
}

export function isSameDate (date1, date2, f = '') {
  return dayjs(date1).isSame(dayjs(date2), f)
}

// 当前时间是在某个时间之后
export function isDateAfter (date) {
  return dayjs().isSameOrAfter(`${dayjs().format('YYYY-MM-DD')} ${date}`)
}

// 防抖
export function debounce(func, wait, immediate) {
  let timeout
  return function() {
  	const context = this
    const args = arguments
  	clearTimeout(timeout);
  	timeout = setTimeout(function() {
  		timeout = null
  		if (!immediate) func.apply(context, args)
  	}, wait)
  	if (immediate && !timeout) func.apply(context, args)
  };
}

/**
 * 验证 邮箱
 * 提示: intl.get('hzero.common.validation.email').d('邮箱格式不正确')
 */
 export const EMAIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

 /**
 * 验证 手机,
 * 提示: intl.get('hzero.common.validation.phone').d('手机格式不正确')
 */
export const PHONE = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/

export function getToken() {
  return localStorage.getItem('token')
}
