var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray( ){
  var myArray = [1];
  var newMyArray= ["foo",...myArray]
  return MyArray
}

function destructivelyAddElementToBeginningOfArray(){
  var myArrayOne = [1];
  myArrayOne.unshift("foo")
  return myArrayOne
}

function addElementToEndOfArray( ){
  var myArray = [1];
  const myElement= "foo"
  myArray.push(myElement)
  return myArray
}

function destructivelyAddElementToEndOfArray(){
  var myArrayOne = [1];
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
  myArray.slice(1)
  return myArray
}

function destructivelyRemoveElementFromEndOfArray(){
  var myArray = [1,2,3]
 myArray.pop()
 return myArray
}

function removeElementFromEndOfArray(){
  var myArray = [1,2,3]
 var newMyArray= myArray.pop()
 return newMyArray
}