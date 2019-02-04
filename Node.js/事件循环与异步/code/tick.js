setTimeout(() => {
  console.log(1)
}, 0)

setImmediate(() => {
  console.log(2)
})


process.nextTick(() => {
  console.log(3)
})

new Promise((resolve, reject) => {
  console.log(4)
  resolve(4)
}).then(() => {
  console.log(5)
})


console.log(6)
2 6 5 3 1 2