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