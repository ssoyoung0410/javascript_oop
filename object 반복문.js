var memberArray = ['egoing' , 'grahittie' , 'leezche'];
console.group('array loop');
var i = 0;
while(i <memberArray.length){
    console.log(i, memberArray[i]);
    i = i+1;
}
console.groupEnd('array loop');
var memberObject = {
    manger:'egoing',
    developer:'grahittie',
    designer:'leezche',
}

console.group('object loop');
for(var name in memberObject){
    console.log(name ,memberObject[name]);
}


console.groupEnd('object loop');