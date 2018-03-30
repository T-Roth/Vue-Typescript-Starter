<template>
  <div>
    <h1>Leaderboard</h1>
    <b-form-input v-model="searchText" placeholder="Search"/>
    <b-table striped hover :items="filteredItems" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
      <template slot="image" slot-scope="data">
        <div class="padding-none align-left">
          <div class="profile-img profile-img-xs" style="display:inline">
              <img class="img-responsive" src="https://msc-qa.azurewebsites.net/api/Media/GetPersonImage?personKey=c7206181-c75f-4109-bb7e-7b1e0d2b24ac&height=50&width=44&mode=crop&scale=both" />
          </div>
          {{data.item.firstName}} {{data.item.lastName}}
      </div>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'
import Service from "../services/leaderboard";
import _ from "lodash";
@Component({})
export default class Leaderboard extends Vue {

  data() {
    return  {
      leaderboard: [],
      filteredItems: [],
      fields: [{key:"stepCountPosition", label: "Position", sortable: true}, {key:"image", label:"Name", sortable: true}, {key: "stepsToDate", sortable: true}, {key: "monthTotal", sortable: true}, {key: "todayTotal", sortable: true}, {key: "pledgeAmountToDate", sortable: true}, {key: "pledgeTotalPosition", sortable: true}, {key: "deviceBrand", sortable: true} ],
      sortBy: 'stepCountPosition',
      sortDesc: false
    }
  }
  leaderboard: [{}]
  filteredItems: [{}]

  searchText:string = "";

  lazy = _.debounce(function(){
      console.log("searchtext throttle");
      let self = this;
      this.filteredItems = this.leaderboard.filter((item:any)=>{
        if(self.searchText == "") return true;
        return (item.firstName.toLowerCase().indexOf(self.searchText.toLowerCase())) >= 0;
        //return true;
      })
  },1000);

  @Watch('searchText')
  onPropertyChanged(value: string, oldValue: string) {
    console.log("searchtext");
    // Do stuff with the watcher here.
    this.lazy();
  }

  created () {
    var self = this;
    console.log("mounted leaderboard");
    Service.getLeaderboard().then((results)=>{
        self.leaderboard = results.personChallengeSummaries;
        self.filteredItems = self.leaderboard;
    });
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
