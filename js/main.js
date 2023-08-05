




//==============================
// for Slidedown to classes js
//==============================



var goDown = document.querySelector(".down")
goDown.onclick =function sdown(){

window.scrollTo({
  top:135,
  behavior:"smooth"
});

}
var goDown2 = document.querySelector(".down2")
goDown2.onclick =function sdown(){

window.scrollTo({
  top:550,
  behavior:"smooth"
});

}
var goDown3 = document.querySelector(".down3")
goDown3.onclick =function sdown(){

window.scrollTo({
  top:1100,
  behavior:"smooth"
});

}
var goDown3 = document.querySelector(".down4")
goDown3.onclick =function sdown(){

window.scrollTo({
  top:1400,
  behavior:"smooth"
});

}

//==============================
// for Show header js
//==============================



var hideNav = document.querySelector("#hinav")
var nav = document.querySelector("#minu-bars")
var header = document.querySelector(".head")
nav.onclick = () =>{
    header.style.display="block"
    nav.style.display="none"
    hideNav.style.display="block"
}

hideNav.onclick = () =>{
  header.style.display="none"
  nav.style.display="block"
  hideNav.style.display="none"
}



//=======================
//for button go up   js
//=======================


var goUp = document.querySelector(".Up");

window.onscroll= function goTop(){
if(window.pageYOffset>100){
  goUp.style.display="block"
}
else{
  goUp.style.display="none"
}
}
goUp.onclick =function sTop(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}






