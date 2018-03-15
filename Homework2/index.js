var watermark = "Insert your login";
var input = document.forms[0].login;

function inputPlaceholder(){
    input.value=watermark;
    input.style.color = "green";
    input.style.fontStyle = "bold";
}

inputPlaceholder();

input.onfocus = function(){
    if(input.value == watermark){
        input.value = "Hello";
        input.style.color = "red";
        input.style.fontStyle ="italic";
    }
}
input.onblur = function(){
    if(input.value ==""){
        inputPlaceholder()
    }
}

// input.AddEventListener("blur", function(){
//     if(input.value ==""){
//         inputPlaceholder()
//     }
// })