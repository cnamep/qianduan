

var array = [
    0,
    [1,2,3],
    [2,4,6,7]
];

var array1 = [
    1,5,7,8
];


console.log( array1 instanceof Array);

for(var i = 0;i<array.length;i++){
    if(array[i] instanceof Object){
        for(var j = 0;j<array[i].length;j++){
            console.log(array[i][j]);
        }
    }else{
        console.log(array[i]);
    }
    console.log(typeof array[i]);
}
var result = array1.push(array1.length+1);
console.log( result instanceof Array);
console.log(result.length);

function sun(...args){
    console.log(arguments);   
}

sun(1,33,4,4,4,4,4); 