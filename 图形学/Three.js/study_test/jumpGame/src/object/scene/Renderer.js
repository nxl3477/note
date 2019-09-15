export default class Renderer {
  constructor(canvas) {
    this.instance = new THREE.WebGLRenderer({
      canvas: canvas
    })
    
    // renderer.shadowMapEnabled = true;
    this.instance.setClearColor(new THREE.Color(0xFFFFFF))
    this.instance.setSize(window.innerWidth, window.innerHeight)
    this.instance.shadowMap.enabled = true; 
    this.instance.shadowMapEnabled = true; 
    this.instance.shadowMapType = THREE.PCFSoftShadowMap
    
  }
}