<template>
    <div>
        <p1>这是home</p1><br>
        <el-button type="primary" @click="logOut">退出</el-button>
    </div>
</template>
<script>
export default {
  methods: {
    logOut: function () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
