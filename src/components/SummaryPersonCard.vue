<template>
  <div class="block">
      <div class="col-xs-4 padding-none">
          <div class="profile-img profile-img-lg">
              <img class="img-responsive" src="https://msc-qa.azurewebsites.net/api/Media/GetPersonImage?personKey=c7206181-c75f-4109-bb7e-7b1e0d2b24ac&height=50&width=44&mode=crop&scale=both" />
          </div>
      </div>
      <div class="col-xs-8">
          <h5 class="uppercase margin-none"><strong>{{data.firstName}}</strong></h5>
          <h3 class="margin-none">{{data.lastName}}</h3>
          <label class="uppercase text-muted margin-btm-none">Total</label>
          <h4 class="margin-none text-muted">{{data.todayTotal}}</h4>
          <label class="uppercase text-muted margin-btm-none">Daily Average</label>
          <h4 class="margin-none text-muted">{{data.averageStepsPerDay}}</h4>
      </div>
      <span class="badge">{{data.stepCountPosition}}</span>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

interface IPersonSummary {
 "personKey": string;
  "firstName": string;
  "lastName": string;
  "imageHashValue": string;
  "stepsToDate": number;
  "monthTotal": number;
  "todayTotal": number;
  "stepCountPosition": number;
  "averageStepsPerDay": number;
  "pledgeAmountToDate": number;
  "pledgeTotalPosition": number;
  "stepCountLastUpdateDateTimeUtc": Date;
  "lastStepCountDateWithValue": Date;
  "deviceBrand": string;
}

@Component({props: {data: Object as () => IPersonSummary }})
export default class PersonCard extends Vue {

  /*get fullName() {
    return `${this.data.firstName} ${this.data.lastName}`;
  }*/

}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
