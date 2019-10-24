var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee',first:10, second:10}
function sum(prefix) {
    //this = kim;
    return prefix+(this.first + this.second);
};
//sum.call() 은 sum()과 같다.
console.log(sum.call(kim)); //this = kim;

var kimSum = sum.bind(kim,'-> ');
console.log(kimSum());