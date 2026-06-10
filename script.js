const images = [
   "image/ChatGPT Image Jun 9, 2026, 10_03_07 PM.png",
   "image/ChatGPT Image Jun 9, 2026, 10_12_45 PM.png",
   "image/ChatGPT Image Jun 9, 2026, 10_15_12 PM.png",
   "image/ChatGPT Image Jun 9, 2026, 10_17_10 PM.png"
];

let currentIndex = 0;

function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=images[index];
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function nextImage(){
    currentIndex=(currentIndex+1)%images.length;
    document.getElementById("lightbox-img").src=images[currentIndex];
}

function prevImage(){
    currentIndex=(currentIndex-1+images.length)%images.length;
    document.getElementById("lightbox-img").src=images[currentIndex];
}