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
function triangleMath () {
  const a = document.getElementById("number-one").value;
  const b = document.getElementById("number-two").value;
  const c = document.getElementById("number-three").value;

  document.getElementById("equilateral").removeAttribute("class");
  document.getElementById("icosceles").removeAttribute("class");
  document.getElementById("scalene").removeAttribute("class");
  document.getElementById("not-triagle").removeAttribute("class");

  // if a+b <=c || a + c <= b || b + c <= a

}

window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", triangleMath);
})