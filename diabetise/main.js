let modal=document.getElementById("modalpage");
let submit=document.getElementById("submit");
let closeImage=document.getElementsByClassName("close")[0];
let progressBar=document.getElementById("Progressive");
let form=document.getElementById("container");
let result=document.getElementById("result");

//PRGRESSIVE BAR 
var i = 0;
submit.addEventListener("click",function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("Bar");
    progressBar.style.display="block";
    var widthNum = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (widthNum >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        widthNum++;
        elem.style.width = widthNum + "%";
        elem.innerText=widthNum +"%";
        form.style.display="none";
        submit.style.display="none";
        result.style.display="block"
      }
    }
  }
});
//END OF PROGRESSIVE BAR


result.onclick=function(){
    modal.style.display="block";

}


//Exits the modal when you click on the close object
closeImage.onclick=function(){
    modal.style.display="none";
    progressBar.style.display="none";
}

//Exits the modal whenever you click outside it
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
        progressBar.style.display="none"
    }

}