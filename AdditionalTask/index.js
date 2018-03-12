window.addEventListener("submit", function(e){

})

for(var i=0; i< document.forms[0].elements.length; i++){
    document.forms[0].elements[i].onfocus=function(){
        this.style.border = "1px solid red";
    } 
    document.forms[0].elements[i].onblur = function(){
        this.style.border = "1px dotted green";
    }
}
pas1 = document.forms[0].passw;
pas2 = document.forms[0].spassw;

if(pas1.value != "" && pas2.value != "" && pas1.value == pas2.value){
    alert("Everithing alright");
}