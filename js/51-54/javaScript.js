let str1='',str2='',str3='',str4='';

for (let x = 1; x < 6; x++) {
    for (let i = 1; i < x+1; i++) {
       
        str1+='*';
        
    }
    str1+='\n';
}
for (let y = 5; y>0; y--) {
    for (let j = y; j >0; j--) {
        
        str2+='*';
    }
    str2+='\n';
    
}
for (let x = 1; x < 6; x++) {
    for (let j = x; j<5-x; j++) {
        str3+=' ';
        
       }
    for (let i = 1; i < x+1; i++) {
       
        str3+='*';
        
    }
    str3+='\n';
}
for (let y = 5; y>0; y--) {
    for (let j= 5-y; j>0; j--) {
        str4+=' ';
        
       }
    for (let j = y; j >0; j--) {
        
        str4+='*';
    }
    str4+='\n';
    
}

console.log(str1+'\n'+str2+'\n'+str3+'\n'+str4);