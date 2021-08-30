/*
Además resolver la siguiente serie infinita
S= 4 - (4/3)
+ (4/5) - (4/7)
+ (4/9) - (4/11)
+ (4/13) - (4/15)
+ (4/17) .....
Oscar Alberto Nazarit Campos
*/

class Main{
    constructor(){
        this.main();
    }

    main(){
        let S = this.Exercise1(4)
        let e = this.Exercise2();

        console.log(S);
        console.log(e);
    }

    Exercise1(S){
        let y = 3;
        for(let i = 1; i <= 10; i++){
            S -= (4/y);
            y+=2;
            S += (4/y);
            y+=2;
        }
       return(S.toFixed(8));
    }

    Exercise2(){
        let e = 1;
        for(let i = 1; i <= 10; i++){
            e += 1/(this.getFactorial(i));
        }
        return(e.toFixed(8));
    }

    getFactorial(x){
        let fac = 1;
        for(let i = 1; i <= x; i++){
            fac *= i;
        }
        return(fac);
    }
}

new Main();