let checkPrime = function (nr) {
    if(typeof nr !== "number"){
        console.log(nr + " is not of right format. Exiting..");
        return;
    }
    if (nr === 2) console.log(nr + " is a prime number");
    let isPrime = true;
    for(let i=2; i<nr; i++) {
        if(nr%i === 0) {
            isPrime = false;
            console.log(nr + " is not a prime number");
            return;
        }
    }
    console.log(nr + " is a prime number");
    
};

checkPrime(1);



 let testFunction = function(a) {

       a = 3;
     console.log(this.a);

 };
 testFunction(5);