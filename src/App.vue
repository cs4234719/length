<template>
  <div id="app">
    <button @click="updatename">点我改名同步版</button>
    <h1>{{$store.state.name}}</h1>
    <h1>{{$store.state.moduleA.names}}</h1>
    <img src="@assets/img/2.png" alt />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    // updatename() {
    //   this.$store.dispatch("Aupdatename", {
    //     name: "hehe",
    //     success: function() {
    //       console.log("成功");
    //     }
    //   });
    // }
  }
};
</script>

<style>
</style>
