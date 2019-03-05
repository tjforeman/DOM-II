// Your code goes here
const container= document.querySelector('.container');
container.addEventListener('click',function(event){
  event.target.style.color='blue';
});
const btn= document.getElementById('btn-1');
btn.addEventListener('dblclick',function(event){
  event.target.style.backgroundColor='black';
  event.target.style.color='green';
  event.stopPropagation();
});

const destination= document.querySelector('.text-content');
destination.addEventListener('mouseover',function(event){
  event.target.style.color='green';
  event.stopPropagation();
});