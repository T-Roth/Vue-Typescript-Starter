<template>
  <div class="summary-card">
    <div class="text-center">
      <div class="h3 text-white">{{value}}</div>
      <div class="text-info">{{title}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

@Component({props:{value:[String, Number], title: String}})
export default class SummaryCard extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary-card {
  font-weight: normal;
  padding: 15px;
  border-radius: 10px;
  background-color: #00000099;
}

</style>
