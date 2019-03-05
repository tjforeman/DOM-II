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

const letsgo= document.querySelector('.text-content');
letsgo.addEventListener('mouseover',function(event){
  event.target.style.color='green';
  event.stopPropagation();
});
const adventure= document.getElementById('adventure');
adventure.addEventListener('mouseover',function(event){
  event.target.style.color='yellow';
  event.stopPropagation();
});
const logo= document.querySelector('.logo-heading');
logo.addEventListener('blur',function(event){
  event.target.style.background.color='black';
  event.stopPropagation();
});
const home= document.getElementById('nav-1');
home.addEventListener('click',function(event){
  console.log(`home button was clicked`);
  event.preventDefault();
});
const container2=document.querySelector('.container');
container.addEventListener('click',function(event){
  console.log(`event target:${event.target}`);
});
const wheel=document.querySelector('.container');
wheel.addEventListener('wheel',function(event){
  console.log(`the mouse wheel was used`);
});
const mouseout=document.querySelector('.container')
mouseout.addEventListener('mouseout', function(event){
    console.log(`the mouse has left${event.target}`);
});
const colors=document.querySelector('.container')
colors.addEventListener('auxclick',function (event){
    event.target.style.color = "red";
});
const drag=document.querySelector('.main-navigation');
    drag.addEventListener("dragstart", function(event){
    console.log(`${event.target} from the nav has been dragged`);
    });

  window.addEventListener("load", function(event) {
    console.log("The page has loaded!");
  });

  window.addEventListener("keydown", function(event) {
    console.log(`A key was pressed ! this is the key: ${event.key}`);
  });

  window.addEventListener("resize", function(event) {
    console.log(`someone  resized the page: `)
  });
  