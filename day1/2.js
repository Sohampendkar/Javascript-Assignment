let rem;
let rev=0;
let num=123;
while(num!=0)
{
    rem=num%10;
    rev=(rev*10)+rem;
    num=Math.floor(num/10);
    
}
let reverse=rev;
console.log(reverse);