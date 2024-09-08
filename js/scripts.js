

function play(){
    const result = document.getElementById("result");
    let numbers = [];
    const num1 = parseFloat(prompt("Ingresa un primer número: "));
    const num2 = parseFloat(prompt("Ingresa un segundo número: "));
    const num3 = parseFloat(prompt("Ingresa un tercer número: "));

  
    compareto(num1, num2, num3);
    function compareto(num1, num2, num3){
        numbers.push(num1);
        numbers.push(num2);
        numbers.push(num3);

        numbers.sort((a, b) => { return a - b});
        const [menor, intermedio, mayor] = numbers;
        
        if(num1 === num2 && num2 === num3){
            result.textContent = "Resultado: Todos los número son iguales."
        }else{
        result.style.whiteSpace ="pre-line";
        result.textContent =`El número menor es ${menor}.\nEl intermedio es ${intermedio}.\nEl mayor es ${mayor}.`
        }
    }
}



