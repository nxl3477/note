const observer = new PerformanceObserver((list) => {
  for(const entry of list.getEntries()) {
    console.log(entry.name)
    console.log(entry.entryType)
    console.log(entry.startTime)
    console.log(entry.duration)
  }
})

// observer.observe({entryTypes: ["paint"]})


// 得到所有渲染阶段 fp, fcp 
window.onload = function() {
  const perforInfo = window.performance.getEntriesByType("paint")
  console.log('性能监控数据', perforInfo)
}
