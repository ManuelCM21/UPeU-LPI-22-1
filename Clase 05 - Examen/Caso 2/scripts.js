
function areacir(){
    num1=document.getElementById("n1").value;
    num2=document.getElementById("n2").value;
    num3=document.getElementById("n3").value;
    num4=document.getElementById("n4").value;
    num5=document.getElementById("n5").value; 

    if (num1,num2,num3,num4,num5.length>0 && !isNaN(num1,num2,num3,num4,num5)) {
        pro=(parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5))/5;
        document.getElementById("pro").innerHTML="El promedio es: "+pro;
    }
    else{
        alert("Complete todos los campos");
        document.getElementById("n1").focus();
    }
}