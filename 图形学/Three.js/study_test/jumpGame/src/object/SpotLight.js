class SpotLight {
  constructor(data) {
    data = data || {}
    const { lightColor = 0xffffff, position = { x: 0, y: 300, z: -200 }  } = data

    // 添加点光源
    this.instance = new THREE.SpotLight( lightColor );
    this.instance.position.set( position.x, position.y, position.z );
    this.instance.castShadow = true;
  }
}
export default SpotLight