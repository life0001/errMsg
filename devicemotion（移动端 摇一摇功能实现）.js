//监听手机摇动事件
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
    alert('你的设备不支持摇一摇功能');
}
 var SHAKE_THRESHOLD = 3000;
 var last_update = 0;
 var x = y = z = last_x = last_y = last_z = 0;
 //摇一摇开关，1表示开，0表示关
 var canShake = 1;
  
 function deviceMotionHandler(eventData) {
     var acceleration = eventData.accelerationIncludingGravity;
     var curTime = new Date().getTime();
 
    //100ms监听一次，拒绝重复监听
    if ((curTime - last_update) > 100 && canShake==1) { 
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {  
        	alert(3);
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}