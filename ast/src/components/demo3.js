/*
 * @Author: your name
 * @Date: 2022-04-08 16:02:02
 * @LastEditTime: 2022-04-08 16:37:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/demo3.js
 */
const $ = require('gogocode');

export const oldCode = `
<template>
  <div class="about">
    <h1>This is an Home page {{newCode}}</h1>
    <h1>This is an about page {{oldCode}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        newCode: '',
        oldCode: ''
      }
    },
    components: {
      codemirror
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.newCode = 'newCode'
        this.oldCode = 'oldCode'
      }
    }
  }
</script>
`

export const newCode = $(oldCode, {
  parseOptions: {
    language: 'vue'
  }
})
  .find('<template></template>')
  .replace(`<h1>$$$1</h1>`, `<h2>$$$1 Test</h2>`)
  .root()
  .find('<script></script>')
  .replace(`'newCode'`, `'firstName'`)
  .replace(`'oldCode'`, `'lastName'`)
  .root()
  .generate()
