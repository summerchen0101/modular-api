import Api from '../dist/main.js'
import SiteApis from './static/api/site.json'

const options = {
  baseURL: '/api',
}

const errHandlerConfig = {
  // targetKey: 'code',
  validCode: ['0'],
  defaultMsg: '有個小錯誤, 錯誤代碼:{code}'
}

const errMap = {
  '10001': '人為錯誤',
  '10002': '輸入錯誤',
}


const ApiInstance = Api.create(options)

ApiInstance.registerErrHandler(errMap, errHandlerConfig)

// ApiInstance.onRequest(config => {
//   console.log(config)
// })
ApiInstance.onResponseError(err => {
  console.log(err)
})

const SiteModule = ApiInstance.createModule(SiteApis)
SiteModule.getSiteInfo()
