<template>
  <div>
    <el-button @click="$router.push({name:'ProductsNew'})" type="primary">新增</el-button>
    <div>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="序号" width="95" type="index"></el-table-column>
        <el-table-column label="商品名字" prop="name"></el-table-column>
        <el-table-column label="商品图片" width="250" align="center">
          <template slot-scope="scope">
            <!-- 如果要自定义组件的话 要给template加 clot-scope="scope" scope.row 表示当前行的数据 -->
            <img
              :src="scope.row.coverImg?scope.row.coverImg:'https://img04.sogoucdn.com/v2/thumb/crop/xy/ai/x/0/y/0/w/120/h/90/iw/90/ih/67.5/t/0/ir/3?t=2&appid=200997&url=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F6150%2Fcut-20181029112521-659563047_jpg_437_349_35847.jpg%2F300&referer=http%3A%2F%2Fbaike.sogou.com%2Fv93804.htm%3FfromTitle%3D%25E5%259B%25BE%25E7%2589%2587&sign=deaa098fb9ba69898e64d5dfc7b17ccf'"
            />
          </template>
        </el-table-column>
        <!-- 如果不需要自定义组件的话 直接在el-table-column标签上写prop属性 -->
        <el-table-column label="价格" width="110" align="center" prop="price"></el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="small" @click="editOne(scope.row)">修改</el-button>
            <el-button size="small" type="danger" @click="delOne(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="changeHandle"
        background
        layout="prev, pager, next"
        :total="totalCount"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
// @符号表示src目录
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {
    this.loadData()
  },
  methods: {
    editOne(v) {
      this.$router.push({
        name: 'ProductsEdit',
        params: {
          id: v._id
        }
      })
    },
    delOne(v) {
      methods: {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.delLoad(v._id)
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    changeHandle(p) {
      this.loadData({ page: p })
    },
    ...mapActions('products', ['loadData', 'delLoad'])
  },
  computed: {
    ...mapState('products', ['list', 'listLoading', 'totalCount'])
  }
}
</script>
