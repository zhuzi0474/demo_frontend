<template>
  <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
    <el-tab-pane label="employees" name="first">
        <demoTable></demoTable>
    </el-tab-pane>
    <el-tab-pane label="cars" name="second">cars</el-tab-pane>
    <el-tab-pane label="TV" name="third">TV</el-tab-pane>
  </el-tabs>
</template>
<script>
  import demoTable from '~/components/demo_table/demoTable'

  export default {
    components: {
        demoTable
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
          const h = this.$createElement;
          this.$message({
            message: h('p', null, [
              h('span', null, 'test test '),
              h('i', { style: 'color: teal' }, 'VNode')
            ])
        });
      }
    }
  };
</script>