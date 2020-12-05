let funnyArray=[1,4,2,56,3,'f','t','x'];
console.log(funnyArray.reverse());
console.log(funnyArray.pop())
console.log(funnyArray)

function power(item){
    if(isNaN(item)==false)
        console.log(item*item)
}
funnyArray.forEach(power);

let str='';
for(let item of funnyArray){
    if(isNaN(item)==true){
        for(i=0;i<=5;i++)
            str += item;
    }
}
console.log(str);

// helpehelepehelehe[ehelehepehelkeheph,ehedpe]