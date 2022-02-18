<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/Home">首页</router-link>
      </li>
      <li>
        <router-link to="/Crypt">文件加密</router-link>
      </li>
      <li>
        <router-link to="/Gameini">参数生成</router-link>
      </li>
    </ul>
    
  </div>
  
</template>

<script>
export default {
    name:'Nav'
};
</script>

<style scope>
* {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
ul li a {
  float: left;
  color: black;
  text-decoration: none;
  padding: 0 40px;
  line-height: 60px;
}
ul li a:hover {
  background-color: #a1a0a0;
  color: coral;
  border-bottom: 2px solid #60adf8;
}
.nav {
  border-top: 3px solid coral;
  background-color: #c3ccddee;
  height: 60px;
  margin-bottom: 5px;
}
</style>