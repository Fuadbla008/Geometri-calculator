function rectangleCalculate(){
    // this is first input
    const rectangleInput1 = document.getElementById('rectangleInput1');
    const rectangleInputValue = rectangleInput1.value
    const rectangleInputNumber = parseFloat(rectangleInputValue);
    
    // this is second input
    const rectangleInput2 = document.getElementById('rectangleInput2')
    const rectangleInputValue2 = rectangleInput2.value
    const rectangleInputNumber2 = parseFloat(rectangleInputValue2);
    // rectangle calculate
    let rectangleArea = rectangleInputNumber * rectangleInputNumber2;
    // output
    const display = document.getElementById('output')
    display.innerText = rectangleArea;
}

// this is triangle function.
function triangleCalculate(){
    // this is first input
    const triangleInput1 = document.getElementById('triangleInput1')
    const triangleValue = triangleInput1.value
    const triangleNumber = parseFloat(triangleValue)

    // this is second input
    const triangleInput2 = document.getElementById('triangleInput2');
    const triangleValue2 = triangleInput2.value
    const triangleNumber2 = parseFloat(triangleValue2);
    // Area calculate
    let triangleArea = 0.5 * triangleNumber * triangleNumber2;

    // Output 
    const triangleOutput = document.getElementById('triangleOutput');
    triangleOutput.innerText = triangleArea;
}