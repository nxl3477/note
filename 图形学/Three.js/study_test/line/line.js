// 1. 创建场景
const scene =new THREE.Scene()
// 透视相机
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 ); 

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement );

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 ); 

// 定义线条材质
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// 设置线条的的定点 -  线条不是链接定点与末尾的点， 而是连接所有点的点

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometry.vertices.push(new THREE.Vector3( 1, 30, 0) );
geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

var line = new THREE.Line( geometry, material );

scene.add(line)

renderer.render( scene, camera );
// 加入html