// import Api from '../../dist/main.js'
const Api = require('../dist/main.js').default
const SiteApis = require('./static/api/site.json')

console.log(Api)

const options = {
  baseURL: '/api',
}

const errHandlerConfig = {
  // targetKey: 'code',
  validCode: ['0'],
}

const errMap = {
  '10001': '人為錯誤',
  '10002': '輸入錯誤',
}



const ApiInstance = Api.create(options)

ApiInstance.registerErrorHandler(errMap, errHandlerConfig)

// ApiInstance.onRequest(config => {
//   console.log(config)
// })
ApiInstance.onResponse(res => {
  console.log(res)
})
ApiInstance.onResponseError(err => {
  alert(err)
})

const SiteModule = ApiInstance.createModule(SiteApis)
SiteModule.getSiteInfo()
