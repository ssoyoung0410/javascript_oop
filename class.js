class Person{
    constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
    sum() {
        return 'prototype : ' +(this.first+this.second); //function 키워드 사용하지 X
    } 
}

class PersonPlus extends Person{
    avg() {
        return (this.first+this.second)/2;
    }
}


var kim = new PersonPlus('kim', 10, 20);
console.log(kim.sum());

