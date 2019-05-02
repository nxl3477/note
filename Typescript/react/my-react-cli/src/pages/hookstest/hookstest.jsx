import React, { useState, useEffect } from 'react'

const useCount = ( initialCount = 0 ) => {
  const [ count, setCount ] = useState(initialCount)
  return [count, () => setCount(count + 1), () => setCount(count - 1)]
}



const Hookstest = () => {
  const [ count, increment, decrement ] = useCount(0)

  useEffect(() => {
    console.log("更新渲染阶段")
    document.title = `标题-${count} times`
    return () => {
      console.log("卸载阶段")
    }
  }, [count])

  return (
    <div>
      count: { count }
      {/* 点击事件触发setCount方法 */}
      <button onClick={ increment }>增加Count</button>
    </div>
  )
}

export default Hookstest