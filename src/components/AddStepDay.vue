<template>
    <b-col class="col-lg-1 col-md-2 col-sm-3 col-xs-6">
        <small class="text-muted">{{data.stepCountDate | formatDate}}</small>
        <input type="text" class="form-control" v-model="data.stepCountTotal" :disabled="!data.enabledFlag"/>
    </b-col>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'
import Service from "../services/summary";
import _ from "lodash";

@Component({props: {data: Object as () => IDateStep }})
export default class AddStepDay extends Vue {

  created () {
    var self = this;
    console.log("mounted AddStepDay");
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
