// import { readonly } from 'core-decorators'

// class Person {
//     @readonly
//     name() {
//         return 'zhang'
//     }
// }

// let p = new Person()
// alert(p.name())
// // p.name = function () { /*...*/ }  // 此处会报错


import { deprecate } from 'core-decorators';
// deprecate装饰器也是常规的闭包形式 可以传参数那种，1参是提示废弃提示文本，2参对象是提示配置信息，url是See 后接的链接
class Person {
  @deprecate
  facepalm() {}

  @deprecate('We stopped facepalming')
  facepalmHard() {}

  @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
  facepalmHarder() {}
}

let person = new Person();

person.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard();
// DEPRECATION Person#facepalmHard: We stopped facepalming

person.facepalmHarder();
// DEPRECATION Person#facepalmHarder: We stopped facepalming
//
//     See http://knowyourmeme.com/memes/facepalm for more details.
