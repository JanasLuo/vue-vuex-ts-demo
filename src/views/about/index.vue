<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="echart" id="bar" ref="bar"></div>
  </div>
</template>
<script lang="ts">

import entry from './entry'
export default entry

// import { Component, Vue } from "vue-property-decorator";
// import echarts from "echarts";

// @Component({})
// export default class Home extends Vue {
//   public option: object = {
//     xAxis: {
//       type: "category",
//       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//     },
//     yAxis: {
//       type: "value"
//     },
//     series: [
//       {
//         data: [820, 932, 901, 934, 1290, 1330, 1320],
//         type: "line"
//       }
//     ]
//   };
//   public mounted(): void {
//     // let dom: any = document.getElementById("bar");
//     this.echarts.init(this.$refs.bar).setOption(this.option);

//     // let dom :any = this.$refs.bar
//     // echarts.init(dom).setOption(this.option);
//   }
// }
</script>
<style>
  .echart{
    height:500px;
    width:600px;
  }
</style>
