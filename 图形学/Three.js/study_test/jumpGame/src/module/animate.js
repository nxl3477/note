export default function animate(callback) {
  requestAnimationFrame(function recursion() {
    callback()
    requestAnimationFrame(recursion)
  })
}