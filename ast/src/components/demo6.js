/*
 * @Author: your name
 * @Date: 2022-04-12 16:42:47
 * @LastEditTime: 2022-04-13 17:33:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/demo6.js
 */
const $ = require('gogocode');
// 获取fetch变量，将其变量名改为request
const res = $(`const fetch = () => {}; const noChange = 'fetch'`)
  .find('fetch')
  .each(item => {
    item.attr('name', 'request')        // 任意的节点属性都可以通过attr来获取或者修改
  })
  .root()
  .generate()

console.log(res)


// 赋值(Assignment)与定义(Declaration)语句需要区分开 
// 获取所有赋值语句
$(code)
  .find(`$_$1 = $_$2`)
  .each(item => {
    console.log(item.match[1])
    console.log(item.match[2])
  })

// 获取对 this.isOpen 的赋值语句
$(code)
  .find('this.isOpen = $_$2')
  .each(item => {
    console.log(item.match[2])
  })

// 获取对car对象中的color属性的赋值语句
$(code)
  .find('car.color = $_$2')

// 获取对任意对象中的color属性的赋值语句
$(code)
  .find('$_$1.color = $_$2')

// 获取被[1, 2]赋值的变量名
$(code)
  .find('$_$1 = [1, 2]')