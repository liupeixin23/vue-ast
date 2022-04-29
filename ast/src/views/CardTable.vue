<!--
 * @Author: your name
 * @Date: 2022-04-19 16:31:09
 * @LastEditTime: 2022-04-29 15:05:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lowcode-ui-antv/example/views/cardTable.vue
-->
<template>
  <div class="box">
    <LcCardTable
      :columns="cardTableColumns"
      :dataSource="dataSource"
      :rowName="rowName"
      :rowField="rowField"
    >
    </LcCardTable>
    <div>{{ dataSource[0] }}</div>
    <div>{{ dataSource[1] }}</div>
  </div>
</template>

<script>
import LcCardTable from '../../src/components/cardTable.vue';
export default {
  data () {
    return {
      cardTableColumns: [
        {
          title: '工单',
          dataIndex: 'order',
          key: 'order'
        },
        {
          title: '产品',
          dataIndex: 'production',
          key: 'production'
        },
        {
          title: '班组',
          dataIndex: 'group',
          key: 'group'
        },
        {
          title: '工序任务',
          dataIndex: 'job',
          key: 'job'
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status'
        },
        {
          title: '操作',
          dataIndex: 'options',
          key: 'options'
        }
      ],
      dataSource: [
        {
          order: '1234567890',
          age: '23',
          name: 'jone',
          sex: '男',
          count: [
            { key: 0, value: '第一行' },
            { key: 1, value: '第二行' },
            { key: 2, value: '第三行' },
            { key: 3, value: '第四行' }]
        },
        {
          order: '0987654321',
          age: '32',
          name: 'tom',
          sex: '女',
          count: [
            { key: 0, value: '第一行' },
            { key: 1, value: '第二行' },
            { key: 2, value: '第三行' },
            { key: 3, value: '第四行' }]
        }

      ],
      rowField: 'order',
      rowName: '工单'
    };
  },
  components: {
    LcCardTable,
  }
};
</script>

<style lang="less" scope>
.box {
  margin: 20px;
}
</style>
