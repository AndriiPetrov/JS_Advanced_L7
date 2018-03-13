var price = document.getElementById("price");
var size = document.forms[0].size;
var ingredients = document.forms[0].ingredients;
var summa = 0;
//  parseInt(size[0].value);
// alert(size.)
// alert(size.length);
// alert(ingredients.length);
price.innerHTML = summa;
for(var i = 0; i < size.length; i++){
    size[i].addEventListener("change", function(){
        if(size[i].getAttribute("checked") == "checked"){
            summa += parseInt(size[i].value);
        }
    });
}
