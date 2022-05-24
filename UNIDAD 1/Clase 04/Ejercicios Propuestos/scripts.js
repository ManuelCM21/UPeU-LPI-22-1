function areacir(){
    num1=document.getElementById("n1").value;
    console.log(num1);    
    
    if (num1.length>0 && !isNaN(num1)) {
        area=3.141592*num1; 
        document.getElementById("rs").innerHTML="El área del círculo es: "+area+"cm²";
    }
    else{
        alert("Ingrese el radio");
        document.getElementById("n1").focus();
    }
}

function areacir(){
    a=document.getElementById("n1").value;
    b=document.getElementById("n2").value;
    c=document.getElementById("n3").value;    

    if (a,b,c.length>0 && !isNaN(a,b,c)) {
        x1=(((-1)*b)-(Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a);
        x2=(((-1)*b)+(Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a);
        document.getElementById("rs1").innerHTML="x1= "+x1;
        document.getElementById("rs2").innerHTML="x2= "+x2;
    }
    else{
        alert("Complete todos los campos");
        document.getElementById("n1").focus();
    }
}

function areacir(){
    num1=document.getElementById("n1").value;
    num2=document.getElementById("n2").value;
    num3=document.getElementById("n3").value;
    num4=document.getElementById("n4").value;
    num5=document.getElementById("n5").value;
    num6=document.getElementById("n6").value;  
    num7=document.getElementById("n7").value;
    num8=document.getElementById("n8").value;
    num9=document.getElementById("n9").value;
    num10=document.getElementById("n10").value;  

    if (num1,num2,num3,num4,num5,num6,num7,num8,num9,num10.length>0 && !isNaN(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10)) {
        pro=(parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5)+parseInt(num6)+parseInt(num7)+parseInt(num8)+parseInt(num9)+parseInt(num10))/10;
        document.getElementById("pro").innerHTML="El promedio es: "+pro;
    }
    else{
        alert("Complete todos los campos");
        document.getElementById("n1").focus();
    }
}