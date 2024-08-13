/*
Basic Array Methods
Array length
Array toString()
Array at()->cars[0]
Array join() -> str+' '
Array pop()-> remove last element
Array push()

See Also:
Search Methods
Sort Methods
Iteration Methods	Array shift() ->remove first element
Array unshift() ->add new element from first
Array delete() ->dont use it
Array concat() ->stick two arrays to gether
Array copyWithin()
Array flat()
Array splice()->remove some elements
Array toSpliced()
Array slice()
*/
const cars=[];
cars[0]='bmw';
cars[1]='benz';
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("demo").innerHTML = "First number over 18 is " + first;

function myFunction(value, index, array) {
  return value > 18;
}
console.log(cars.join('*')+ ' ' + cars.length);