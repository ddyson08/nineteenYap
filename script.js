if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
var savedUN = "";
var savedP = "";
function enterPass(){
	document.querySelector("#key2").style.top = "120vh";
	document.querySelector("#username").style.opacity="0";
	document.querySelector("#password").style.opacity="0";
	savedUN = document.querySelector("#username").value;
	savedP = document.querySelector("#password").value;
	for(var i of document.querySelectorAll(".tooth")){
		i.style.opacity = "0";
	}
	var key = document.querySelector("#key");
	key.style.width = "15vw";
	key.style.height = "7.5vh";
	key.style.left = "80vw";
	setTimeout(function(){bringInsite();},1000);
}
function processError(v){
	if(v=="v"){
		return"";
	}
};
function getNineteenyap(){};
function bringInsite(){
	var nine = document.createElement("div");
	nine.setAttribute('id','mainpage');
	nine.style.position="relative";
	nine.style.height = "20vh";
	nine.style.top = "10vh";
	nine.style.zIndex = 2;
	nine.style.width = "20vw";
	nine.style.left = "-50vw";
	nine.style.backgroundColor = "#C2D8B9";
	document.body.append(nine);
	var items = [document.createElement('div'),document.createElement('div'),document.createElement('div'),document.createElement('div')]
	items[0].setAttribute('style','position: absolute;/* transform: rotate(90deg); */left: 20vw;top: 12.25vh;background-color: #0B2027;height: 0.5vh;width: 20vh;border-radius: 20%');
	items[1].setAttribute('style','position: absolute;transform: rotate(45deg);left: -7.42vh;top: 50%; z-index:2; background-color: #0B2027;height: 20vh;width: 0.5vh;border-radius: 20%');
	items[2].setAttribute('style','position: absolute; left: 20%; top: 20vh; background-color: #0B2027;  z-index:2; height: 20vh; width: 0.5vh; border-radius: 20%');
	items[3].setAttribute('style','position: absolute; left: 80%; top: 20vh; background-color: #0B2027;  z-index:2; height: 20vh; width: 0.5vh; border-radius: 2-%');
	for(var i of items){
		nine.append(i);
	}
setTimeout(function(){document.querySelector('#mainpage').style.left="10vw";},500);
	setTimeout(
		function(items){
			items[0].style.width = "57vw";
			setTimeout(
				function(items){
					items[0].style.width = "2vw";
					document.querySelector("#key").style.left = "20vw";
					//return;
					setTimeout(function(){document.querySelector("#key").style.transform="scaleY(-1)"
						setTimeout(function(){
							document.querySelector("#key").style.transform="scaleY(1)";
							//return;
							setTimeout(function(){
									if(savedP == "kanye"){
									for(var k of items){
										k.remove();
									}
										document.querySelector('#mainpage').style.zIndex="5";
										document.querySelector('#mainpage').style.width="100vw";
										setTimeout(function(){
											document.querySelector("#key").style.top="200vh";
											document.querySelector("#key").style.opacity="0px";
											document.querySelector('#mainpage').style.left="0px";
											document.querySelector('#mainpage').style.top="0px";
											document.querySelector('#mainpage').style.position="absolute";
											document.querySelector('#mainpage').style.height="100vw";
											document.querySelector('#mainpage').style.borderRadius="0";
											getNineteenyap();
											setTimeout(function(){document.querySelector("#key").remove()},1000);
												},200);
								}else{
									document.querySelector("#key").style.left="80vw";
									items[0].style.width = "55vw";
									setTimeout(function(){
										items[0].style.width = "20vh"
										setTimeout(function(){
											document.querySelector('#mainpage').style.opacity=0;
											document.querySelector("#key2").style.top = "40vh";
											for(var i of document.querySelectorAll(".tooth")){
												i.style.opacity = "1";
											}
											var key = document.querySelector("#key");
											key.style.width = "calc(0.833 * (100vw - (2 * var(--side_width))))";
											key.style.height = "10vw";
											key.style.left = "calc(var(--side_width))";
											document.querySelector('#mainpage').style.left="-50vw";
											setTimeout(function(){document.querySelector('#mainpage').remove();},1000);
											document.querySelector("#username").value=processError('v','u')
											document.querySelector("#password").value=processError('v','p');
											document.querySelector("#username").setAttribute('placeholder',processError('p','u'));
											document.querySelector("#password").setAttribute('placeholder',processError('p','p'));
											document.querySelector("#username").style.opacity=1;
											document.querySelector("#password").style.opacity=1;
										}, 1000)
									},1000);
								}
							},500);
							},500)
					},500)
					
				}, 1000, items)
		}, 1000, items)
}
