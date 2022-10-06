let s = [3,5,78,3,5,8,9];
for (let i=0;i<s.length;i++)
{
    for(let j=i+1;j<s.length;j++)
    {
        let temp = 0;
        if(s[i]<=s[j])
        {
            temp=s[i];
            s[i]=s[j];
            s[j]=temp;
        }
    }
}
document.write(s)
