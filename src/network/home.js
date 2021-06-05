import {request} from "@/network/request";

export function getHomeMuleidata(){
  return request({
    url: "/home/multidata"
  })
}

// 函数调用 --> 压入函数栈中(保存函数调用过程中所有变量)
// 函数调用结束 --> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const name = ['biutefou', 'bbb']
// }
// test()
