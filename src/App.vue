<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import Component from 'vue-class-component'
import NavHeader from "./components/NavHeader.vue"


@Component({components: {"nav-header": NavHeader }})
export default class App extends Vue {

  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
