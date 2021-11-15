//1

const food=['pizza','burgr','fingerChips','donuts','springRoll'];
const modifidFood=(food)=>
{
   return food.slice(1,food.length-1);
}

//2

food.splice(2,0,"noodles","icecream");
console.log('food array',food);

//3

const numberArray=[12,324,213,4,2,3,45,4234];
lambda=(num)=>num%2==0;
isEven=(numberArray)=>
{
    return numberArray.filter((num)=>lambda(num));
}
console.log(isEven(numberArray));
console.log(lambda(5));

//4

const numberArr = [12, 324, 213, 4, 2, 3, 45, 4234];
prime = (numberArr) => 
{
    var nonprime=[];
    let k=0;
    var prime = numberArr.filter((num) => 
    {
        let count = 0;
        for (i = 2; i <= num / 2; i++)
        {
            if (num % i == 0) 
            {
                nonprime[k]=num;
                count++;
            }
        }
        if (count == 0) 
        {
            return num;
        }
        k+=1;
    })
    console.log('Non-prime numbers',nonprime);
    console.log('Prime numbers',prime);
}
prime(numberArr);

//5

const numberArray=[12,324,213,4,2,3,45,4234];
lambda=(num)=>num%2==0;
isEven=(numberArray)=>
{
    return numberArray.filter((num)=>lambda(num));
}
console.log(isEven(numberArray));
console.log(lambda(5));

//6
square=[11,34,20,5,53,16];
findSquarofNumbers=(number)=>
{
return number.map(x=>x*x);
}
console.log(findSquarofNumbers(square));


//7
reduce=[2,3,5,10];
multiply=(number)=>
{
return number.reduce((num1,num2)=>
{
    return num1*num2;
});
}
console.log(multiply(reduce));
