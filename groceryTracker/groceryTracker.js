function calculateAmount(){
    let grocery_1 = parseFloat(document.getElementById("Grocery_1").value);
    let grocery_2 = parseFloat(document.getElementById("Grocery_2").value);
    let grocery_3 = parseFloat(document.getElementById("Grocery_3").value);

    let result = grocery_1 + grocery_2 + grocery_3;

    document.getElementById("result").innerHTML=`${result}`;
}