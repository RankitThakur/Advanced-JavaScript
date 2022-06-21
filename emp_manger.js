class emp {
  constructor(name,id,num){
    this.name = name
    this.id = id
    this.num = num
    // console.log(`user name ${name},user id ${id},user num ${id}`)
  }

  msg(){
    // console.log(`hello ${this.name}`)
  }


}
//////class manger/////////////
class manger extends emp {
  constructor(name,main_id){

    super(name)
    this.main_id = main_id
  }
  msg(){
    console.log(`hello ${this.name}`)
    }

  info(){
    this.msg()
    // console.log(`name : ${this.name} and id : ${this.main_id}`)
  }

}

////////class admin//////////////

 class admin extends manger {
  constructor(name,admin_id){
    super(name)
    admin_id = admin_id
    console.log(`user name ${name},admin_id ${admin_id}`)

  }


 }

let obj = new admin("Aankit",797470987)

console.log(obj)

