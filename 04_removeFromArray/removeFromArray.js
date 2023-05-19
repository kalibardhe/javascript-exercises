const removeFromArray = function(array, ...values) {
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (!values.includes(element)) {
        newArray.push(element);
      }
    }
    
    return newArray;
  };
  
  
  
  

// Do not edit below this line
module.exports = removeFromArray;
