var width = 400
var height = 400

// 获取demo-canvas
var canvas = document.getElementById('demo-canvas')

// 创建渲染者
var renderer = new THREE.WebGLRenderer({
  // 放入 canvas 对象
  canvas: canvas 
})
// 创建场景
var scene = new THREE.Scene()
// 创建正焦相机
var camera = new THREE.OrthographicCamera(-width /2, width /2, height / 2, -height/2, -1000, 1000)


// 设置清屏颜色
renderer.setClearColor(new THREE.Color(0x000000))
// 设置渲染区间
renderer.setSize(400, 400)

// 定义一个形状 -- 这里要绘制三角形
var triangleShape = new THREE.Shape()
// 移动起始位置到
triangleShape.moveTo(0, 100)
// 绘制一个图片 ，这里从起始点 0,100 -> -100, -100 -> 100, -100 -> 0, 100  三条线构成了一个三角形
triangleShape.lineTo(-100, -100)
triangleShape.lineTo(100, -100)
triangleShape.lineTo(0, 100)


// 根据刚刚定义的形状， 创建一个几何体
var geometry = new THREE.ShapeGeometry(triangleShape)
// 定义材质
var material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  // 默认只有一个面, 需要正反面都渲染出来(否者只能渲染法向量所对应的面)
  side: THREE.DoubleSide
})

// 创建网格， 网格通过几何体 + 材质创建
// geometry 相当于顶点着色器， 定义几何体的形状
// material 类似于片元着色器 - 给顶点序列上色
var mesh = new THREE.Mesh(geometry, material)
// 定义mesh出现的位置
mesh.position.x = 0
mesh.position.y = 0
mesh.position.z = 1

scene.add(mesh)

// 将相机调至原点
camera.position.x = 0
camera.position.y = 0
camera.position.z = 0
// 调整camera的朝向 0, 0, 1 (也就是我们放置三角形的位置)
camera.lookAt(new THREE.Vector3(0, 0, 1))

// 让三角形旋转起来
var currentAngle = 0
var lastTimestamp = Date.now()

var animate = function() {
  var now = Date.now()
  var duration = now - lastTimestamp
  lastTimestamp = now
  currentAngle = currentAngle + duration / 1000 * Math.PI
}

var render = function() {
  animate()
  // 控制mesh 的旋转情况
  mesh.rotation.set(0, currentAngle, 0)
  // 渲染场景和相机
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()