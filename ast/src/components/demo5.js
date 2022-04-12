/*
 * @Author: your name
 * @Date: 2022-04-08 16:02:02
 * @LastEditTime: 2022-04-12 16:00:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/demo3.js
 */
const $ = require('gogocode');

export const oldCode = `
<template>
  <div class="about">
    <a-input placeholder="请输入" v-model:value="oldVal"></a-input>
    <a-button type="primary" @click="handelSearch">搜索</a-button>
  </div>
</template>
<script>
  export default {
    name: 'demo',
    data () {
      return {
        newVal: '',
        oldVal: ''
      }
    },
    components: {
      codemirror
    },
    mounted () {
    },
    methods: {
      handelSearch(){
        console.log('搜索')
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
  .replace(`<a-input>$$$1</a-input>`, '') //删除
  .replace(`<a-button>$$$1</a-button>`, `<a-button type="dashed" @click="handelSubmit">提交</a-button>`)
  .find(`<div>$$$1</div>`)
  .after(`<div>添加的内容</div>`)  // 添加
  .root()
  .find('<script></script>')
  .replace(`handelSearch(){ $$$1 }`, `handelSubmit(){console.log('提交')}`)
  .root()
  .generate()
