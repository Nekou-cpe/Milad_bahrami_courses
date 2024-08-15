        //p1 and p2 are parametrs
        function myfunction1(p1,p2){
            return p1+p2;
        }
        
        function average(arr1){
            for (let i = 0; i < arr1.length; i++) {
                total=total+arr1[i];
            }

            aver=total/arr1.length;
            return aver;
        }
        function sum(){
            let element=0;
            for (let i = 0; i < arguments.length; i++) {
                 element += arguments[i];
                
            }
            return element;
        }

        let x=myfunction1(10,12);
        const arr1=[10,20,19,4,8,2,3,4];
        let total=0 ,aver=0;
        let y=average(arr1);
        console.log(x);
        if (y>12){
            console.log('passed');
        }
        else{
            console.log('not passed');
        }
        console.log(sum(2,3,5,6,7,9,4,5,6,7,3))
        
        