<template>
  <div>
    <el-button @click="add">add</el-button>
    <el-button @click="update">update</el-button>
    <el-button @click="del">delete</el-button>
    <el-table
      :data="tableData"
      ref="eTable"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="name"
        label="name">
      </el-table-column>
      <el-table-column
        prop="age"
        label="age">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="sex">
      </el-table-column>
      <el-table-column
        prop="idNo"
        label="idNo">
      </el-table-column>
      <el-table-column
        prop="address"
        label="address">
      </el-table-column>
    </el-table>

    <el-dialog title="demo" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="age" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="sex" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="idNo" :label-width="formLabelWidth">
          <el-input v-model="form.idNo" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">cancle</el-button>
        <el-button type="primary" @click="confirm">confirm</el-button>
      </div>
    </el-dialog>

    <el-dialog title="demo" :visible.sync="dialogFormVisible1">
      <el-form :model="form">
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="age" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="sex" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="idNo" :label-width="formLabelWidth">
          <el-input v-model="form.idNo" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">cancle</el-button>
        <el-button type="primary" @click="confirm1">confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { employeeList, employeeAdd, employeeUpd, employeeDel} from '~/api/employee.js'

  export default {
    name: 'demoTable',
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogFormVisible1: false,
        form: {
          name: '',
          age: '',
          sex: '',
          idNo: '',
          address: ''
        },
        formLabelWidth: '120px',
        tableData: [],
        selection: []
      }
    },
    methods: {
      add() {
          this.form = {
            name: '',
            age: '',
            sex: '',
            idNo: '',
            address: ''
          }
          this.dialogFormVisible = true
      },
      update(row, column) {
          if(typeof(this.selection) == 'undefined' || this.selection.length === 0){
            this.$message({
              message: 'pelease select one item',
              type: 'warning'
            });
            return
          }
          this.dialogFormVisible1 = true
          this.form = this.selection
      },
      del(row, column) {
          if(typeof(this.selection) == 'undefined' || this.selection.length === 0){
            this.$message({
              message: 'pelease select one item',
              type: 'warning'
            });
            return
          }
          this.$confirm('are you sure to delete this item?', '', {
          confirmButtonText: 'ok',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          console.log(this.form + "999")
          employeeDel(this.selection, 'GET').then(response => {
            this.$message('sucess')
            this.getList()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancel'
          });          
        });
      },
      confirm () {
         employeeAdd(this.form, 'GET').then(response => {
            this.$message('sucess')
            this.getList()
            this.dialogFormVisible = false
          })
      },
      confirm1 () {
         employeeUpd(this.form, 'GET').then(response => {
            this.$message('sucess')
            this.getList()
            this.dialogFormVisible1 = false
          })
      },
      getList () {
        employeeList({}, 'GET').then(response => {
            this.tableData = response.data
            this.loading = false
        })
      },
      handleSelectionChange(val) {
        if(val.length >=2){
           let array = val.splice(0,val.length-1)
           array.forEach(row => {
            this.$refs.eTable.toggleRowSelection(row);
         })
        }
        this.selection = val[0]
      }
    },
    mounted() {
      this.loading = true
      this.getList()

    }
  }
</script>