<template>
  <el-row>
    <el-col :span="20">
      <el-form
        :model="product"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop="coverImg">
          <el-input v-model="product.coverImg"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="product.price"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="descriptions">
          <el-input type="textarea" v-model="product.descriptions"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="quantity">
          <el-input v-model="product.quantity"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import { createOne } from '@/api/product'
export default {
  data() {
    return {
      product: {
        name: '',
        quantity: 0,
        descriptions: '',
        coverImg: '',
        price: 0
      },
      rules: {
        name: { required: true, message: '请输入商品名称', trigger: 'blur' }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //alert('submit!')提交成功的方法
          const res = await createOne(this.product)
          this.$message({
            message: '创建成功',
            type: 'success'
          })
          this.$router.push({ name: 'ProductsList' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
