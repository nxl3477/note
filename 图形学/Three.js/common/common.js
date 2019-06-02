function common() {
  var scene = new THREE.Scene()
  
  var renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMapEnabled = true
  // 创建面
  var planeGeometry = new THREE.PlaneGeometry(60, 30)
  // 材质
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)
  
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(15, 0, 10)
  scene.add(plane)

  var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)

  return {
    scene,
    renderer,
    plane,
    camera
  }
}