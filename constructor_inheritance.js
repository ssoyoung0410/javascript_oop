function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function() {  //Person을 통해 생성된 모든객체가 
    //sum 사용가능. 
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second, third);
    //call안의 this는 PersonPlus함수를 통해서만들어질 객체

    this.third = third;
}

PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg= function(){
    return (this.first+this.second+this.third)/3
} 


var kim = new PersonPlus('kim', 10, 20,30);
console.log(kim.sum());
console.log(kim.constructor); 