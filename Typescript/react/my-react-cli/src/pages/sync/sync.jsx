import React, { Suspense, Component, lazy } from 'react'
import { useFetch } from 'react-hooks-fetch'

// React 自带的lazy组件，自己会编译 （避免被webpack打包成js）
const LazyComp = lazy(() => import("./lazy"))

// function fetchApi() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve('data resolved')
//     }, 3000)
//   })
//   return promise
// }

// 创建Fetcher 
// var cached = {}
// const createFetcher = promiseTask => {
//   let ref = cached
//   return () => {
//     // 返回一个promise
//     const task = promiseTask()
//     task.then(res => {
//       ref = res
//     })
//     console.log('进入ref === cached的判断')
//     if (ref === cached) {
//       throw task
//     }
//     // 得到结果输出
//     console.log('🍎', ref)
//     return ref
//   }
// }

// const requestData = createFetcher(fetchApi)
// function SuspenseComp() {
//   const data = requestData()
//   return <p className="name">{data}</p>
// }

function SuspenseComp() {
  const {error, data} = useFetch("http://jsonplaceholder.typicode.com/posts")
  if( error ) return <span>出错了🙂</span>
  if( !data ) return null
  return <span>result{data[0].title}</span>
}


class Test extends Component {

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading</div>} >
          <SuspenseComp />
          <LazyComp />
        </Suspense>
      </div>
    )
  }
}
export default Test