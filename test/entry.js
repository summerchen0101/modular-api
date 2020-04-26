import axios from 'axios'
import ApiHub from '../dist/main.js'
import ErrorHandler from '../src/error'

const statusHandlerConfig = {
  templateKey: 'status',
  // path: '',
  map: require('./static/resStatus.json'),
  // defaultMsg: '請求狀態錯誤({status})',
  silentValue: status => status >= 200 && status < 300,
  handleMsg: (msg) => {
    console.warn(msg)
  }
}

const options = {
  baseURL: '/api',
  validateStatus: (status) => {
    ErrorHandler.register(status, statusHandlerConfig)
    return status >= 200 && status < 300
  }
}
const axiosInstance = axios.create(options)
const apiHubInstance = ApiHub.bind(axiosInstance)


const errCodeHandlerConfig = {
  templateKey: 'code',
  path: 'data.code',
  silentValue: ['0', 0],
  map: require('./static/errCodes.json'),
  defaultMsg: '錯誤發生',
  handleMsg: (msg, code) => {
    console.log(msg, code)
  }
}
const errMsgHandlerConfig = {
  templateKey: 'msg',
  path: 'data.data.msg',
  map: require('./static/errMsgs.json'),
  handleMsg: (msg) => {
    console.log(msg)
  }
}
axiosInstance.interceptors.response.use(res => {
  ErrorHandler.register(res, errCodeHandlerConfig)

  ErrorHandler.register(res, errMsgHandlerConfig)
  return res
})

// ErrorHandler.register(axiosInstance.interceptors.response.use, errCodeHandlerConfig)

apiHubInstance.registerMultiModule({
  site: require('./static/api/site.json'),
  user: require('./static/api/user.json'),
})
const apiHub = apiHubInstance.getModules()



// test...
apiHub.site.getSiteInfo({foo: 'bar'}, {params: {fooooo: 'barrrr'}})
apiHub.user.updateProfile({foo: 'bar'})
apiHub.user.getUser({id: 123, name: 'ruby'})
apiHub.user.register({id: 123, name: 'ruby'}, {params: {foo: 'bar'}})
