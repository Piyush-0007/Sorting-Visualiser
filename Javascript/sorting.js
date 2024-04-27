import { arr, time, stopFlag } from "./index.js";

export function display() {
  const container = document.querySelector(".container");
  let html = ``;
  for (let i = 0; i < arr.length; i++) {
    html += `
              <div class = "element">
                  <div class="bar idx-${i}" style="height:${arr[i]}%;"></div>
              </div>
          `;
  }
  // if(window.innerWidth > )
  container.innerHTML = html;
}

//bubble sort Algorithm
export async function bubbleSort() {
  let flag = false,
    len = arr.length;
  do {
    flag = false;
    for (let j = 0; j < len - 1; j++) {
      if(desc){
        if (arr[j] > arr[j + 1]) {  
          flag = true;

          const ele1 = document.querySelector(`.idx-${j}`);
          const ele2 = document.querySelector(`.idx-${j + 1}`);
          ele1.style.background = "red";
          ele2.style.background = "red";

          await swap(j, j + 1);
          display();
          if (stopFlag) {
            return;
          }
        }

      }else{

        if (arr[j] <arr[j + 1]) {  
          flag = true;

          const ele1 = document.querySelector(`.idx-${j}`);
          const ele2 = document.querySelector(`.idx-${j + 1}`);
          ele1.style.background = "red";
          ele2.style.background = "red";

          await swap(j, j + 1);
          display();
          if (stopFlag) {
            return;
          }
        }
      }
    }
    len--;
  } while (flag);
}
async function swap(idx1, idx2) {
  await new Promise((resolve) => setTimeout(resolve, time));
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


//merge sort Algorithm
export async function mergeSort(desc, low = 0, high = arr.length - 1) {
  if (stopFlag) { return; }
  if (low >= high) {
    return;
  }
  const mid = low + Math.floor((high - low) / 2);
  await mergeSort(desc, low, mid);
  await mergeSort(desc, mid + 1, high);
  await merge(low, mid, high, desc);
}
async function merge(low, mid, high, desc) {
  if (stopFlag) { return; }

  const res = [];
  let i = low,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= high) {
    if(desc){
      if ( arr[i] > arr[j] ) {
        res[k++] = arr[i++];
      } else {
        res[k++] = arr[j++];
      } 
    }else{
      if ( arr[i] < arr[j] ) {
        res[k++] = arr[i++];
      } else {
        res[k++] = arr[j++];
      }
    }

  }

  while (i <= mid) {
    res[k++] = arr[i++];
  }

  while (j <= high) {
    res[k++] = arr[j++];
  }
  // Copy elements back to original array with animation
  for (let i = 0, j = low; i < res.length; i++, j++) {
    const ele1 = document.querySelector(`.idx-${j}`);
    ele1.style.background = "red";

    await new Promise((resolve) => setTimeout(resolve, time));
    arr[j] = res[i];

    display();
    if (stopFlag) { return; }

  }
}

//selection Sort Algorithm
export async function selectionSort(desc) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    const replace = document.querySelector(`.idx-${i}`);
    replace.style.background = "#00bcff";

    for (let j = i + 1; j < arr.length; j++) {
      const counter = document.querySelector(`.idx-${j}`);
      counter.style.background = "red";

      await new Promise((resolve) => setTimeout(resolve, time));
      if(desc){
        if (arr[min] < arr[j]) {
          if(min != i){
            const preMin = document.querySelector(`.idx-${min}`);
            preMin.style.background = "#2d819f";
          }
          min = j;
  
          const curMin = document.querySelector(`.idx-${min}`);
          curMin.style.background = "#36b936";//green
        }else{
          counter.style.background = "#2d819f";
        }
      }else{
        if (arr[min] > arr[j]) {
          if(min != i){
            const preMin = document.querySelector(`.idx-${min}`);
            preMin.style.background = "#2d819f";
          }
          min = j;
  
          const curMin = document.querySelector(`.idx-${min}`);
          curMin.style.background = "#36b936";//green
        }else{
          counter.style.background = "#2d819f";
        }
      }
      if (stopFlag) { return; }
    }
    if (min != i) {
      await swap(i, min);
      await new Promise((resolve) => setTimeout(resolve, time));
      document.querySelector(`.idx-${min}`).style.background = "magenta";
      replace.style.background = "green";
      await new Promise((resolve) => setTimeout(resolve, time));

    }
    display();
  }
}


//insertion sort algorithm
export async function insertionSort(desc) {
  for(let i = 1; i < arr.length; i++){
    document.querySelector(`.idx-${i}`).style.background = "red";
    if(desc){
      for(let j = i; j > 0 && arr[j] > arr[j-1]; j--){
        document.querySelector(`.idx-${j}`).style.background = "red";
        document.querySelector(`.idx-${j-1}`).style.background = "red";
        await swap(j, j-1);
        display();
        if (stopFlag) { return; }

      }

    }else{
      for(let j = i; j > 0 && arr[j] < arr[j-1]; j--){
        document.querySelector(`.idx-${j}`).style.background = "red";
        document.querySelector(`.idx-${j-1}`).style.background = "red";
        await swap(j, j-1);
        display();
        if (stopFlag) { return; }

      }
    }
    
  }
  display();
}


//quick sort algorithm
export async function quickSort(desc, low = 0, high = arr.length-1) {
  if (stopFlag) { return; }

  if(low >= high){return;}
  let pivot =await pivotSort(desc,low, high);
  await quickSort(desc, low, pivot-1);
  await quickSort(desc, pivot+1, high);
}
async function pivotSort(desc, low, high) {

  let itr = low-1;
  let val = arr[high];
  for(let i = low; i <= high; i++){
    document.querySelector(`.idx-${i}`).style.background = "red";
    if(desc){
      if(arr[i] >= val){
        itr++;
        if(i != itr)
          document.querySelector(`.idx-${itr}`).style.background = "red";
        await swap(itr, i);
        if (stopFlag) { return; }
      }
    }else{
      if(arr[i] <= val){
        itr++;
        if(i != itr)
          document.querySelector(`.idx-${itr}`).style.background = "red";
        await swap(itr, i);
        if (stopFlag) { return; }
      }
    }

    display();
  }
  return itr;
}
