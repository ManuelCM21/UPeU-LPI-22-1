function par_impar() {
    num1 = document.getElementById("n1").value;
    console.log(num1);
    if (num1.length>0 && !isNaN(num1)) {
        if (num1%2==0) {
            document.getElementById("rs").innerHTML="Respuesta: ES PAR";
        } else {
            document.getElementById("rs").innerHTML="Respuesta: ES IMPAR";
        }
    } else {
        alert("Ingrese un numero");
        document.getElementById("n1").focus();
    }
}