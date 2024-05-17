function factorial(n) {
    if (n < 0) {
        alert("Error: Debe ingresar un número mayor a 0");
    } else if (isNaN(n)) {
        alert("Error: Debe ingresar un número");
    } else if (n === 0 || n ===1){
        return 1;
    } else {
        return n * factorial(n - 1);
             }
                
         }
    
    let n = Number(prompt("Ingrese un número: "));
    console.log(factorial(n));
    

