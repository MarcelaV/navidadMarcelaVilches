var pos = 0;
var box = document.getElementById("box");
var t = setInterval(move, 1);

function move(){
	if (pos >= 550){
		clearInterval(t);
	}
	else {
		pos += 1;
		box.style.left = pos+"px";
	}
}