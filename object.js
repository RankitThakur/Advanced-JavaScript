//////////////objassign////////

// const object1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// const object3= {
//   g: 1,
//   h: 2,
//   i: 3
// };
//                                 //target//   obj
// const object2 = Object.assign({c: 4, d: 5}, object1);
// const object4 = Object.assign({g: 34, h: 25}, object3);
// console.log(object2.c, object2.d);
// console.log(object4.g, object4.h);


//////Object.create////


// let me  = {}
// let object5 = Object.create(me)
// object5.name = "rankit"
// object5.class = "rankit"
// object5.id = "rankit"
// object5.number = "rankit"

// console.log(Object.is(object5))


// Object.hasOwn()

// let me  = {}
// let object5 = Object.create(me)
// object5.name = null
// object5.class = "rankit"
// object5.id = "rankit"
// object5.number = "rankit"

// console.log(Object.hasOwn(object5,'name'))
// console.log(Object.hasOwn(object5,'classs'))


// Object.key()/////////////////////////////////////////


// let me  = {}
// let object5 = Object.create(me)
// object5.name = null
// object5.class = "rankit"
// object5.id = "rankit"
// object5.number = "rankit"
// console.log(object5)




////compare two object


let obj1 = {

  id: "rankit",
  value: 821171017
}

let obj2 = {

  id: "rankit",
  value: 821171017
}

console.log(obj1==obj2)
////false becouse object is call by value





