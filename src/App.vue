<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/show/blogs">blogs</router-link> |
      <router-link to="/show/questions">questions</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>
