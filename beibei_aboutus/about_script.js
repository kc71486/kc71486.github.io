var focusMember = 2;
var currentpic = 0;
var currentdescription = 0;
const memberName = ["徐子桓", "吳啟賢", "林靖詒", "高涵毅", "廖泓博"];
const memberInfo = ["工程師<br>電機系大三", 
					"工程師<br>電機系大三", 
					"設計師<br>工設系碩一", 
					"工程師<br>電機系大三", 
					"工程師<br>電機系大三"];
const description = ["We are BeiBei.<br>We are a TEAM.",
					"BeiBei致力於提供學生組織一個<br>最輕鬆上手的智慧錢包系統，<br>快來認識我們的團隊夥伴吧!"];
const descriptionFont = ["5.6vw Helvetica bold Condensed",
						"3.2vw sans-serif"];
					

function arrow_mousedown(ev) {
	this.classList.add("arrow_mousedown");
}

function arrow_mouseup(ev) {
	this.classList.remove("arrow_mousedown");
}

function arrow_click(ev) {
	if(this.id === "arrow_next")
		focusMember = (focusMember+1)%5;
	else if(this.id === "arrow_previous")
		focusMember = (focusMember+4)%5;
	else
		alert("arrow_click id error");
	updateMember();
}

function updateMember() {
	let f = focusMember;
	let name = document.getElementById("member_name");
	let info = document.getElementById("member_info");
	document.getElementById("member" + (f+3)%5).className = "people_pic people_area_1";
	document.getElementById("member" + (f+4)%5).className = "people_pic people_area_2";
	document.getElementById("member" + (f)%5).className = "people_pic people_area_3";
	document.getElementById("member" + (f+1)%5).className = "people_pic people_area_4";
	document.getElementById("member" + (f+2)%5).className = "people_pic people_area_5";
	for(let i=0; i<5; i++) {
		document.getElementById("dot" + i).className = "dot";
	}
	document.getElementById("dot" + f).classList.add("dot_chosen");
	name.classList.add("fade");
	info.classList.add("fade");
	setTimeout(() => {
					name.innerHTML = memberName[f];
					info.innerHTML = memberInfo[f];
					name.classList.remove("fade");
					info.classList.remove("fade");
					}, 200);
	
}



function loadEvent() {
	document.getElementById("arrow_previous").addEventListener("mousedown", arrow_mousedown);
	document.getElementById("arrow_previous").addEventListener("mouseup", arrow_mouseup);
	document.getElementById("arrow_previous").addEventListener("click", arrow_click);
	document.getElementById("arrow_next").addEventListener("mousedown", arrow_mousedown);
	document.getElementById("arrow_next").addEventListener("mouseup", arrow_mouseup);
	document.getElementById("arrow_next").addEventListener("click", arrow_click);
	changeTeampic();
	changeTeamDescription();
	document.getElementById("noload").style.opacity = 0;
}

function changeTeampic() {
	let el = document.getElementById("teampic_" + currentpic);
	el.classList.add("ondisplay");
	currentpic = (currentpic + 1)%3;
	setTimeout(changeTeampic, 4500);
	setTimeout(() => {el.classList.remove("ondisplay");}, 5000);
}
function changeTeamDescription() {
	let des = document.getElementById("team_description");
	des.classList.add("fade");
	setTimeout(() => {
					des.innerHTML = description[currentdescription];
					des.style.font = descriptionFont[currentdescription];
					des.classList.remove("fade");
					}, 200);
	currentdescription = (currentdescription + 1)%2;
	setTimeout(changeTeamDescription, 5000);
}