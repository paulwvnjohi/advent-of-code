import { dataSet } from "./dataSet.js";

let array = dataSet;
for (let index = 0; index < array.length; index++) {
  let item = array[index];
  for (let index = 0; index < array.length; index++) {
    if (item + array[index] === 2020) {
      console.log("done",item ,array[index], item * array[index]);
      break
    }
  }
}

//sum two num - if less than 2020 push to arr
for (const iterator1 of dataSet) {
    for (const iterator2 of dataSet) {
        for (const iterator3 of dataSet) {
            if(iterator1 + iterator2 + iterator3 === 2020){
                console.log(iterator1 * iterator2 * iterator3)
                break
            }
        }
    }
    
}