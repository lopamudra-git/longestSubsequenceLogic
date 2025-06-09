let intArr=[12,4,633,1,4,8,2,5]
const longestIncreasingSequence=(arr)=>{
let longestSeqArr=[]
arr.forEach((element,index) => {
    let seqArr=[element]
    for(let i= index+1 ; i< arr.length;i++){
        if(element < arr[i] && seqArr[seqArr.length-1] <arr[i]) {
            seqArr.push(arr[i])
        }
    }

    longestSeqArr = seqArr.length > longestSeqArr.length ? seqArr : longestSeqArr
});
console.log(longestSeqArr.length)

return longestSeqArr.length
}
longestIncreasingSequence(intArr)