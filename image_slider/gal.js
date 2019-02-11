var images = [ 
    "/home/sripriya/Desktop/project/image_slider/images/img1.jpg",
    "/home/sripriya/Desktop/project/image_slider/images/img2.jpg",
"/home/sripriya/Desktop/project/image_slider/images/img3.jpg",
"/home/sripriya/Desktop/project/image_slider/images/img4.jpg",
"/home/sripriya/Desktop/project/image_slider/images/img5.jpg"

];

var i = 0;
function slides () {

document.getElementById("slideimage").src = images[i];
if(i<(images.length-1))
i++;
else 
i=0;

}

setInterval(slides, 2000);