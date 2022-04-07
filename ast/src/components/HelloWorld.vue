<!--
 * @Author: your name
 * @Date: 2022-04-07 14:34:56
 * @LastEditTime: 2022-04-07 16:30:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    {{ myCode }}
  </div>
</template>

<script>
import res from './test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      myCode: '123'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.myCode = res
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
</style>
