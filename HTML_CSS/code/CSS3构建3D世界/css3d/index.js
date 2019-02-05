const box = document.getElementById('box')
const divItem = box.getElementsByTagName('div')

const itemArr = [...divItem]

const getDist = function (w, number) {
  const halfW = w / 2
  return Math.round( halfW /  Math.tan( Math.PI / number )) -2 ;
}

itemArr.forEach((ele, index) => {
  const w = 129
  ele.style.background = `url('./imgs/p${index+1}.png') no-repeat`
  ele.style.width = `${w}px`
  ele.style.height = '1170px'
  const deg = 360 / itemArr.length * index
  const excur = getDist(w, itemArr.length)
  ele.style.webkitTransform = `rotateY(${deg}deg) translateZ(${excur}px)`;
})





var startX = 0,
	x = 0,
	endX = 0;
var flag = true;
$('#box').on('touchstart', function(event) {
	event.preventDefault();
  console.log('触摸开始', event)
	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
})
$('#box').on('touchmove', function(event) {
	if (flag) {
    event.preventDefault();
    console.log('触摸结束', event)
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		x = endX - startX;
		box.style.transform = 'scale(1.5) rotateY(' + x + 'deg)';
	} else {
		return false;
	}

})
$('#box').on('touchend', function(event) {
	console.log("over");
});

// 利用flag加锁 防止手机晃动事件 和触摸事件冲突
window.addEventListener('deviceorientation', function(event) {
  console.log('手机晃动了,', event)
	var gamma = event.gamma;
	if (Math.abs(gamma) > 1) {
		flag = false;
		box.style.transform = 'scale(1.5) rotateY(' + gamma * 3 + 'deg)';
	} else {
		flag = true;
	}

})