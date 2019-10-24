var superObj = {superVal:'super'};
//var subObj = {subVal:'sub'};
//subObj.__proto__ = superObj; //prototype link를통한 상속
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
//debugger;

var kim = {
    name: 'kim',
    first:10, second:20,
    sum: function(){return this.first+this.second}
}

// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return this.first+this.second/2
//     },
// }

// lee.__proto__ = kim;
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2
}

console.log(lee.avg());