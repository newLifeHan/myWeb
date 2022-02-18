<template>
  <div class="gameDiv">
    <div>
      <span>请上传游戏参数config.xls</span>
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="https://young.mba:3332/toini"
      multiple
      accept="xls"
      :on-success="showResult"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>

    <el-input
      type="textarea"
      :rows="20"
      width="600px"
      placeholder="game.ini生成结果"
      v-model="result"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Gameini",
  data() {
    return {
      result: "",
    };
  },
  methods: {
    showResult(response) {
      this.result = response;
    },
  },
};
</script>

<style scoped>
* {
  margin: 20px 0 0 20px;
}
.gameDiv /deep/ textarea {
  width: 600px;
}
</style>