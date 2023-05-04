



$(document).ready(function(){
    $("h2").click(function(){
        $(this).css("background-color", "violet");
    });
});


$(".one").css("backgroundColor", "grey");

let newStyle = {
    color: "violet",
    background: "pink",
    border: "3px solid black"
}

$("h1").css(newStyle);

$("ul li").css("fontSize", "20px");


//$(".orderedList").text("Hello");