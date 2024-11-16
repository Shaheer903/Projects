var img = document.getElementById('img');

var slides = ['images/b.jpg','images/bac.jpg','images/back.jpg', 'images/background.jpg', 'images/background1.jpg', 'images/background2.jpg', 'images/background5.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,10);


