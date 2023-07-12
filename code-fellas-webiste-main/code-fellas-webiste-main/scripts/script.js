
// navbar scroll dissappear
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0px";
  } else {
    document.querySelector("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// homepage modal 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn2 = document.querySelector(".gotit");
var span = document.getElementsByClassName("close")[0];
function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("nav").style.top = "0px";
    } else {
      document.querySelector("nav").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };}
  
  btn.onclick = function() {
    disableScrolling();
    document.querySelector("nav").style.top = "-80px";
    modal.style.display = "block";
  }
  btn2.onclick = function() {
    modal.style.display = "none";
    enableScrolling();
  }
  span.onclick = function() {
    modal.style.display = "none";
    enableScrolling();
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      enableScrolling();
    }
  }
  
  
  
  // hamburger menu 
  const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".list");
ham.addEventListener("click", ()=>{
  nav.classList.toggle('open');
})


// dark theme
const theme=document.querySelector('#theme');
theme.addEventListener('click',()=>{
  document.body.classList.toggle('theme');
  if(theme.classList.contains('theme')){
    ham.src="./media/svg/hamburger-menu-svgrepo-com.svg";
  }else{
    ham.src="./media/svg/hamdark.svg";
  }
})