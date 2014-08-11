$(document).ready(function(){
	$( "#iPicture" ).iPicture({
		animation: true,
		animationBg: "bgblack",
		animationType: "ltr-slide",
		pictures: ["picture1"],
		button: "moreblack",
		moreInfos:{"picture1":[{"id":"tooltip1","descr":"la gran torre","top":"125px","left":"373px"},{"id":"tooltip2","descr":"el gran templo","top":"60px","left":"100px"},{"id":"tooltip3","descr":"la población","top":"261px","left":"356px"}]}
	});
});