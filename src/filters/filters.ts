import Vue from "vue";
import Numeral from "numeral";
import Moment from "moment";

export default {
  register : () => {
    Vue.filter("formatNumber", (value, format)=>{
      if(!value) return "";
      return Numeral(value).format(format);
    });

    Vue.filter("formatDate", (value, format)=>{
      if(!value) return "";
      return Moment(value).format("MM/DD/YYYY");
    });

  }
}

