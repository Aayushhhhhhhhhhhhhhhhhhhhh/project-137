img = "";
function preload(){
     img = loadImage('images.jpeg');
}
function setup()
{
     canvas = createCanvas(640,420);
     canvas.center();
}
function draw()
{
     image(img,0,0,640,420);
     fill('#E6FB04');
     text("bed",120,120);
     noFill(); 
     stroke('#E6FB04');
     rect(110,110,400,300);

     fill('#F2EA02');
     text("plant",20,60);
     noFill();
     stroke('#F2EA02')
     rect(10,50,100,300);
}

