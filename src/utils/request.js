import { message } from 'antd'
import { generateUrlWithGetParam, getToken } from './utils'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errortext = response.statusText;
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

export default function request(url, options) {
  const defaultOptions = {
    withCredentials: true // 允许跨域
  }
  let newUrl = url
  const reqOptions = { ...defaultOptions, ...options }

  if (reqOptions.query) {
    const filterNullQuery = reqOptions.query;
    newUrl = generateUrlWithGetParam(url, filterNullQuery);
  }

  if (
    reqOptions.method === 'POST'
        || reqOptions.method === 'PUT'
        || reqOptions.method === 'DELETE'
        || reqOptions.method === 'PATCH'
  ) {
    if (!(reqOptions.body instanceof FormData)) {
      reqOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        ...reqOptions.headers
      }
      reqOptions.body = JSON.stringify(reqOptions.body)
    } else {
      reqOptions.headers = {
        Accept: 'application/json',
        ...reqOptions.headers
      }
    }
  }

  // 设置token
  const token = getToken()
  if (token && reqOptions.token) {
    reqOptions.headers = {
      ...reqOptions.headers,
      Authorization: `Bearer ${token}`
    };
  }

  let fetchChain = fetch(newUrl, reqOptions)
    .then(checkStatus)
    .then((res) => {
      if (reqOptions.responseType === 'text') {
        return res.text()
      } else if (reqOptions.token) {
        return res.json()
      } else {
        return res.json()
      }
    })
    fetchChain = fetchChain.catch(async (e) => {
      if (e.response) {
        const errorText = await e.response.json()
        if (errorText.message && errorText.code) {
          message.error(errorText.message)
        }
      }
    })

  return fetchChain
}
