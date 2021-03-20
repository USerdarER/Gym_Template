$(document).ready(function(){
document.getElementById("year").innerHTML = new Date().getFullYear();
const entryNumber = document.getElementsByClassName("blog-entry").length;

for (let i = 0; i < entryNumber; i++) {
    var text = document.getElementsByClassName("blog-entry")[i].innerText;
    var count = 0;
    if(text.length > 500){
     var wordsArr = text.split(" ");
     var summeryArr = new Array();
    
     for (let i = 0; i < wordsArr.length; i++) {
         if(count<= 500){
            summeryArr.push(wordsArr[i]);
            count += summeryArr[i].length;
         }
         else{
            var summeryText = summeryArr.join(" ") + "...";
    
         }
     }
     
    }
    document.getElementsByClassName("blog-entry")[i].innerText = summeryText;
}
}
);

