const canvas = document.getElementById('canvas')

// 创建一个场景
const scene = new THREE.Scene();
// 创建一个透视相机 ， 

// 创建透视相机， 传入视野角度， 长宽比， 近截面和远截面
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

// 创建一个几何体
const geometry = new THREE.BoxGeometry(1,1,1)
// 添加材质, 添加一个绿色的材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 将材质和几何体合并成一个网格对象， 使其可以在场景中自由移动
const cube = new THREE.Mesh(geometry, material)
// 将网格添加入场景
scene.add(cube)

// 调整相机位置
camera.position.z = 5

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器渲染尺寸
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild( renderer.domElement );



// 渲染循环
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()