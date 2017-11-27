var orderCount = 0;
var s;
var m;
var l;
var c;
var sa;
var pep;
var size;
var topping;

  const check = (Size) => {
    document.getElementById("answer1").value= Size;
    size = document.getElementById("answer1").value= Size;
    s = size.includes("Small");
    m = size.includes("Medium");
    l = size.includes("Large");

    if (s == true)
    {
        console.log("You want a small pizza")
        document.getElementById("pizzaSizeText").innerHTML = "Small";
    }

    if (m == true)
    {
        console.log("You want a medium pizza")
        document.getElementById("pizzaSizeText").innerHTML = "Medium";
    }

    if (l == true)
    {
        console.log("You want a large pizza")
        document.getElementById("pizzaSizeText").innerHTML = "Large";
    }
}

const check2 = (Topping) => {
    document.getElementById("answer2").value= Topping;
    topping = document.getElementById("answer2").value= Topping;
    c = topping.includes("Cheese");
    pep = topping.includes("Pepperoni");
    sa = topping.includes("Sausage");

    if (c == true)
    {
        console.log("You want a pizza with Cheese")
        var checkcheese = document.getElementById("checkcheese").checked;

        if (checkcheese == true)
        {
            document.getElementById("Cheese").style.visibility = "visible";
            localStorage.setItem("Cheese",topping);
        }

        else
        {
            document.getElementById("Cheese").style.visibility = "hidden";
            localStorage.removeItem("Cheese",topping);
        }
    }


        if (pep == true)
    {
        console.log("You want a pizza with Pepperoni")
        document.getElementById("Pep").style.visibility = "visible";

        var checkpep = document.getElementById("checkpep").checked;

        if (checkpep == true)
        {
            document.getElementById("Pep").style.visibility = "visible";
            localStorage.setItem("Pepperoni",topping);
        }

        else
        {
            document.getElementById("Pep").style.visibility = "hidden";
            localStorage.removeItem("Pepperoni",topping);
        }
    }

    if (sa == true)
    {
        console.log("You want a pizza with Sausage")
        document.getElementById("Sausage").style.visibility = "visible"

        var checksau = document.getElementById("checksau").checked;

        if (checksau == true)
        {
            document.getElementById("Sausage").style.visibility = "visible";
            localStorage.setItem("Sausage",topping);
        }

        else
        {
            document.getElementById("Sausage").style.visibility = "hidden";
            localStorage.removeItem("Sausage",topping);
        }
    }
  }

function order()
{
    document.getElementById("Order").value= Order;
    orderCount++;
    console.log(orderCount);
    alert("You have orderd " + orderCount + " Pizza(s)");
    document.getElementById("Size").innerHTML = localStorage.getItem(size);
    document.getElementById("Topping").innerHTML = localStorage.getItem(topping);

    if (s == true){
        localStorage.setItem("Small",size);
    }
    else
    {
        localStorage.removeItem("Small",size);
    }

    if (m == true){
        localStorage.setItem("Medium",size);
    }
    else
    {
        localStorage.removeItem("Medium",size);
    }

    if (l == true){
        localStorage.setItem("Large",size);
    }
    else
    {
        localStorage.removeItem("Large",size);
    }
}

const orderlist = () =>{

    var sizeOrder = localStorage.getItem(size);
    var toppingOrder = localStorage.getItem(topping);
    alert("You ordered a " + size + " " + topping + " pizza")


}

const orderCost = () =>{

}
