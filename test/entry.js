import axios from 'axios'
import ApiHub from '../dist/main.js'
import SiteApis from './static/api/site.json'

const options = {
  baseURL: '/api',
}
const axiosInstance = axios.create(options)
const ApiHubInstance = ApiHub.bind(axiosInstance)

const errHandlerConfig = {
  // targetKey: 'code',
  // validCode: ['0'],
  defaultMsg: '有個小錯誤, 錯誤代碼:{code}'
}

const errMap = {
  '10001': '人為錯誤',
  '10002': '輸入錯誤',
}



ApiHubInstance.registerErrHandler(errMap, errHandlerConfig)

// ApiHubInstance.onRequest(config => {
//   console.log(config)
// })
ApiHubInstance.onResponseError(err => {
  console.log(err)
})

const SiteModule = ApiHubInstance.createModule(SiteApis)
SiteModule.getSiteInfo()
