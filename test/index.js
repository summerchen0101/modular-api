import Api from '../src/main'
import UserApis from './api/user.json'
import PostApis from './api/post.json'

console.log(UserApis)

const ApiInstance = Api.create({baseURL: 'https://jsonplaceholder.typicode.com'})
const UserModule = ApiInstance.createModule('User', UserApis)
// const PostModule = ApiInstance.createModule('Post', PostApis)

UserModule.getList().then(res=> {
  console.log(res)
})
UserModule.getItem({params: {id: 3}, query: {time: new Date().getTime()}}).then(res=> {
  console.log(res)
})
UserModule.addItem({query: {time: new Date().getTime()}, data: {name: 'summer'}}).then(res=> {
  console.log(res)
})
UserModule.addItem({query: {time: new Date().getTime()}, data: {name: 'summer', age: 23}}, {type: 'form'}).then(res=> {
  console.log(res)
})

