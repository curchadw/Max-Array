let array = [3,9,2,5,1]


const max = array =>{
  let currentMax = array[0]
  for (let i = 1; i<array.length; i++){
    if(array[i] > currentMax){
      currentMax = array[i]
    }else{
      continue
    }
  }

  return currentMax
}




