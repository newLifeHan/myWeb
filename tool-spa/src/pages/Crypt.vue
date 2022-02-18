<template>
  <div class="cryptDiv">
    
    <el-input
      ref="fileName"
      v-model="fileName"
      size="mini"
      placeholder="请输入内容"
    ></el-input>
    <el-input
      ref="DK"
      v-model="DKName"
      size="mini"
      placeholder="请输入DirectoryKey"
    ></el-input>
    <el-button type="primary" @click="toSearch">查询</el-button>
    <el-input
      type="textarea"
      :rows="10"
      placeholder="加密结果"
      v-model="textarea"
    >
    </el-input>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Crypt",
  data() {
    return {
      fileName: "",
      DKName: "",
      textarea :'',
    };
  },
  methods: {
    toSearch() {
      if(this.fileName === ''){
        this.$alert('请输入要加密的文件名称', '请注意', {
          confirmButtonText: '确定',
          type: 'warning',
          center:true,
          callback: () => {
            this.$refs.fileName.focus()
          }
        });
        return;
      }
      if(this.DKName === ''){
        this.$alert('请输入DirectoryKey', '请注意', {
          confirmButtonText: '确定',
          type: 'warning',
          center:true,
          callback: () => {
            this.$refs.DK.focus()
          }
        });
        return;
      }
      axios
        .post("https://young.mba:3332/toCrypt", {
          filename: this.fileName,
          DK: this.DK,
        })
        .then(
          (response) => {
            console.log(response.data);
            if(response.data.muluname && response.data.mulucrypt){
              this.textarea = "目录名称: "+response.data.muluname+'\n'+
                            "目录加密: "+ response.data.mulucrypt+'\n'+
                            "文件加密: "+response.data.filename 
            }else{
              this.textarea = `文件加密: ${response.data.filename}`
            }
            
          },
          (error) => {
            console.log(error.message);
          }
        );
    },
  },
};
</script>

<style scoped>

*{
  margin: 20px 0 0 20px;
}
.cryptDiv /deep/ input {
  width: 220px;
  height: 30px;
 
}
.cryptDiv /deep/ button {
  margin: 20px 0 0 20px;
}
.cryptDiv /deep/ textarea{
  width: 600px;
}

</style>