var price = document.getElementById("price");
var size = document.forms[0].size;
var ingredients = document.forms[0].ingredients;
var summa = 0;
//  parseInt(size[0].value);
// alert(size.)
// alert(size.length);
// alert(ingredients.length);
// price.innerHTML = summa;
// price.innerHTML = parseInt(size[0].value);

// document.addEventListener("change", function () {
//
for (var i = 0; i < size.length; i++) {
    // if(size[i].name == "size"){
    size[i].onchange = function (e) {
        if (e.target.value == "15") {
            summa = parseInt(e.target.value);
        }
        else if (e.target.value == "20") {
            summa = parseInt(e.target.value);
        }
        else {
            summa = parseInt(e.target.value);
           
        }
        price.innerHTML = summa;
    }
}

for(var i = 0; i< ingredients.length; i++){
    ingredients[i].onchange = function(e){
        if(e.target.value === "10"){
            if(e.target.checked == true){
                summa += 10;
            }
            else{
                summa -= 10;
            }
        }
        else if(e.target.value == "15"){
            if(e.target.checked ==true){
                summa += 15;
            }
            else{
                summa -=15;
            }
        }
        else if(e.target.value == "12"){
            if(e.target.checked == true){
                summa +=12;
            }
            else{
                summa -=12;
            }
        }
        else if(e.target.value =="11"){
            if(e.target.checked == true){
                summa +=11;
            }
            else{
                summa -=11;
            }
        }
        else if(e.target.value == "16"){
            if(e.target.checked ==true){
                summa +=16;
            }
            else{
                summa -=16;
            }
        }
        else if(e.target.value == "17"){
            if(e.target.checked ==true){
                summa += 17;
            }
            else{
                summa -= 17;
            }
        }
        price.innerHTML = summa;
    }
}

// price.innerHTML = summa;
