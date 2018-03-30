<template>
  <div class="row i-masthead scoreboard-masthead padding-top-header" id="content">
    <b-container>
      <b-row>
        <b-col class="text-center">
          <div class="padding margin-top">
            <h4 class="text-info">TOTAL STEP COUNT</h4>
            <h1 class="text-white">{{summary.totalStepCount | formatNumber("0,0")}}</h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <div class="wrapper-block-outer">
          <summary-card :value="summary.totalParticipantCount" title="Participants" class="wrapper-block"></summary-card>
          <summary-card :value="summary.averageDailyStepCount | formatNumber('0,0.00')" title="Average Steps Per Day" class="wrapper-block"></summary-card>
          <summary-card :value="approximateMiles | formatNumber('0,0.00')" title="Approximate Miles" class="wrapper-block"></summary-card>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="leaderboard">
      <b-row>
        <b-col>
          <h3>
            <strong>Leaderboard</strong>
          </h3>
        </b-col>
      </b-row>
      <b-row>
          <b-col cols="4" v-for="leader in leaders" v-bind:key="leader.personKey">
            <person-card v-bind:data="leader" class="item active" ></person-card>
          </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SummaryCard from "./SummaryCard.vue";
import PersonCard from "./SummaryPersonCard.vue";
import summaryService from "../services/summary";
import leaderboardService from "../services/leaderboard";

@Component({
  components: { "summary-card": SummaryCard, "person-card": PersonCard }
})
export default class Summary extends Vue {
  data() {
    return {
      summary: {},
      leaders: []
    };
  }
  summary: {};
  leaders: [{}];

  get approximateMiles() {
    let summary = <any>this.summary;
    let totalSteps = summary.totalStepCount;
    return totalSteps / 2000;
  }

  created() {
    var self = this;
    console.log("mounted summary");
    summaryService.getSummary().then(results => {
      self.summary = results;
    });
    leaderboardService.getLeaderboard().then(results => {
      self.leaders = results.personChallengeSummaries.slice(0, 3);
    });
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.i-masthead h1{
  font-size:120px;
  font-family: "Open Sans", sans-serif

}
  .scoreboard-masthead.i-masthead {
    background-size: cover;
    background-image: url(https://msc-qa.azurewebsites.net/Content/images/img_msc-scoreboard3.jpg);
    padding-bottom: 70px;
    border-bottom: 5px solid #3a8fcb !important;
}
.i-masthead .total-steps {
  padding:50px
}
.i-masthead .summary-card {
  width:200px;
  margin-left:10px;
  display:inline-block;
}*/
</style>
