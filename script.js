function sort(t) {
    for (let i=1 ; i< t.length; i++){
       var v = t[i]
       var j = i-1
       while(j>=0 && t[j]>v){
        t[j+1]=t[j]
        j--
       }
       t[j+1]=v

    }
}

var t =[5,8,4,1,3,2,1,7]
sort(t)
console.log(t)