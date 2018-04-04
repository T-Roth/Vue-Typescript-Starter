<template>
    <b-container class="text-left">
      <b-row>
        <b-col>
          <h3>{{data.monthName}}</h3>
        </b-col>
      </b-row>
      <b-row >
          <add-step-day v-for="dateStep in data.dateSteps" :key="dateStep.key" v-bind:data="dateStep" ></add-step-day>
      </b-row>
    </b-container>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'
import Service from "../services/summary";
import _ from "lodash";
import AddStepDay from "./AddStepDay.vue";

@Component({
  props: {data: Object as () => IMonthSteps },
  components:{"add-step-day": AddStepDay}
})
export default class AddStepsMonth extends Vue {

  created () {
    var self = this;
    console.log("mounted AddStepsMonth");
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
