import { defineComponent } from "vue";
import { ElTable, ElTableColumn } from "element-plus";
export default defineComponent({
  name: "Table",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    const tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ];
    return () => (
      <div>
        <ElTable data={tableData} style="width: 100%">
          <ElTableColumn prop="date" label="日期" width="180"></ElTableColumn>
          <ElTableColumn prop="name" label="姓名" width="180"></ElTableColumn>
          <ElTableColumn prop="address" label="地址"></ElTableColumn>
        </ElTable>
      </div>
    );
  },
});
