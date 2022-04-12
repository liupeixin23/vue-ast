/*
 * @Author: your name
 * @Date: 2022-04-12 16:42:47
 * @LastEditTime: 2022-04-12 16:51:43
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