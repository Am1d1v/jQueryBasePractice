



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

$(".btn").click(function(){
    alert('You clicked button');
    $(this).css("backgroundColor", "grey");
});


$(".textInput").keypress(function(event){
    if(event.which === 13){
        console.log("You have pressed enter");
    }
    
});

 $(".textInput").on("click", function(){
    $(this).css("backgroundColor","violet");
 });

 $(".btnClear").on("click", function(){
    $(".textInput").css("backgroundColor","white");
 });

 $(".btnClear").on("mouseover", function(){
    $(this).css("backgroundColor","violet");
 });

 $(".btnClear").on("mouseleave", function(){
    $(this).css("backgroundColor","black");
 });


/*

 $(".catImg").on("click", function(){
    $(this).fadeOut(1000, function(){
      console.log("Fade Out");
    });
 });

 */
 


 $(".ImgFadeIn").on("click", function(){
   $(".catImg").fadeToggle(2000, function(){
      console.log("Toggled");
   });
 });


 $("#slideUp").on("click", function(){
   $(this).slideUp(1000);
 });
 
 /*

 $("#slideDown").on("click", function(){
   $("#slideUp").slideDown(2000);
 });

 */

 $("#slideDown").on("click", function(){
   $("#slideUp").slideToggle(2000);
 });