$( document ).ready(function() {
var curTarget = null;
var type = "text";
var X;
var Y;


$("img").each(function(indx, element){
	$(element).attr("src", "https://прайс-тайм.рф"+$(element).attr("src"));
});

var oldVersion = $(".demo_view").html();
var curVersion = $(".demo_view").html();

var versions = new Array();   
versions.push($(".demo_view").html());
var curElem = 0;



$(".demo_view").click(function(e){

X = e.pageX + 2; // положения по оси X
Y = e.pageY + 2;

console.log(X + " " + Y);
$(".modal_change").css({"top" : Y+"px", "left" : X+"px"});
$(".modal_change").css({"display" : "block"});

var target = $( e.target );
if(curTarget != target){

	console.log(e.target.tagName);

if(e.target.tagName == "IMG"){
	$(".modal_change input").val(target.attr("src").substring(49));
	type = "img";
}else{
$(".modal_change input").val(target.text());
type = "text";
}
curTarget = target;
}

});




$(".modal_set").click(function(e){
	if(type === "text"){
	curTarget.text($(".modal_change input").val());
	changecCurVersion();
}

if(type === "img"){
	curTarget.attr("src", "https://прайс-тайм.рф/upload/romza_soft/products/" + $(".modal_change input").val());
	changecCurVersion();
}
$(".modal_change").css({"display" : "none"});
});

var open = false;

$(".exit_btn").click(function(e){
	if(open){
$(".output").css({"display":"none"});
$(".exit_btn").text("Получить код");
open = false;
	}else{
$(".output").css({"display":"block"});
$(".exit_btn").text("Закрыть");
open = true;
	}
$(".maket_preview").html($(".demo_view").html());

$(".maket_preview img").each(function(indx, element){
	$(element).attr("src", $(element).attr("src").substring(21));
});


$(".output").text($(".maket_preview").html());


});


$(".step_back").click(function(e){
	if(curElem >0){
 $(".demo_view").html(versions[curElem-1]);
 curElem--;
}

console.log(curElem + " : " + versions.length);
});

$(".step_prev").click(function(e){
	if(curElem+1 < versions.length){
		$(".demo_view").html(versions[curElem+1]);
		curElem++;
	}

	console.log(curElem + " : " + versions.length);
});

function changecCurVersion(){
	// oldVersion = curVersion;
	// curVersion = $(".demo_view").html();

	versions.splice(curElem+1, Number.MAX_VALUE, $(".demo_view").html());
	curElem++;
	// if(versions.length === 30){

	// }
	console.log(versions.length);
}


$(".modal_close").click(function(e){
$(".modal_change").css({"display" : "none"});
});


$( window ).on("beforeunload", function( event ) {
	if ( $( event.target.activeElement ).is("a") )
	{
		return;
	}
    return "Все несохраненные данные будут утеряны!";
});

});