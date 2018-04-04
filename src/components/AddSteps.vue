<template>
  <div>
    <div class="row i-masthead page-masthead padding-top-header padding-bottom" id="content" role="main">
      <div class="container">
          <div class="row margin-top">
              <div class="col-sm-6 col-xs-7">
                  <h3 class="text-white margin-top"> Add Steps</h3>
              </div>
              <div class="col-sm-6 col-xs-5 padding-top-md">
                  <button class="btn btn-none pull-right" v-on:click="save">Save</button>
              </div>
          </div>
      </div>
    </div>
    <div v-for="month in months" :key="month.key">
        <add-steps-month v-bind:data="month" ></add-steps-month>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'
import Service from "../services/steps";
import _ from "lodash";
import Moment from "moment";
import AddStepsMonth from "./AddStepsMonth.vue";
import MonthSteps from "../models/MonthSteps";
import DateStep from "../models/DateSteps";


@Component({
  components: { "add-steps-month": AddStepsMonth }
})
export default class AddSteps extends Vue {

  data() {
    return  {
      steps: [],
    }
  }
  steps: IDateStep[]


  save(){
    Service.saveSteps(this.steps).then((result)=>{
      alert(result);
    })
  }

  get months():IMonthSteps[] {
    if(this.steps.length == 0)
        return [];

    let dates = this.steps.map((step)=>{return step.stepCountDate}),
      minDate = Moment(dates[0]),
      maxDate = Moment(dates[dates.length-1]),
      months = maxDate.diff(minDate, "month"),
      results: IMonthSteps[] = [];


      for(let i = 0; i <= months; i++) {
        let d = Moment(minDate).add(i, "month"),
          monthKey = d.format("MMYYYY"),
          dateSteps = this.steps.filter((d:DateStep)=>{
              return Moment(d.stepCountDate).format("MMYYYY") == monthKey;
          });

        results.push(new MonthSteps(d.toDate(), dateSteps));
      }

    return results;
  }

  @Watch('months')
  onPropertyChanged(value: any, oldValue: any) {
    console.log("month changed");
  }


  created () {
    var self = this;
    console.log("mounted addsteps");
    return Service.getSteps().then((results)=>{
        self.steps = results.dailySteps.map((item: IDateStep)=>{
            return new DateStep(item.stepCountDate, item.stepCountTotal);
        });
    });
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
