/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * step -1: get the base value
 * step -2: added an id in the base input field
 * step -3: use getElementById to access the input field
 * step -4: get value( it is a string now) from the input field.
 * step-5: convert the value to a number.use parseFloat
 */
function calculateTriangleArea(){
    //get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    //get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    //calculate area of Triangle
    const triangleArea = 0.5 * base * height;
    console.log('area of the triangle is:', triangleArea);
    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}

function calculateRectangleArea(){
    //get length of the rectangle
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const widthR = parseFloat(rectangleWidthText);
     //get length of the rectangle
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const lengthR = parseFloat(rectangleLengthText);
    //calculate area of Triangle
    const rectangleArea =  widthR * lengthR;
    console.log('area of the rectangle is:', rectangleArea);
    //display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}

// function calculateParallelogramArea(){
//     //get base of the parallelogram
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const baseP = parseFloat(parallelogramBaseText);
//      //get length of the parallelogram
//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInput.value;
//     const heightP = parseFloat(parallelogramHeightText);
//     //calculate area of parallelogram
//     const parallelogramArea =  baseP * heightP;
//     console.log('area of the parallelogram is:', parallelogramArea);
//     //display parallelogram Area
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = parallelogramArea;
// }


// Create a Reusable Function for similar task
function getParallelogramArea(){
    const pBase = getInputValue('parallelogram-base');
    // console.log('base value', pBase);
    const pHeight = getInputValue('parallelogram-height');
    // console.log('base value', pHeight);
    const pArea = pBase * pHeight;
    console.log('area of the parallelogram' , pArea);
    setInnerTextById('parallelogram-area', pArea);
}
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById (elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

//Create a Function for pentagon
function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area = 0.5 * perimeter* apothem;
    setInnerTextById('pentagon-area', area);
}
// function getInputValue(inputField){
//     const inputField2 = document.getElementById(inputField);
//     const inputValueText2 = inputField2.value;
//     const value = parseFloat(inputValueText2);
//     return value;
// }
// function setInnerTextById(elementId , area){
//     const element2 = document.getElementById(elementId);
//     element2.innerText = area;
// }

// /Create a Reusable Function for Ellipse
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.1416 * majorRadius* minorRadius;
    setInnerTextById('ellipse-area', area);
}