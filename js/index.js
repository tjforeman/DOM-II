// Your code goes here
const container= document.querySelector('.container');
container.addEventListener('dblclick',function(event){
  event.target.style.color='blue';
});
const btn= document.getElementById('btn-1');
btn.addEventListener('click',function(event){
  event.target.style.backgroundColor='red';
  event.target.style.color='black';
  console.log(`Fun in the sun has been clicked`)
  event.stopPropagation();
});
const btn2= document.getElementById('btn-2');
btn2.addEventListener('click',function(event){
  event.target.style.backgroundColor='white';
  event.target.style.color='black';
  console.log(`Mountain Excursion has been clicked`)
  event.stopPropagation();
});
const btn3= document.getElementById('btn-3');
btn3.addEventListener('click',function(event){
  event.target.style.backgroundColor='blue';
  event.target.style.color='black';
  console.log(`Island Getaways been clicked`)
  event.stopPropagation();
});

const destination= document.querySelector('.text-content');
destination.addEventListener('mouseover',function(event){
  event.target.style.color='green';
  event.stopPropagation();
});

window.addEventListener("load", function(event) {
    console.log("The page has loaded!");
  });
  window.addEventListener("keydown", function(event) {
    console.log(`A key was pressed ! this is the key: ${event.key}`);
  });
