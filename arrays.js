var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray( ){
  var myArray = [1];
  const myElement= "foo"
  var newMyArray= ["foo",...myArray]
  return newMyArray
}

function destructivelyAddElementToBeginningOfArray(){
  var myArray = [1];
  myArray.unshift("foo")
  return myArray
}

function addElementToEndOfArray( ){
  var myArray = [1];
  const myElement= "foo"
  myArray.push(myElement)
  return myArray
}

function destructivelyAddElementToEndOfArray(){
  var myArray = [1];
  const myElementOne= "foo"
  myArrayOne.push(myElementOne)
  return myArrayOne
}

function accessElementInArray(){
  var myArray = [3];
  return myArray[0]
}

function destructivelyRemoveElementFromBeginningOfArray(){
var myArray = [1,2,3];
myArray.shift()
 return myArray
}

function removeElementFromBeginningOfArray(){
  var myArray = [1,2,3]
  return  myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(){
  var myArray = [1,2,3]
 myArray.pop()
 return myArray
}

function removeElementFromEndOfArray(){
  var myArray = [1,2,3]
  newMyArray = myArray.slice(0,myArray.length-1)
 return newMyArray
}