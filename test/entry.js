// import Api from '../../dist/main.js'
const Api = require('../dist/main.js').default
const SiteApis = require('./static/api/site.json')

console.log(Api)

const options = {
  baseURL: '/api',
}


const ApiInstance = Api.create(options)

ApiInstance.onRequest(config => {
  console.log(config)
})
ApiInstance.onError(err => {
  console.log(err)
})

const SiteModule = ApiInstance.createModule(SiteApis)
SiteModule.getSiteInfo()
