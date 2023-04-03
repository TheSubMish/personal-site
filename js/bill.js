// ITEM FORM VALIDATION
var formItem = document.getElementById("item");
var formQty = document.getElementById("quantity");
var formRate = document.getElementById("rate");
formItem.addEventListener("keyup", function() {
    if (formItem.value != "") {
        formItem.style.border = "none";
        formItem.style.outline = "green solid 2px";
        changeColor();
    } else {
        formItem.style.border = "2px";
    }
});

formQty.addEventListener("keyup", function() {
    if (formQty.value != "") {
        formQty.style.border = "none";
        formQty.style.outline = "green solid 2px";
        changeColor();
    } else {
        formQty.style.border = "2px";
    }
});

formRate.addEventListener("keyup", function() {
    if (formRate.value != "") {
        formRate.style.border = "none";
        formRate.style.outline = "green solid 2px";
        changeColor();
    } else {
        formRate.style.border = "2px";
    }
});

function changeColor() {
    if ((formItem.style.outline == "green solid 2px") && (formQty.style.outline == "green solid 2px") && (formRate.style.outline == "green solid 2px")) {
        document.getElementById("submit").style.backgroundColor = "black";
        document.getElementById("submit").style.color = "white";
    }
}

// CLEAR FUNCTION 
document.getElementById("clear").onclick = function() {
    formItem.style.border = "1px solid #000";
    formItem.style.outline = "0px solid #000";
    formQty.style.border = "1px solid #000";
    formQty.style.outline = "0px solid #000";
    formRate.style.border = "1px solid #000";
    formRate.style.outline = "0px solid #000";
    document.getElementById("submit").style.backgroundColor = "#fff";
    document.getElementById("submit").style.color = "black";
}

//  ADD DATA FROM FORM TO TABLE
let x = 0;
document.getElementById("submit").onclick = function() {
    x++;
    if (document.getElementById("submit").style.backgroundColor !== "black") {
        alert("Insert data properly");
    } else {
        var table = document.getElementById("bill-table");
        var row = table.insertRow(-1);
        var sn = row.insertCell(0);
        var item = row.insertCell(1);
        var qty = row.insertCell(2);
        var rate = row.insertCell(3);
        var amt = row.insertCell(4);
        sn.innerHTML = x;
        item.innerHTML = document.getElementById("item").value;
        qty.innerHTML = document.getElementById("quantity").value;
        rate.innerHTML = document.getElementById("rate").value;
        amt.innerHTML = qty.innerHTML * rate.innerHTML;

        // ADD TOTAL AMOUNT
        var totAmt = parseFloat(document.getElementById("totAmt").innerHTML);
        totAmt += parseFloat(amt.innerHTML);
        document.getElementById("totAmt").innerHTML = totAmt;
        return false;
    }
}