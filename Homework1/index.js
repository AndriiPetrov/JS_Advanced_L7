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
            summa += parseInt(e.target.value);
        }
        else if (e.target.value == "20") {
            summa += parseInt(e.target.value);
            price.innerHTML = summa;
        }
        else {
            summa += parseInt(e.target.value);
        }
    }
}
// }

price.innerHTML = summa;
