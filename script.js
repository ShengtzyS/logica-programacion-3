// Función para calcular factorial
function factorial(n) {
    if (n < 0) {
        alert("Error: Debe ingresar un número mayor a 0.");
    } else if (isNaN(n)) {
        alert("Error: Debe ingresar un número.");
    } else if (n === 0 || n ===1){
        return 1;
    } else {
        return n * factorial(n - 1);
             }
                
         }
    
// Ciclo while para que vuelva a solicitar dato si se escriben palabras
    let n;
    while (true) {
        let dato = prompt("Ingrese un número: ");
        if (dato === null) break;
        n = Number(dato);
        if (!isNaN(n)){
            console.log(factorial(n));
            break;
        } else {
            alert("Error: Debe ingresar un número.")
        }
    }

