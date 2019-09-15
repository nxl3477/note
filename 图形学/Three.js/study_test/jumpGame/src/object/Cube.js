class Cube {
  constructor(data) {
    data = data || {}
    const sideLen = data.sideLen || 20
    const planeColor = data.sideLen || 0xffff00
    const position = data.position || { x: 10, y: 10, z: 10 }

    //创建立方体
    const cubeGeometry = new THREE.CubeGeometry(sideLen, sideLen, sideLen)
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: planeColor })
        
    // 初始化网格
    this.instance = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // 开启接受阴影
    this.instance.receiveShadow = true
    // 开启投影
    this.instance.castShadow = true;
    // 定位
    this.instance.position.set( position.x, position.y, position.z )
  }
}

export default Cube