//wood
document.getElementById("collect_wood").onclick = add_wood;
function add_wood(){
	var wdcnt = document.getElementById("wood_cnt");
	document.getElementById("wood_cnt").innerHTML = Number(wdcnt.innerHTML)+1;
}


//stone
document.getElementById("collect_stone").onclick = add_stone;
function add_stone(){
	var stcnt = document.getElementById("stone_cnt");
	document.getElementById("stone_cnt").innerHTML = Number(stcnt.innerHTML)+1;
}

//woodenhouse
document.getElementById("build_woodenhouse").onclick = add_woodenhouse;
function add_woodenhouse(){
	var pcnt = document.getElementById("people_cnt");
	document.getElementById("people_cnt").innerHTML = Number(pcnt.innerHTML)+2;
}

//lumberjack
//new residents become lumberjack!!!!  (not done yet)

document.getElementById("minus_ten_lbj").onclick = minus_ten_lbj;
function minus_ten_lbj(){
	var lbjcnt = document.getElementById("lumberjack_cnt");
	document.getElementById("lumberjack_cnt").innerHTML = Number(lbjcnt.innerHTML)-10;
}

document.getElementById("minus_one_lbj").onclick = minus_one_lbj;
function minus_one_lbj(){
	var lbjcnt = document.getElementById("lumberjack_cnt");
	document.getElementById("lumberjack_cnt").innerHTML = Number(lbjcnt.innerHTML)-1;
}

document.getElementById("add_one_lbj").onclick = add_one_lbj;
function add_one_lbj(){
	var lbjcnt = document.getElementById("lumberjack_cnt");
	document.getElementById("lumberjack_cnt").innerHTML = Number(lbjcnt.innerHTML)+1;
}

document.getElementById("add_ten_lbj").onclick = add_ten_lbj;
function add_ten_lbj(){
	var lbjcnt = document.getElementById("lumberjack_cnt");
	document.getElementById("lumberjack_cnt").innerHTML = Number(lbjcnt.innerHTML)+10;
}

