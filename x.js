<!DOCTYPE html>
<html>
<style>
#myProgress {
  position: relative;
  width: 100%;
  height: 30px;
  background-color: #ddd;
}

#myBar {
  position: absolute;
  width: 10%;
  height: 100%;
  background-color: #4CAF50;
}

#label {
  text-align: center;
  line-height: 30px;
  color: white;
}
</style>
<body>

<h1>JavaScript Progress Bar</h1>

<div id="myProgress">
  <div id="myBar">
    <div id="label">10%</div>
  </div>
</div>

<br>
<button onclick="move()">Click Me</button> 

<script>
function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
</script>

</body>

<!-- Mirrored from www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 13 Mar 2016 11:03:55 GMT -->
</html>
