/*
Given tri formula
- if/else for give tri-type 
equilateral - all sides = input1,i2,i3, 
isosceles - 2 sides ===, or 
scalene - no === sides triangle, or 
if the sides cannot make a triangle at all
if a+b <=c || a + c <= b || b + c <= a
*/

// BI

// UI
function triangleMath(e) {
  e.preventDefault();
  const a = parseInt(document.getElementById("number-one").value);
  const b = parseInt(document.getElementById("number-two").value);
  const c = parseInt(document.getElementById("number-three").value);

   

  if(a + b <= c || a + c <= b || b + c <= a){ 
    document.getElementById("not-triangle").removeAttribute("class");
    console.log("in NOt tri");
  } else if (a === b && b === c && c === a) {
    document.getElementById("equilateral").removeAttribute("class");
    console.log("in ===");
  } else if ( (a === b) || (b === c) || (c === a) ){
    document.getElementById("icosceles").removeAttribute("class");
    console.log("in ico");

  } else if (a !== b && b !== c && c !== a) {
    document.getElementById("scalene").removeAttribute("class");
    console.log("in scalene");
  }
}

window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", triangleMath);
})