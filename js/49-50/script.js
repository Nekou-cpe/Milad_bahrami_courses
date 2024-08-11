let x=5;

do {
    x++;
    if (x/2==0){
        continue;
    }
    else{
        break;
    }
    
} while (x<100);
console.log(x);