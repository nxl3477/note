class GamePage {
  constructor() {
    
  }

  init() {
    // 创建canvas 
    const canvas = wx.createCanvas()
   
    var scene = new THREE.Scene();    // 场景容器, 用来保存并跟踪所有我们想渲染的物体
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    // 相机变量, 我们能够在渲染好的场景scence里看到什么
    var renderer = new THREE.WebGLRenderer({
      canvas
    });    
    
    // 渲染器对象, 负责计算指定相机角度下浏览器中scene的样子
    renderer.setClearColor(0xEEEEEE, 1.0);    // 将renderer对象的背景色设置为0xEEEEEE
    renderer.setSize(window.innerWidth, window.innerHeight);    // 让renderer对象将scene渲染成多大尺寸
    renderer.shadowMapEnabled = true;    // 告诉渲染器需要阴影

    var axes = new THREE.AxisHelper(20);    // axes坐标轴对象
    scene.add(axes);    // 把坐标轴添加到场景中去

    var planceGeometry = new THREE.PlaneGeometry(60, 20);    // PlaneGeometry: 翻译 平面几何    (参数: 宽60, 高20)
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });    // MeshLambertMaterial: 翻译 网格材质    (用来设置平面的外观, 颜色，透明度等)
    var plane = new THREE.Mesh(planceGeometry, planeMaterial);    // 把这2个对象合并到一个名为plane(平面)的Mesh(网格)对象中
    plane.receiveShadow = true;    // 平面接收阴影
    plane.rotation.x = -0.5*Math.PI;    // 绕x轴旋转90度
    plane.position.x = 15;    // 平面坐标位置
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);    // 将平面添加到场景

    var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);    // Geometry: 翻译 立方体几何
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: '#12B7F5'});    // 立方体是0xff0000颜色 
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);    // 把立方体和他的外观合并一下
    cube.castShadow = true;    // 立方体的阴影
    cube.position.x = -3;    // 立方体的坐标位置
    cube.position.y = 3;
    cube.position.z = 0;
    scene.add(cube);    // 将立方体添加进去场景中去

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);    // 球体
    var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff});    // 球体的外观
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);    // 把球体和外观合并一下
    sphere.castShadow = true;    // 球的阴影
    sphere.position.x = 20;    // 球体的位置
    sphere.position.y = 4;
    sphere.position.z = 2;
    scene.add(sphere);    // 把球体添加进场景去

    camera.position.x = -30;    
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);    // lookAt函数指向场景的中心

    // 添加一个光源
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;    // 让光源产生阴影
    scene.add(spotLight);

    renderer.render(scene, camera);    // 使用渲染器渲染

  }

  show() {

  }

  hide() {

  }
}


export default GamePage