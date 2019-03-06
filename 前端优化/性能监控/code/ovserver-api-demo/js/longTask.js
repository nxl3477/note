
// 监测代码 写法 1 
function obser() {
  const observer = new PerformanceObserver((list) => {
    console.log('观察者api', list.getEntries())
    for(const entry of list.getEntries()) {
      console.log(entry.name)
      console.log(entry.entryType)
      console.log(entry.startTime)
      console.log(entry.duration)
    }
  })
  
  observer.observe({entryTypes: ["longtask"]})
}

// obser()

// 监测长时代码 写法 2
function Timing() {
  if("PerformanceLongTaskTiming" in window) {
    obser()
  }
}


Timing()


// 监测运行事件过长的代码片段
var obj = {

  test() {
    for(var i = 0; i < 5000;  i++) {
    
    }
  }
}




obj.test()




