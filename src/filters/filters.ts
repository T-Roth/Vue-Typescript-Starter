import Vue from "vue";
import Numeral from "numeral";

export default {
  register : () => {
    Vue.filter("formatNumber", (value, format)=>{
      if(!value) return "";
      return Numeral(value).format(format);
    })
  }
}

