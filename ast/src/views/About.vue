<template>
  <div class="my-transfer">
    <div class="transfer-box">
      <div class="transfer-item item-left">
        <div class="search-box">
          <a-input v-model.trim="filterText" placeholder="" class="custom-input" clearable></a-input>
          <a-button class="search-btn" icon="search" @click="handlerSearch"></a-button>
        </div>
        <div class="data-lists">
          {{ checkedKeys }}
          <a-tree
            v-model="checkedKeys"
            checkable
            show-icon
            :expanded-keys="expandedKeys"
            :auto-expand-parent="autoExpandParent"
            :selected-keys="selectedKeys"
            :tree-data="treeOptions"
            :replace-fields="replaceFields"
            @expand="onExpand"
            @select="onSelect"
            @check="onCheck"
          >
            <template slot="custom" slot-scope="item"> {{ item.name }}- </template>
          </a-tree>
        </div>
      </div>
      <div class="transfer-item item-right">
        {{ checkData }}
        <div class="btn-box">
          <p class="right-title">已选择</p>
          <p class="del-btn" @click="handlerClearSelected">清除</p>
        </div>
        <div class="check-list">
          <ul class="check-ul">
            <li v-for="(item, i) in checkData" :key="i">
              <p style="display: flex; align-items: center">
                <span class="icon iconfont icon-icon120"></span>
                <span class="user-name">{{ item.name }}</span>
              </p>
              <span class="iconfont icon-close del-btn" @click="delItem(item, i)"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { treeData } from './index.js';
export default {
  name: 'MyTransfer',
  props: {
    treeOptions: {
      type: Array,
      required: true,
      default: () => [],
    },
    userList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filterText: '', // 搜索文本
      searchType: 'dept', // 查询类型
      checkData: [], // 左边 选中数据
      originalData: [], // 全部备选数据
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      map: new Map(),
      replaceFields: { children: 'users', title: 'name', key: 'id' },
      // mapTree: new Map(),
      treeData: [],
    };
  },
  computed: {
    // crumbsStr() {
    //   return `${this.crumbs.map(e => e.name).join('/')}/`;
    // },
  },
  created() {
    this.initData();
  },
  methods: {
    // 清除选中数据
    handlerClearSelected() {
      this.checkData = [];
      this.checkedKeys = [];
      this.$emit('onCheckBoxChange', this.checkData);
    },
    // 删除本条数据
    delItem(item, i) {
      console.log(item, i);
      let key = this.checkedKeys.indexOf(item.key);
      // let key1 = this.checkedKeys.indexOf('0-0-0');
      if (key > -1) {
        this.checkedKeys.splice(key, 1);
      }
      this.checkData.splice(i, 1);
    },
    // 查询
    handlerSearch() {
      this.$emit('getUserList', this.filterText);
    },
    // 初始化数据
    initData() {
      this.checkData = this.userList;
      this.userList.map((item, i) => {
        this.checkedKeys.push(item.id);
      });
    },
    // 展开/收起节点时触发
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
      console.log(expandedKeys, 1);
    },
    // 	点击树节点触发
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys;
      console.log(selectedKeys, info, 2);
    },
    //点击复选框触发
    onCheck(checkedKeys, e) {
      // console.log(checkedKeys, e.node.$parent.eventKey, e.checked, e.node.dataRef);
      let data = e?.node?.dataRef;
      // this.mapTree.set(e.node?.dataRef?.key, e.node?.$parent?.eventKey);
      // console.log(this.mapTree, 133);
      let fncall = data => {
        if (data?.users?.length) {
          data?.users.forEach(item => {
            fncall(item);
          });
        } else if (data.type !== 'deportment') {
          // console.log(data, 164);
          if (e.checked) {
            this.map.set(data.id, data);
          } else {
            this.map.delete(data.id);
          }
          console.log(this.map, 145);
          this.checkData = [...this.map.values()];
        }
      };
      fncall(data);
    },
    // 多选框选中取消事件
    onCheckBoxChange(event, e) {
      console.log(event, e);
      let index = this.checkData.findIndex(item => item.id == e.id);
      if (index == -1) {
        if (event) {
          //防止选中时的重复选项
          if (this.checkedKeys.includes(e.id)) {
            return false;
          }
          this.checkData.push(e);
        } else {
          this.checkData.splice(index, 1);
        }

        this.$emit('onCheckBoxChange', this.checkData);
      } else {
        this.checkData.splice(index, 1);
        this.$emit('onCheckBoxChange', this.checkData);
      }
    },
  },
};
</script>

<style scoped lang="less">
.my-transfer {
  width: 100%;
  height: 100%;
  .transfer-box {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    box-sizing: border-box;
    .transfer-item {
      width: 291px;
      height: 100%;
    }
    .item-left {
      border-right: 1px solid #e5e5e5;
      padding: 0 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .search-box {
        display: flex;
        margin-bottom: 16px;
        input {
          border-radius: 8px 0px 0px 8px;
        }
        .search-btn {
          min-width: 43px !important;
          width: 43px !important;
          border-radius: 0px 8px 8px 0px;
        }
      }
      .data-lists {
        flex: 1;
        overflow: auto;
        .ant-checkbox-wrapper {
          display: flex;
          align-items: center;
          min-height: 34px;
          margin-left: 8px;
        }
      }
    }
    .item-right {
      padding: 0 10px 0 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .btn-box {
        height: 20px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 19px;
        .right-title {
          width: 36px;
          height: 20px;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.8500000238418579);
          line-height: 20px;
        }
        .del-btn {
          width: 24px;
          height: 20px;
          font-size: 12px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #18a0fb;
          line-height: 20px;
        }
      }
      .check-list {
        flex: 1;
        overflow: auto;
        .check-ul {
          display: flex;
          flex-direction: column;
          padding: 0 6px 0 0;
          box-sizing: border-box;
          li {
            height: 34px;
            line-height: 34px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
.action {
  font-size: 20px;
  margin-right: 8px;
}
.del-btn {
  cursor: pointer;
}
::v-deep .custom-input .el-input__inner {
  width: 217px !important;
  height: 32px !important;
  line-height: 32px !important;
  border-radius: 8px 0 0 8px !important;
}

::v-deep .custom-select {
  input:focus,
  input[type='text']:focus-visible,
  input[type='password']:focus-visible {
    border-color: transparent !important;
    box-shadow: none;
  }
}

.user-name {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
