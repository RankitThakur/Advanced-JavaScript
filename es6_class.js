class person {

  constructor(a,b,c,...rest){

    this.name = a
    this.age = b
    this.number = c
  }

  sayhi(){
    console.log("hello.....")
  }

  static sayhello(){

    console.log("sayhi")
  }
}


let obj = new person("rankit",20,7974709574,25 )
person.sayhello()
console.log(obj)
