<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-09-11 17:10:47
 * @LastEditors: niezihao
 * @LastEditTime: 2023-09-26 17:30:04
-->
<template>
  <div class="containers">
    <button @click="button">开启/关闭模拟</button>
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
// 引入相关的依赖
import "bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css";

import BpmnModeler from "bpmn-js/lib/Modeler";
import TokenSimulationModule from "bpmn-js-token-simulation";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import { xmlStr } from "../mock/xml.js";
// 自定义侧边栏
import EnhancementPalette from "./EnhancementPalette";
// 汉化
import translations from "../customTranalate/customTranalate";

export default {
  name: "",
  components: {},
  created() {},
  mounted() {
    this.init();
  },
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
    };
  },
  // 方法集合
  methods: {
    button() {
      // debugger;
      this.bpmnModeler.get("toggleMode").toggleMode();
    },
    init() {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas;
      const additionalModules = [];
      additionalModules.push(TokenSimulationModule);
      additionalModules.push(EnhancementPalette);
      additionalModules.push({ translate: ["value", translations] });
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
        additionalModules: additionalModules,
        propertiesProviderModule,
      });
      this.createNewDiagram();
      //隐藏bpmnjs 标签
      this.$nextTick(() => {
        document.getElementsByClassName("bjs-powered-by")[0].style.display =
          "none";
      });
    },
    createNewDiagram() {
      // 将字符串转换成图显示出来
      this.bpmnModeler.importXML(xmlStr, (err) => {
        if (err) {
          // console.error(err)
        } else {
          // 这里是成功之后的回调, 可以在这里做一系列事情
          this.success();
        }
      });
    },
    success() {
      // console.log('创建成功!')
    },
  },
  // 计算属性
  computed: {},
};
</script>

<style lang="less" scoped>
.containers {
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 52px);
}
.canvas {
  width: 100%;
  height: 100%;
}
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}
/deep/ .bts-toggle-mode {
  display: none;
}
</style>
