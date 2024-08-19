//rest operation
function sum(...input){
    let summ=0;
    for (let i of input) {
        summ+=i;
        
    }
    return summ;
}
//defulte parametr
function defun(num1,num2,num3=0){
    let append=num1+num2+num3;
    return append;
}
//range prime
function isprime(num){
    for(let j=2; j<=num/2+1;j++){
        if(i/num==0){
            break;
        }
    }
      
}
function  rangeprim(first,last){
    const result=[];
    for (let i = first; i < last+1; i++) {
        
        result.push(i);
    }
    return result;
}
//arrow function
let power=function(num22,num33){
    return num22**num33;
}
//callback function
function firstfunc(callback,number){
    callback()
    console.log('first function',number);
}
function secondfunc(callback){
    console.log('second function');
}
console.log(sum(2,4,5,7,57,9,98));
console.log(defun(2,3));
console.log(rangeprim(7,80))
console.log(power(2,3))
firstfunc(secondfunc,3);