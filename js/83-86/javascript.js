//global or function or block variable
function funval(num){
    x=9;
    let y=5; //function variable
    if(y==5){
        let z=9;//block variable
    }
    return x+y;

}
let x=0;//global variable

console.log(x);
console.log(y);
console.log(z);
