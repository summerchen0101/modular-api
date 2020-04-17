import Api from '../dist/main.js'
import UserApis from './api/user.json'
import PostApis from './api/post.json'

console.log(Api)


const ApiInstance = Api.create({baseURL: 'https://jsonplaceholder.typicode.com'})

ApiInstance.onRequest(config => {
  console.log(config)
})
ApiInstance.onError(err => {
  console.log(err)
})
// const PostModule = ApiInstance.createModule('Post', PostApis)
ApiInstance.registerModule('user', UserApis)
ApiInstance.registerModule('post', PostApis)

const $api = ApiInstance.getModules()
$api.user.getList().then(res => {
  console.log(res)
})

// const UserModule = ApiInstance.createModule(UserApis)
// UserModule.getList().then(res=> {
//   console.log(res)
// })
// UserModule.getItem({params: {id: 3}, query: {time: new Date().getTime()}}).then(res=> {
//   console.log(res)
// })
// UserModule.addItem({query: {time: new Date().getTime()}, data: {name: 'summer'}}).then(res=> {
//   console.log(res)
// })
// UserModule.addItem({query: {time: new Date().getTime()}, data: {name: 'summer', age: 23}}, {type: 'form'}).then(res=> {
//   console.log(res)
// })

