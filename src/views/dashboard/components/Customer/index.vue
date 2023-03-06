<template>
  <div class="Customer">
    <el-row>
      <el-col :span="9" style="font-size: 16px; font-weight: 700; color: #fff">Customer Details</el-col>
      <el-row type="flex" justify="space-around">
        <el-col :span="3"><Buttons :icon="iconF.icon">Filter</Buttons></el-col>
        <el-col :span="3"><Buttons :icon="iconD.icon" :Color="iconD.color">Download</Buttons></el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%" height="180">
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column prop="Customer" label="Customer"> </el-table-column>
        <el-table-column prop="Date" label="Date"> </el-table-column>
        <el-table-column prop="InvoicedAmount" label="Invoiced Amount" width="180"> </el-table-column>
        <el-table-column prop="Status" label="Status"> </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import tableData from './index.js'
import Buttons from '../Sales/Buttons/Buttons.vue'
export default {
  components: {
    Buttons
  },
  data() {
    return {
      tableData: tableData,
      iconF: {
        icon: 'el-icon-scissors'
      },
      iconD: {
        icon: 'el-icon-download',
        color: '#FAD85D'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Customer {
  width: 623px;
  height: 248px;
  background: #161717;
  border-radius: 24px;
  padding: 20px 13px;
  box-sizing: border-box;
}
</style>
