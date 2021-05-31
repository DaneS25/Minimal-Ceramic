var start = 200;

window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    console.log(window.pageYOffset/2);
    let image2 = document.getElementById("rotate2");
    let image = document.getElementById("rotate1");

    if (window.pageYOffset < start){
        image2.style.transform = "rotate(" + (start/4-window.pageYOffset/4) + "deg)";
        image.style.transform = "rotate(" + (-start/4+window.pageYOffset/4) + "deg)";
        image.style.marginLeft =  -window.pageYOffset*1.4 + "px";
        image.style.marginRight =  window.pageYOffset*2 + "px";
        image.style.marginTop =  window.pageYOffset + "px";


        image2.style.marginRight =  -window.pageYOffset*1.4 + "px";
        image2.style.marginLeft =  window.pageYOffset*2 + "px";
        image2.style.marginTop =  window.pageYOffset + "px";
    }
    else{
        image.style.transform = "rotate(0deg)";
        image2.style.transform = "rotate(0deg)";
    }
}

  

