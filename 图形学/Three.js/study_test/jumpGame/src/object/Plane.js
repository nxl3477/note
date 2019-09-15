class Plane {
  constructor(data) {
    data = data || {}
    const { width=100, height=100, color=0xffffff, position={ x: 0, y: 0, z: 0 } } = data

    // 构建面几何体
    const planeGeometry = new THREE.PlaneGeometry(width, height)
    // 材质
    const planeMaterial = new THREE.MeshLambertMaterial({color})
    // 构建实例
    this.instance = new THREE.Mesh(planeGeometry, planeMaterial)
    // 开启接受阴影
    this.instance.receiveShadow = true
    // 开启投影
    this.instance.castShadow = true; 
    // 将平面摆正
    this.instance.rotation.x = -0.5 * Math.PI;
    this.instance.position.set(position.x, position.y, position.z)
  }
}

export default Plane