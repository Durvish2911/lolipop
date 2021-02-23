canvas =document.getElementById("movingkjgjkgrkj");
ctx = canvas.getContext("2d");
car1_height=100;
car1_width=100;
car2_width= 100;
car2_height=100;
car2image="car1.jpg";
car1image="car.jpg";
car1_x =10;
car1_y =10;
car2_x =20;
car2_y =20;
backup="howmanytimes.jpg"
function add(){
    By = new Image();
    By.onload = uploadBackground();
    By.src = backup;
    car1_imgTag = new Image();
    car1_imgTag.onload = cars1upload();
    car1_imgTag.src = car1image;
    car2_imgTag = new Image();
    car2_imgTag.onload = cars2upload();
    car2_imgTag.src = car2image;
}
function cars1upload(){
ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height );
console.log("hi");
}
function cars2upload(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
 function uploadBackground(){
     ctx.drawImage(By,0,0,canvas.width,canvas.height);
 }
window.addEventListener("keydown",mykeydown) 
function mykeydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '38'){
    up();
}
if(keyPressed == '40'){
    down();
}
if(keyPressed =='39'){
    right();
}
if(keyPressed =='37'){
    left();
}
if(keyPressed =='85'){
    u();
}
if(keyPressed == '68'){
    d();
}
if(keyPressed == '76'){
    l();
}
if(keyPressed == '82'){
    r();
}
}
function up(){
    if(car1_y>=10){
     car1_y=car1_y-10;
     uploadBackground();
     cars1upload();
     cars2upload();
    }}
    function down(){
        if(car1_y<=599){
         car1_y=car1_y+10;
         uploadBackground();
         cars1upload();
         cars2upload();
        }}
        function left(){
            if(car1_x>=10){
             car1_x=car1_x-10;
             uploadBackground();
             cars1upload();
             cars2upload();
            }}
            function right(){
                if(car1_x<=599){
                 car1_x=car1_x+10;
                 uploadBackground();
                 cars1upload();
                 cars2upload();
                }}
                function u(){
                    if(car2_y>=10){
                     car2_y=car2_y-10;
                     uploadBackground();
                     cars1upload();
                     cars2upload();  
                    }}
                     function d(){
                        if(car2_y<=599){
                         car2_y=car2_y+10;
                         uploadBackground();
                         cars1upload();
                         cars2upload();
                        } }
                        function l(){
                            if(car2_x>=10){
                             car2_x=car2_x-10;
                             uploadBackground();
                             cars1upload();
                             cars2upload();
                            }   }            
                            function r(){
                                if(car2_x<=599){
                                 car2_x=car2_x+10;
                                 uploadBackground();
                                 cars1upload();
                                 cars2upload();
                                }                             
}
