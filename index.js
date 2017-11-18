// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(drivername => drivername.toLowerCase())
}

function nameToAttributes(array){
  return array.map(function(name){
    return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]}
  }  
}