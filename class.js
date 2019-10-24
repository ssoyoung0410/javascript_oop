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

class PersonPlus extends Person{ // extends로 부모 클래스 상속받는 방법.
    constructor(name, first, second,third){
        super(name,first,second);
        this.third = third;
    }
    sum() {
            return super.sum()+this.third; //function 키워드 사용하지 X
    } 
    avg() { //추가하고자 하는 코드만 작성하면됨! 부모 클래스(Person)에 있는 속성을 함께 공유하여 
            //자식 클래스(PersonPlus)도 사용 할수있다.
        return (this.first+this.second)/2; //자식에 추가된메소드
    }
}


var kim = new PersonPlus('kim', 10, 20);
console.log(kim.sum());

