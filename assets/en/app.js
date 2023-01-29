var check= document.querySelector(".check")
check.addEventListener("click",idioma)
function idioma (){
let id=check.checked
if(id){
 console.log(id);
}
else
location.href="../../index.html"
}
