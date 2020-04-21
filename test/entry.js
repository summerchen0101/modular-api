import axios from 'axios'
import ApiHub from '../dist/main.js'
import SiteApis from './static/api/site.json'
import errCodes from './static/errCodes.json'

const options = {
  baseURL: '/api',
}
const axiosInstance = axios.create(options)
const apiHubInstance = ApiHub.bind(axiosInstance)

const errHandlerConfig = {
  // targetKey: 'code',
  // validCode: ['0'],
  defaultMsg: '有個小錯誤, 錯誤代碼:{code}'
}

apiHubInstance.registerErrHandler(errCodes, errHandlerConfig)

// apiHubInstance.onRequest(config => {
//   console.log(config)
// })
apiHubInstance.onResponseError(err => {
  console.log(err)
})

const SiteModule = apiHubInstance.createModule(SiteApis)
SiteModule.getSiteInfo()
