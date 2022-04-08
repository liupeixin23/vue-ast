/*
 * @Author: your name
 * @Date: 2022-04-07 16:34:02
 * @LastEditTime: 2022-04-08 16:00:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/demo1.js
 */

const $ = require('gogocode');

export const oldCode = `
  const moment = require('moment');
  var a = 1;
  const b = 2;
  function log (x, y = 'World') {
    console.log('a')
    console.log(a, x, y);
  }
`;
export const newCode = $(oldCode)
  .find('var a = 1')
  .attr('declarations.0.id.name', 'c')
  .root()
  .generate();
