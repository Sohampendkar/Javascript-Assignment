function repeatdigit(N){
    var res=0;
    var c = Array(10).fill(0);
    while(N>0);{
        var rem=N%10;
        c[rem]++;
        N=Math.floor(N/10);
    } 
    for(var i=0;i<10;i++){
        if(c[i]>1){
            res++
        }
    }
    return res;
}
var N=7312140905;
document.write (repeatdigit(N));