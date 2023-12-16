document.write("4. to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array."+"<br>");
function test4(arr,n){
    if(n==null){
        return arr[arr.length-1];
    }
    if(n>arr.length)
    {
        return arr;
    }
    return arr.slice(arr.length-n,arr.length);
}
document.write(test4([7,9,0,-2])+"<br>");
document.write(test4([7,9,0,-2],3)+"<br>");
document.write(test4([7,9,0,-2],6)+"<br><br>");