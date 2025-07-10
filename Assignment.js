// To check whether it is prime or not
function isPrime(num){
    if(num === 1)return false;
    if(num === 2)return true;
    return num%2!==0;
}

let result = isPrime(6);
// console.log(result);

// Max and Min element from an array
function max_min(arr)
{
    let max = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max = arr[i]
        }
    }
    let min = Number.MAX_VALUE;
    for(let i=0;i<arr.length;i++)
    {
        if(min>arr[i])
        {
            min = arr[i]
        }
    }

    return {maxi:max,mini:min};
}
let arr = [1,23,4,66,0,77];
let res = max_min(arr);
// console.log(res.maxi);
// console.log(res.mini);


// To reverse a string
function reverse(str)
{
    let j=str.length-1;
    
    // for(i=0;i<str.length;i++)
    // {
    //     if(i<j)
    //     {
    //     let t = str[i];
    //     str[i] = str[j];
    //     str[j] = t;
    //     j--;
    //     }
    // }

    
    let newStr = "";
    for(i=j;i>=0;i--)
    {
        newStr+=str[i];
    }
    return newStr;    
}

let str = "Singh";
// reverse(str);
str = reverse(str);
// console.log(str);


// OOPS
class BankAccount{
    constructor(accountNumber,accountHolderName,balance)
    {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    checkBalance()
    {
        return this.balance;
    }
    deposit(amt)
    {
        this.balance = this.balance + amt;
    }
    withdraw(amt)
    {
        if(amt <= this.balance)
        {
            this.balance-= amt;
            return amt;
        }
        return `Insufficient Balance in account`;
    }
}

let user = new BankAccount(1234,"Kartik Singh Bisht",10200);
// check balance
console.log(user.checkBalance());

// deposit
user.deposit(1000);
console.log(user.checkBalance());

// withdraw money
let paisa = user.withdraw(10000);
// let paisa = user.withdraw(100000);
console.log(user.checkBalance());
console.log(paisa);


