import { bubbleSort, display, insertionSort, mergeSort, quickSort, selectionSort } from "./sorting.js";
// let n = window.innerWidth/2.5;
let n = 25;
export let arr = [];
export let time = 70;
export var stopFlag = false;
function init() {
  const sort = document.querySelector(".sort");
  sort.disabled = false;
  sort.classList.remove('disabled');

  arr = [];
  for (let i = 0; i < n; i++) {
    let val = Math.floor(Math.random() * 100)+1;
    arr[i] = val;
  }
  display();
}

async function sort(method, speed) {

  stopFlag = false;
  const stop = document.querySelector('.stop');
  stop.classList.remove('hide');
  
  const init = document.querySelector(".init");
  const sort = document.querySelector(".sort");
  const rvalue = document.querySelector("#range-value");
  const range = document.querySelector("#value");
  


  init.disabled = true;
  range.disabled = true;
  rvalue.disabled = true;
  sort.disabled = true;
  
  init.classList.add('disabled');
  sort.classList.add('disabled');
  sort.classList.add('hide');

  time = speed;
  const desc = document.querySelector('#desc').checked;
  await method(desc, 0, arr.length-1);
  
  init.classList.remove('disabled');
  init.disabled = false;
  range.disabled = false;
  rvalue.disabled = false;

  sort.classList.remove('hide');
  stop.classList.add('hide');


}



document.querySelector('#value').addEventListener("input",function(){
  let box = document.querySelector('#range-value');
  box.value = this.value
  n = this.value;
  box.style.left = this.value/5+"%";
  init();
});

document.querySelector('.stop').addEventListener('click',function(){
  stopFlag = true;
  this.classList.add('hide');

});

document.querySelector("#range-value").addEventListener("input",function(){
  if(this.value > 500){ this.value = 500;}
  if(this.value < 2){ this.value = 2;}
  
  let range = document.querySelector('#value');
  range.value = this.value
  n = this.value;
  this.style.left = this.value/5+"%";
  init();
})


document.addEventListener("DOMContentLoaded", init);
document.querySelector(".init").addEventListener("click", init);

document.querySelector(".sort").addEventListener("click", ()=>{
  let technique = document.querySelector('#sort-method').value;
  let speed = document.querySelector('#speed').value;
  switch (speed) {
    case "0.25":
      speed = 300;
      break;
    case "0.5":
      speed = 200;
      break;
    case "0.75":
      speed = 100;
      break;
    case "1":
      speed = 70;
      break;
    case "1.25":
      speed = 50;
      break;
    case "1.50":
      speed = 30;
      break;
    case "1.75":
      speed = 20;
      break;
    case "2":
      speed = 10;
      break;
    default:
      speed = 0;
      break;
  }

  switch(technique){
    case "mergeSort":
      sort(mergeSort, speed);
      break;
    case "quickSort":
      sort(quickSort, speed);
      break;
    case "insertionSort":
      sort(insertionSort, speed);
      break;
    case "selectionSort":
      sort(selectionSort, speed);
      break;
    case "bubbleSort":
      sort(bubbleSort, speed);
      break;
  }
});

