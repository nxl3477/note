import Camera from '../object/scene/Camera'
// import Renderer from '../object/scene/'
import Cube from '../object/Cube'
import SpotLight from '../object/SpotLight'
import animte from '../module/animate'
import AxisHelper from '../object/helper/AxisHelper'
import Plane from '../object/Plane'
class GamePage {
  constructor() {
    
  }

  init() {
    // 创建canvas 
    const canvas = wx.createCanvas()
    // 创建场景
    const scene = new THREE.Scene();
    scene.background = '#ffffff'
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    
    // renderer.shadowMapEnabled = true;
    renderer.setClearColor(new THREE.Color(0xFFFFFF))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true; 
    renderer.shadowMapEnabled = true; 
    renderer.shadowMapType = THREE.PCFSoftShadowMap

    // 创建相机
    const camera = new Camera().instance
    // 添加相机
    scene.add(camera)
    camera.updateProjectionMatrix();



    // 创建面 
    const plane = new Plane
    scene.add(plane.instance)
   


    //创建立方体
    const cube = new Cube()
    scene.add(cube.instance)

    // 加个环境光 
    // var light = new THREE.AmbientLight(0xffffff, .4); 
    // light.position.set(100, 1000, 1000)
    // scene.add( light );
    // renderer.render(scene, camera)

    const spotLight = new SpotLight().instance
    scene.add(spotLight)

    // 聚光灯辅助线
    const spotLightHelper = new THREE.SpotLightHelper( spotLight );
    scene.add( spotLightHelper );


    //辅助线
    // X轴是红色. Y轴是绿色. Z轴是蓝色
    const axes = new AxisHelper();
    scene.add(axes.instance);

    // camera.position.set(-40, 40, 40)
    camera.position.set(100, 80, 40)
    let index = 0
    
    // animte(function render() {
    //   camera.lookAt(scene.position)
    //   renderer.render(scene, camera)
    // })

  }

  show() {

  }

  hide() {

  }
}


export default GamePage