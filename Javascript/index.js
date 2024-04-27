import { bubbleSort, display, insertionSort, mergeSort, quickSort, selectionSort } from "./sorting.js";

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

async function sort(method) {

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

  const desc = document.querySelector('#desc').checked;
  await method(desc, 0, arr.length-1);
  
  init.classList.remove('disabled');
  init.disabled = false;
  range.disabled = false;
  rvalue.disabled = false;
  sort.disabled = false;

  stop.classList.add('hide'); 
  sort.classList.remove('hide');
  sort.classList.remove('disabled');


}



document.querySelector('#value').addEventListener("input",function(){
  let box = document.querySelector('#range-value');
  box.value = this.value
  n = this.value;
  box.style.left = this.value/10 + "%";
  init();
 
});

document.querySelector('.stop').addEventListener('click',function(){
  stopFlag = true;
  this.classList.add('hide');
  const sort = document.querySelector(".sort");
  sort.disabled = false;
  sort.classList.add('disabled');

 
});

document.querySelector("#range-value").addEventListener("input",function(){
  if(this.value > 999){ this.value = 999;}
  if(this.value < 2){ this.value = 2;}
  
  let range = document.querySelector('#value');
  range.value = this.value
  // n = this.value;
  this.style.left = this.value/10 + "%";
  init();
})


document.addEventListener("DOMContentLoaded", init);
document.querySelector(".init").addEventListener("click", init);

document.getElementById('speed').addEventListener('change',(e)=>{
  const inp = e.target.value;
  switch (inp) {
    case "0.25":
      time = 300;
      break;
    case "0.5":
      time = 200;
      break;
    case "0.75":
      time = 100;
      break;
    case "1":
      time = 70;
      break;
    case "1.25":
      time = 50;
      break;
    case "1.50":
      time = 30;
      break;
    case "1.75":
      time = 20;
      break;
    case "2":
      time = 10;
      break;
    default:
      time = 0;
      break;
  }

})
document.querySelector(".sort").addEventListener("click", ()=>{
  let technique = document.querySelector('#sort-method');

  switch(technique.value){
    case "mergeSort":
      sort(mergeSort);
      break;
    case "quickSort":
      sort(quickSort);
      break;
    case "insertionSort":
      sort(insertionSort);
      break;
    case "selectionSort":
      sort(selectionSort);
      break;
    case "bubbleSort":
      sort(bubbleSort);
      break;
  }
});

document.getElementById('menu').addEventListener('click',()=>{
    document.querySelector('.initial').classList.toggle('hide');

})
window.addEventListener('resize',()=>{
  if(window.innerWidth < 900){
    document.querySelector('.initial').classList.add('hide');
  }else{
    document.querySelector('.initial').classList.remove('hide');
  
  }
})
if(window.innerWidth < 900){
  document.querySelector('.initial').classList.add('hide');
}else{
  document.querySelector('.initial').classList.remove('hide');

}