// console.log(Math.PI);
// console.log(Math.random()); //random()은 method라고 한다.
// console.log(Math.floor(3.9));

var MyMath = {
    PI : Math.PI,
    random: function() {
        return Math.random();
    },
    floor: function(val) {
        return Math.floor(val);
    }
}

console.log(MyMath.floor(5.8));