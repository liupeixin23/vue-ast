<!--
 * @Author: your name
 * @Date: 2022-04-07 14:34:56
 * @LastEditTime: 2022-04-12 17:14:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    <h2>替换前</h2>
    <div class="box">
      <codemirror class="mymirror" v-model="oldCode"></codemirror>
      <div id="page1" class="page"></div>
    </div>
    <h2>替换后</h2>
    <div class="box">
      <codemirror class="mymirror" v-model="newCode"></codemirror>
      <div id="page2" class="page"></div>
    </div>
  </div>
</template>

<script> 
import { newCode, oldCode } from './demo5'
import { codemirror } from 'vue-codemirror-lite'
export default {
  name: 'HelloWorld',
  data () {
    return {
      newCode: '',
      oldCode: ''
    }
  },
  components: {
    codemirror,
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.newCode = newCode
      this.oldCode = oldCode
    }
  }
}
</script>

<style scoped lang="less">
.hello {
  .mymirror {
    width: 80%;
    text-align: left;
    /deep/ .CodeMirror {
      background-color: #1e1e1e !important;
      color: #007acc !important;
    }
  }
  .box {
    display: flex;
  }
  .page {
    margin-left: 30px;
  }
}
</style>
