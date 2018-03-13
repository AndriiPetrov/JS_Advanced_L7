// document.forms[0].addEventListener("submit", function(e){
// for(var i=0; i< document.forms[0].elements.length; i++){
//     document.forms[0].elements[i].onfocus=function(){
//         this.style.border = "1px solid red";
//     } 
//     document.forms[0].elements[i].onblur = function(){
//         this.style.border = "1px dotted green";
//     }
// }

pas1 = document.forms[0].passw;
pas2 = document.forms[0].spassw;
msgerror = document.getElementById("pasMsg")
pas2.onblur = function () {
    if (pas1.value != "" && pas2.value != "" && pas1.value == pas2.value) {
        // if(pas1.value == pas2.value){
        // alert("Everything alright");  
        msgerror.innerHTML = "Passwords are equal";
    }
    else {
        msgerror.innerHTML = "Passwords are not equal or wasn't entered";
        // alert("passwords are not equal");
    }
}


// })

