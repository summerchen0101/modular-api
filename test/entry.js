import axios from 'axios'
import ApiHub from '../dist/main.js'
import errCodes from './static/errCodes.json'
import resStatus from './static/resStatus.json'

const options = {
  baseURL: '/api',
}
const axiosInstance = axios.create(options)
const apiHubInstance = ApiHub.bind(axiosInstance)

const errHandlerConfig = {
  // targetKey: 'code',
  validCode: ['0'],
  defaultMsg: '有個小錯誤, 錯誤代碼:{code}',
  errMap: errCodes,
  statusMap: resStatus
}

apiHubInstance.registerErrHandler(errHandlerConfig)

// apiHubInstance.onRequest(config => {
//   console.log(config)
// })
apiHubInstance.onResponseError(err => {
  console.log(err)
})

apiHubInstance.registerMultiModule({
  site: require('./static/api/site.json'),
  user: require('./static/api/user.json'),
})
const apiHub = apiHubInstance.getModules()
apiHub.site.getSiteInfo({foo: 'bar'}, {params: {fooooo: 'barrrr'}})
apiHub.user.updateProfile({foo: 'bar'})
apiHub.user.getUser({id: 123, name: 'ruby'})
apiHub.user.register({id: 123, name: 'ruby'}, {params: {foo: 'bar'}})
