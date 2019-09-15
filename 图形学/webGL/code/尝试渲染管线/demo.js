var canvas = document.getElementById("myCanvas");
// 获取webgl的 context
var gl = canvas.getContext("webgl");

// 定义program -- 创建程序
var program = gl.createProgram();

// 定义顶点着色器源代码 ， 片元着色器源代码
var VSHADER_SOURCE, FSHADER_SOURCE;

// 将三角形的坐标直接赋值给gl_position ，之后要改为旋转矩阵
VSHADER_SOURCE = `
  attribute vec4 a_Position;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_ViewMatrix;
  void main () {
    gl_Position = u_ViewMatrix * u_ModelMatrix * a_Position;
  }
`;

//
FSHADER_SOURCE = `
  void main () {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;

// 定义shader
var vertexShader, fragmentShader;

// 创建着色器的工厂函数
function createShader(gl, sourceCode, type) {
  // 根据传入的type 创建shader
  var shader = gl.createShader(type);
  // 将刚创建的着色器 与 着色器源代码绑定
  gl.shaderSource(shader, sourceCode);
  // 编译刚刚创建的着色器
  gl.compileShader(shader);
  return shader;
}

// define vertex shader
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER);
// define frament shader
fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER);

// 将程序与顶点着色器绑定
gl.attachShader(program, vertexShader);
// 将程序与片元着色器绑定
gl.attachShader(program, fragmentShader);

// 给context绑定program
gl.linkProgram(program);
// 使用程序
gl.useProgram(program);

gl.program = program;
var currentAngle = 0;
var g_last = Date.now();

var tick = function() {
  // 更新新的角度
  animate();
  // 将旋转后的角度的三角形渲染到canvas上
  draw();
  // 在浏览器下一次刷新时继续调用
  requestAnimationFrame(tick);
};

// 这里还没搞懂
function initVertexBuffers(gl) {
  // 创建每个单位字节为4的缓冲区
  var vertices = new Float32Array([0, 0.5, -0.5, -0.5, 0.5, -0.5]);
  // n表示3个顶点
  var n = 3;
  // 创建缓冲区
  var vertexBufferObject = gl.createBuffer();
  // VBO变成了一个顶点缓冲类型
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
  // 将数据传给缓冲对象
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  // 给定WebGLProgram对象中某属性的下标指向位置
  var a_Position = gl.getAttribLocation(gl.program, "a_Position");
  // 告诉显卡从当前绑定的缓冲区（bindBuffer()指定的缓冲区）中读取顶点数据
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
  // 启用顶点属性索引
  gl.enableVertexAttribArray(a_Position);
  return n;
}

// write the positions of vertices to a vertex shader
var n = initVertexBuffers(gl);

// 设置清除颜色
gl.clearColor(0, 0, 0, 1);
// 往shader中传输数据
var u_ModelMatrix = gl.getUniformLocation(gl.program, "u_ModelMatrix");
// 调用插件中的方法
var modelMatrix = new Matrix4();
var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix')

var viewMatrix = new Matrix4()


// 根据当前事件计算应旋转的角度
function animate() {
  var now = Date.now();
  var duration = now - g_last;
  g_last = now;
  currentAngle = currentAngle + (duration / 1000) * 180;
}

// 绘制
function draw() {
  // 使用当前角度的
  modelMatrix.setRotate(currentAngle, 0, 1, 0);
  // 调用uniform相关的api
  gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
  gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements)
  // 清屏
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, n);
}

tick();
