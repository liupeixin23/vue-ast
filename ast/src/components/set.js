/*
 * @Author: your name
 * @Date: 2022-04-11 11:08:45
 * @LastEditTime: 2022-04-11 18:00:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/set.js
 */
const glob = require('glob');
const $ = require('gogocode');

glob('./demo5.js', function (err, files) {
  files.forEach(function (file) {
    console.log(12)
    rewrite(file);
  })
})
function rewrite (filePath) {
  const newCode = $.loadFile(filePath)
    .replace(`let $_$1 = 0`, `let $_$1 = 1`)
    .generate()
  $.writeFile(newCode, filePath);
}