
function add(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var z = x + y;
    document.getElementById("add").innerHTML=z;

}

function sub(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x - y
    document.getElementById("sub").innerHTML=z;

}

function mul(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x * y
    document.getElementById("mul").innerHTML=z;

}

function div(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x / y
    document.getElementById("div").innerHTML=z;

}
