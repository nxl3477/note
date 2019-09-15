class Camera {
  constructor(data) {
    data = data || {}
    const position = data.position || { x: 0, y: 0, z: 0 }
    const aspect = window.innerHeight / window.innerWidth
    this.instance = new THREE.OrthographicCamera(-30, 30, 30 * aspect, -30 * aspect, -1000, 1000);
    // X轴是红色. Y轴是绿色. Z轴是蓝色
    this.instance.position.set(position.x, position.y, position.z)
    this.instance.lookAt(new THREE.Vector3( 0, 0, 0 ))
    this.instance.updateProjectionMatrix();
  }
}

export default Camera