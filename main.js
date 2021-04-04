var mouseEvent= "empty";
var colour = "empty";
var lineWidth = "empty";
var radius = "empty";

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



canvas.addEventListener("mousedown", myMouse_Down);
function myMouse_Down(e)
{
  colour= document.getElementById("colour").value;
  lineWidth= document.getElementById("lineWidth").value;
  radius= document.getElementById("radius").value;
    
    var width= screen.width;

    var newWidth = screen.width - 80;
    var newHeight  = screen.height - 310;

    if(width < 992)
    {
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       mouseEvent = "my_touchstart";
       }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         console.log("my_touchmove")  
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(currentX, currentY, radius, 0, 2*Math.PI);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.stroke();
        
        }