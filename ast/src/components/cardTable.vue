<template>
  <div class="lc-card-table">
    <div class="header-box">
      <template>
        <div
          v-for="(item, index) in columns"
          class="title"
          :style="{ width: tdWidth, 'text-align': 'center' }"
          :key="index"
        >
          {{ item.title }}
        </div>
      </template>
    </div>
    <template>
      <div
        v-for="(data, dataIndex) in dataSource"
        class="body-box"
        :key="dataIndex"
      >
        <div class="body-content" :style="{ '--tdWidth': tdWidth }">
          <div class="lc-Info">
            <div>订单: {{ data.order }}</div>
          </div>
          <div class="lc-Info">
            <div>名称: {{ data.name }}</div>
          </div>
          <div class="lc-Info">
            <div>年龄: {{ data.age }}</div>
          </div>
          <div class="lc-Info">
            <div>性别: {{ data.sex }}</div>
          </div>
          <div class="lc-Info">
            <div
              class="lc-Info-column"
              v-for="(item, index) in data.count"
              :key="index"
            >
              <div>{{ item.value }}</div>
            </div>
          </div>
          <div class="lc-Info-btn">
            <a-button type="primary"> 派发 </a-button>
            <a-button>修改</a-button>
            <a-button type="dashed"> 详情 </a-button>
            <a-button type="danger"> 删除 </a-button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LcCardTable',
  props: {
    columns: {
      type: Array,
      require: true,
      default: () => {
        return [];
      }
    },
    dataSource: {
      type: Array,
      require: true,
      default: () => {
        return [];
      }
    },
    rowName: {
      type: String,
      require: true,
      default: 'name'
    },
    rowField: {
      type: String,
      require: true,
      default: 'title'
    }
  },
  data () {
    return {};
  },
  computed: {
    tdWidth () {
      const len = this.columns.length;
      if (len) {
        return (100 / len).toFixed(4) + '%';
      } else {
        return '100%';
      }
    }
  },
  methods: {
    handlerChange (e) {
      const val = e.target.value;
      var reg = new RegExp(this.compositeValidate);
      if (reg) this.isWrong = !reg.test(val);
    }
  }
};
</script>
<style scoped lang="less">
.lc-card-table {
  .header-box {
    display: flex;
    align-items: center;
    background: #faf9f8;
    // border: 1px solid #e5e5e5;
    height: 43px;
    margin-bottom: 10px;

    .title {
      font-size: 18px;
      color: #474848;
      font-weight: 400;
    }
  }

  .body-box {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border: 1px solid RGB(229, 229, 229);
    box-sizing: border-box;
    min-height: 100px;
    overflow: hidden;
    margin-bottom: 10px;

    .body-header {
      background-color: rgba(250, 249, 248, 1);
      font-size: 12px;
      height: 38px;
      padding-left: 18px;
      display: flex;
      align-items: center;

      .label-key {
        color: #aaa;
      }

      .label-value {
        color: #333;
      }
    }

    .body-content {
      min-height: 100px;
      display: flex;

      .lc-Info {
        border-right: 1px solid RGB(229, 229, 229) !important;
        width: var(--tdWidth) !important;
        min-width: 10px !important;
        flex-wrap: wrap !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .lc-Info-column {
        flex: 1;
        border: 1px solid;
      }
      .lc-Info-column:nth-child(odd) {
        background-color: #e2f6ff;
      }
      .lc-Info-column:nth-child(even) {
        background-color: #aad3fc;
      }
      .lc-Info:last-child {
        border-right: 0 !important;
      }
    }
  }
}
</style>
