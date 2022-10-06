let arr=[1,5,1,2,9,4,4,5,6,7,7];
let fLargest=0;
let sLargest=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>fLargest){

    
    sLargest=fLargest;
            fLargest=arr[i];
    }
}
    
        console.log('two largest number in are '+fLargest+' '+sLargest);